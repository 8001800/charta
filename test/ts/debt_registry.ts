import * as BigNumber from "bignumber.js";
import * as chai from "chai";
import * as Web3 from "web3";
import * as ABIDecoder from "abi-decoder";

import {
    Address,
    UInt,
    Bytes32,
    TxData,
    TxDataPayable,
} from "../../types/common";
import {DebtRegistryContract} from "../../types/debt_registry";
import {DebtRegistryEntry} from "../../types/registry/entry";
import {
    LogAddAuthorizedEditAgent,
    LogAddAuthorizedInsertAgent,
    LogModifyEntryCreditor,
    LogRevokeEditAgentAuthorization,
    LogRevokeInsertAgentAuthorization,
} from "../../types/registry/logs";
import {BigNumberSetup} from "./test_utils/bignumber_setup";
import {chaiSetup} from "./test_utils/chai_setup";
import {INVALID_OPCODE, REVERT_ERROR} from "./test_utils/constants";

// Set up Chai
chaiSetup.configure();
const expect = chai.expect;

// Configure BigNumber exponentiation
BigNumberSetup.configure();

const repaymentRouterContract = artifacts.require("RepaymentRouter");
const debtRegistryContract = artifacts.require("DebtRegistry");

// Initialize ABI Decoder for deciphering log receipts
ABIDecoder.addABI(debtRegistryContract.abi);

contract("Debt Registry", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];

    // We choose arbitrary addresses to represent data fields in the registry
    // entries.
    const CREDITOR_1 = ACCOUNTS[1];
    const CREDITOR_2 = ACCOUNTS[2];

    const TERMS_CONTRACT_ADDRESS = ACCOUNTS[3];

    // We choose arbitrary addresses to represent the various contracts
    // that have / lack permission to make changes to the registry.
    const AGENT_1 = ACCOUNTS[4];
    const AGENT_2 = ACCOUNTS[5];
    const AGENT_3 = ACCOUNTS[6];
    const AGENT_4 = ACCOUNTS[7];

    const ATTACKER = ACCOUNTS[8];
    const NEW_CONTRACT_OWNER = ACCOUNTS[9];

    let registry: DebtRegistryContract;
    let termsContractAddress: Address;

    // We define utility funcitons for the primary state-changing
    // operations permitted on the registry.
    let generateEntryFn: () => DebtRegistryEntry;
    let insertEntryFn: (entry: DebtRegistryEntry,
                        options?: TxDataPayable)
        => Promise<string>;
    let modifyEntryCreditorFn: (entry: DebtRegistryEntry,
                                newOwner: Address,
                                options?: TxDataPayable)
        => Promise<string>;

    const ARBITRARY_TERMS_CONTRACT_PARAMS
        = "arbitrary terms contract param string";
    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    before(async () => {
        const truffleContract = await debtRegistryContract.deployed();

        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const registryWeb3Contract = web3.eth
            .contract(debtRegistryContract.abi).at(truffleContract.address);

        registry = new DebtRegistryContract(registryWeb3Contract, TX_DEFAULTS);

        // TODO: Replace with example terms contract
        termsContractAddress = NULL_ADDRESS;

        // The version of an entry is mapped to the address of
        // the current RepaymentRouter used in the debt agreement
        const repaymentRouter = await repaymentRouterContract.deployed();
        const VERSION = repaymentRouter.address;

        // DebtRegistryEntries are given a random salt on construction --
        // we use the following function to generate arbitrary
        // DebtRegistryEntries without hash collisions.
        generateEntryFn = () => {
            return new DebtRegistryEntry({
                creditor: CREDITOR_1,
                termsContract: TERMS_CONTRACT_ADDRESS,
                termsContractParameters: "arbitrary terms contract param string",
                version: VERSION,
            });
        };

        insertEntryFn = async (entry: DebtRegistryEntry,
                               options?: TxDataPayable) => {
            return registry.insert.sendTransactionAsync(
                entry.getVersion(),
                entry.getCreditor(),
                entry.getTermsContract(),
                entry.getTermsContractParameters(),
                entry.getSalt(),
                options,
            );
        };

        modifyEntryCreditorFn = async (entry: DebtRegistryEntry,
                                       newCreditor: Address,
                                       options?: TxDataPayable) => {
            return registry.modifyCreditor.sendTransactionAsync(
                entry.getEntryHash(),
                newCreditor,
                options,
            );
        };
    });

    describe("before owner authorizes agents for editing registry", () => {
        it("should throw if any user tries to insert entry", async () => {
            await expect(insertEntryFn(generateEntryFn()))
                .to.eventually.be.rejectedWith(REVERT_ERROR);
        });

        it("should throw if any user tries to edit entry", async () => {
            await expect(modifyEntryCreditorFn(generateEntryFn(), AGENT_1))
                .to.eventually.be.rejectedWith(REVERT_ERROR);
        });
    });

    describe("owner authorizes agent(s) for inserting entries", () => {
        describe("first agent", () => {
            let res: Web3.TransactionReceipt;

            before(async () => {
                const txHash = await registry.addAuthorizedInsertAgent
                    .sendTransactionAsync(AGENT_1);
                res = await web3.eth.getTransactionReceipt(txHash);
            });

            it("should emit log saying first agent authorized", async () => {
                const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = LogAddAuthorizedInsertAgent(registry.address, AGENT_1);

                expect(logReturned).to.deep.equal(logExpected);
            });

            it("should return first agent as authorized", async () => {
                await expect(registry.getAuthorizedInsertAgents.callAsync())
                    .to.eventually.deep.equal([AGENT_1]);
            });
        });

        describe("second agent", () => {
            let res: Web3.TransactionReceipt;

            before(async () => {
                const txHash = await registry.addAuthorizedInsertAgent
                    .sendTransactionAsync(AGENT_2);
                res = await web3.eth.getTransactionReceipt(txHash);
            });

            it("should emit log saying second agent authorized", async () => {
                const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = LogAddAuthorizedInsertAgent(registry.address, AGENT_2);

                expect(logReturned).to.deep.equal(logExpected);
            });

            it("should return both first and second agents authorized", async () => {
                await expect(registry.getAuthorizedInsertAgents.callAsync())
                    .to.eventually.deep.equal([AGENT_1, AGENT_2]);
            });
        });

        it("should throw when unauthorized attacker inserts entry", async () => {
            await expect(insertEntryFn(generateEntryFn(), { from: AGENT_3 }))
                .to.eventually.be.rejectedWith(REVERT_ERROR);
        });

        describe("first agent inserts new entry into registry", () => {
            let res: Web3.TransactionReceipt;
            let entry: DebtRegistryEntry;

            before(async () => {
                entry = generateEntryFn();
                const txHash = await insertEntryFn(entry, { from: AGENT_1 });
                res = await web3.eth.getTransactionReceipt(txHash);
            });

            it("should emit a log saying the debt is inserted", async () => {
                const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = entry.getLogInsertEntry(registry.address);

                expect(logReturned).to.deep.equal(logExpected);
            });

            it("should make entry retrievable by its hash", async () => {
                await expect(registry.get.callAsync(entry.getEntryHash()))
                    .to.eventually.deep.equal([
                        entry.getVersion(),
                        entry.getCreditor(),
                        entry.getTermsContract(),
                        entry.getTermsContractParameters(),
                ]);
            });

            it("should return the correctly hashed terms contract parameters", async () => {
                await expect(registry.getTermsContractParametersHash.callAsync(entry.getEntryHash()))
                    .to.eventually.equal(entry.getTermsContractParametersHash());
            });

            it("should throw when first agent tries editing entry", async () => {
                await expect(modifyEntryCreditorFn(entry, AGENT_1, { from: AGENT_1 }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("second agent inserts new entry into registry", () => {
            let res: Web3.TransactionReceipt;
            let entry: DebtRegistryEntry;

            before(async () => {
                entry = generateEntryFn();
                const txHash = await insertEntryFn(entry, { from: AGENT_2 });
                res = await web3.eth.getTransactionReceipt(txHash);
            });

            it("should emit a log saying the debt is inserted", async () => {
                const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = entry.getLogInsertEntry(registry.address);

                expect(logReturned).to.deep.equal(logExpected);
            });

            it("should make entry retrievable by its hash", async () => {
                await expect(registry.get.callAsync(entry.getEntryHash()))
                    .to.eventually.deep.equal([
                        entry.getVersion(),
                        entry.getCreditor(),
                        entry.getTermsContract(),
                        entry.getTermsContractParameters(),
                ]);
            });

            it("should throw when second agent tries editing entry", async () => {
                await expect(modifyEntryCreditorFn(entry, AGENT_2, { from: AGENT_2 }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("owner authorizes agent(s) for editing entries", () => {
            describe("third agent", () => {
                let res: Web3.TransactionReceipt;

                before(async () => {
                    const txHash = await registry.addAuthorizedEditAgent.sendTransactionAsync(AGENT_3);
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should emit log saying third agent authorized", async () => {
                    const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = LogAddAuthorizedEditAgent(registry.address, AGENT_3);

                    expect(logReturned).to.deep.equal(logExpected);
                });

                it("should return first agent as authorized", async () => {
                    await expect(registry.getAuthorizedEditAgents.callAsync())
                        .to.eventually.deep.equal([AGENT_3]);
                });
            });

            describe("fourth agent", () => {
                let res: Web3.TransactionReceipt;

                before(async () => {
                    const txHash = await registry.addAuthorizedEditAgent.sendTransactionAsync(AGENT_4);
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should emit log saying third agent authorized", async () => {
                    const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = LogAddAuthorizedEditAgent(registry.address, AGENT_4);

                    expect(logReturned).to.deep.equal(logExpected);
                });

                it("should return first agent as authorized", async () => {
                    await expect(registry.getAuthorizedEditAgents.callAsync())
                        .to.eventually.deep.equal([AGENT_3, AGENT_4]);
                });
            });

            it("should throw when unauthorized attacker edits entry", async () => {
                const entry = generateEntryFn();
                await insertEntryFn(entry, { from: AGENT_1 });
                await expect(modifyEntryCreditorFn(generateEntryFn(), AGENT_2,
                    { from: AGENT_2 })).to.eventually.be.rejectedWith(REVERT_ERROR);
            });

            describe("third agent edits existing entry in registry", () => {
                let res: Web3.TransactionReceipt;
                let entry: DebtRegistryEntry;

                before(async () => {
                    entry = generateEntryFn();
                    await insertEntryFn(entry, { from: AGENT_1 });
                    const txHash = await modifyEntryCreditorFn(entry,
                        CREDITOR_2, { from: AGENT_3 });
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should emit a log saying the debt is edited", () => {
                    const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = LogModifyEntryCreditor(
                        registry.address,
                        entry.getEntryHash(),
                        entry.getCreditor(),
                        CREDITOR_2,
                    );

                    expect(logReturned).to.deep.equal(logExpected);
                });

                it("should reflect changes in stored entry", async () => {
                    const returnedEntry =
                        await registry.get.callAsync(entry.getEntryHash());
                    const creditor = returnedEntry[1];
                    expect(creditor).to.equal(CREDITOR_2);
                });
            });

            describe("fourth agent edits existing entry in registry", () => {
                let res: Web3.TransactionReceipt;
                let entry: DebtRegistryEntry;

                before(async () => {
                    entry = generateEntryFn();
                    await insertEntryFn(entry, { from: AGENT_1 });
                    const txHash = await modifyEntryCreditorFn(entry,
                        CREDITOR_2, { from: AGENT_4 });
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should emit a log saying the debt is edited", () => {
                    const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = LogModifyEntryCreditor(
                        registry.address,
                        entry.getEntryHash(),
                        entry.getCreditor(),
                        CREDITOR_2,
                    );

                    expect(logReturned).to.deep.equal(logExpected);
                });

                it("should reflect changes in stored entry", async () => {
                    const returnedEntry =
                        await registry.get.callAsync(entry.getEntryHash());
                    const creditor = returnedEntry[1];
                    expect(creditor).to.equal(CREDITOR_2);
                });
            });

            it("should throw when third agent tries inserting entry", async () => {
                await expect(insertEntryFn(generateEntryFn(),
                    { from: AGENT_3 })).to.eventually.be.rejectedWith(REVERT_ERROR);
            });

            it("should throw when fourth agent tries inserting entry", async () => {
                await expect(insertEntryFn(generateEntryFn(),
                    { from: AGENT_4 })).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("owner revokes second agent from inserting entries", () => {
            let res: Web3.TransactionReceipt;

            before(async () => {
                const txHash = await registry.revokeInsertAgentAuthorization.sendTransactionAsync(AGENT_2,
                    { from: CONTRACT_OWNER});
                res = await web3.eth.getTransactionReceipt(txHash);
            });

            it("should emit log saying agent authorization revoked", async () => {
                const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                const logExpected =
                    LogRevokeInsertAgentAuthorization(registry.address, AGENT_2);

                expect(logReturned).to.deep.equal(logExpected);
            });

            it("should return second agent as unauthorized", async () => {
                await expect(registry.getAuthorizedInsertAgents.callAsync())
                    .to.eventually.deep.equal([AGENT_1]);
            });

            it("should throw when second agent inserts entry", async () => {
                await expect(insertEntryFn(generateEntryFn(),
                    { from: AGENT_2 })).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("owner revokes third agent from editing entries", () => {
            let res: Web3.TransactionReceipt;

            before(async () => {
                const txHash = await registry.revokeEditAgentAuthorization.sendTransactionAsync(AGENT_3,
                    { from: CONTRACT_OWNER});
                res = await web3.eth.getTransactionReceipt(txHash);
            });

            it("should emit log saying agent authorization revoked", async () => {
                const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                const logExpected =
                    LogRevokeEditAgentAuthorization(registry.address, AGENT_3);

                expect(logReturned).to.deep.equal(logExpected);
            });

            it("should return third agent as unauthorized", async () => {
                await expect(registry.getAuthorizedEditAgents.callAsync())
                    .to.eventually.deep.equal([AGENT_4]);
            });

            it("should throw when third agent edits entry", async () => {
                await insertEntryFn(generateEntryFn(), { from: AGENT_1 });
                await expect(modifyEntryCreditorFn(generateEntryFn(), CREDITOR_2,
                    { from: AGENT_3 })).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("Global Invariants", () => {
            describe("No hash collisions on inserts", () => {
                it("should throw on hash collision insert", async () => {
                    const entry = generateEntryFn();
                    await insertEntryFn(entry, { from: AGENT_1 });
                    await expect(insertEntryFn(entry,
                        { from: AGENT_1 })).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("No edits on non-existent entries", () => {
                it("should throw on non-existent entry edit", async () => {
                    const entry = generateEntryFn();
                    await expect(modifyEntryCreditorFn(entry, CREDITOR_2,
                        { from: AGENT_4 })).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("Only owner can authorize and revoke agents", () => {
                it("should throw if non-owner authorizes agent", async () => {
                    await expect(registry.addAuthorizedInsertAgent.sendTransactionAsync(ATTACKER,
                        { from: ATTACKER })).to.eventually.be.rejectedWith(REVERT_ERROR);
                    await expect(registry.addAuthorizedEditAgent.sendTransactionAsync(ATTACKER,
                        { from: ATTACKER })).to.eventually.be.rejectedWith(REVERT_ERROR);
                });

                it("should throw if non-owner revokes agent", async () => {
                    await expect(registry.revokeInsertAgentAuthorization.sendTransactionAsync(ATTACKER,
                        { from: ATTACKER })).to.eventually.be.rejectedWith(REVERT_ERROR);
                    await expect(registry.revokeEditAgentAuthorization.sendTransactionAsync(ATTACKER,
                        { from: ATTACKER })).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("Only owner can transfer ownership", () => {
                it("should throw if non-owner transfers ownership", async () => {
                    await expect(registry.transferOwnership.sendTransactionAsync(ATTACKER,
                        { from: ATTACKER })).to.eventually.be
                        .rejectedWith(REVERT_ERROR);
                });

                it("should let owner transfer ownership", async () => {
                    await registry.transferOwnership.sendTransactionAsync(NEW_CONTRACT_OWNER,
                        { from: CONTRACT_OWNER });
                    await expect(registry.owner.callAsync()).to.eventually
                        .equal(NEW_CONTRACT_OWNER);
                });
            });
        });
    });
    // TODO: Add escape hatch tests
});

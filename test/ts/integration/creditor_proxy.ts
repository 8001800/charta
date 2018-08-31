// External Libraries
import * as ABIDecoder from "abi-decoder";
import * as Web3 from "web3";
import * as _ from "lodash";
import * as chai from "chai";
import * as moment from "moment";
import { BigNumber } from "bignumber.js";

// Test Utils
import * as Units from "../test_utils/units";
import {
    multiSigExecuteAfterTimelock,
    multiSigExecutePauseImmediately,
} from "../test_utils/multisig";
import ChaiSetup from "../test_utils/chai_setup";
import { BigNumberSetup } from "../test_utils/bignumber_setup";
import { Web3Utils } from "../../../utils/web3_utils";

// Types
import { SignedDebtOffer } from "../../../types/proxy/debt_offer";

// Logs
import { LogDebtOfferFilled, LogError } from "../logs/creditor_proxy";

// Factories
import { SimpleInterestParameters } from "../factories/terms_contract_parameters";
import { DebtOfferFactory } from "../factories/debt_offer_factory";

// Wrappers
import { CreditorProxyContract } from "../../../types/generated/creditor_proxy";
import { ContractRegistryContract } from "../../../types/generated/contract_registry";
import { CreditorProxyErrorCodes } from "../../../types/errors";
import { DebtKernelContract } from "../../../types/generated/debt_kernel";
import { DebtRegistryContract } from "../../../types/generated/debt_registry";
import { DebtTokenContract } from "../../../types/generated/debt_token";
import { DummyTokenContract } from "../../../types/generated/dummy_token";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";
import { SimpleInterestTermsContractContract } from "../../../types/generated/simple_interest_terms_contract";
import { TokenRegistryContract } from "../../../types/generated/token_registry";
import { TokenTransferProxyContract } from "../../../types/generated/token_transfer_proxy";
import { DharmaMultiSigWalletContract } from "../../../types/generated/dharma_multi_sig_wallet";

// Constants
import { REVERT_ERROR } from "../test_utils/constants";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Set up utils
const web3Utils = new Web3Utils(web3);

const creditorProxyContract = artifacts.require("CreditorProxy");

contract("Creditor Proxy (Integration Tests)", async (ACCOUNTS) => {
    let creditorProxy: CreditorProxyContract;
    let contractRegistry: ContractRegistryContract;
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let simpleInterestTermsContract: SimpleInterestTermsContractContract;
    let tokenTransferProxy: TokenTransferProxyContract;
    let debtTokenContract: DebtTokenContract;
    let debtRegistryContract: DebtRegistryContract;

    let dummyREPToken: DummyTokenContract;

    let defaultOfferParams: { [key: string]: any };
    let orderFactory: DebtOfferFactory;

    let multiSig: DharmaMultiSigWalletContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];
    const DEBTOR_1 = ACCOUNTS[2];
    const CREDITOR_1 = ACCOUNTS[3];
    const UNDERWRITER = ACCOUNTS[4];
    const RELAYER = ACCOUNTS[6];
    const MALICIOUS_TERMS_CONTRACTS = ACCOUNTS[7];
    const ALTERNATIVE_TOKEN_ADDRESS = ACCOUNTS[8];

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const reset = async () => {
        const dummyTokenRegistryContract = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);
        const dummyREPTokenAddress = await dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync(
            "REP",
        );
        dummyREPToken = await DummyTokenContract.at(dummyREPTokenAddress, web3, TX_DEFAULTS);

        debtTokenContract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtRegistryContract = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        creditorProxy = await CreditorProxyContract.deployed(web3, TX_DEFAULTS);
        contractRegistry = await ContractRegistryContract.deployed(web3, TX_DEFAULTS);
        kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
        multiSig = await DharmaMultiSigWalletContract.deployed(web3, TX_DEFAULTS);
        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        simpleInterestTermsContract = await SimpleInterestTermsContractContract.deployed(
            web3,
            TX_DEFAULTS,
        );

        const termsContractParameters = SimpleInterestParameters.pack({
            principalTokenIndex: new BigNumber(0), // Our migrations set REP up to be at index 0 of the registry
            principalAmount: Units.ether(1), // principal of 1 ether
            interestRateFixedPoint: Units.interestRateFixedPoint(2.5), // interest rate of 2.5%
            amortizationUnitType: new BigNumber(1), // The amortization unit type (weekly)
            termLengthUnits: new BigNumber(4), // Term length in amortization units.
        });

        const latestBlockTime = await web3Utils.getLatestBlockTime();

        defaultOfferParams = {
            kernelVersion: kernel.address,
            creditor: CREDITOR_1,
            repaymentRouterVersion: repaymentRouter.address,
            debtor: DEBTOR_1,
            underwriter: UNDERWRITER,
            termsContract: simpleInterestTermsContract.address,
            principalToken: dummyREPToken.address,
            relayer: RELAYER,
            underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(1.35),
            principalAmount: Units.ether(1),
            underwriterFee: Units.ether(0.0015),
            relayerFee: Units.ether(0.0015),
            creditorFee: Units.ether(0.002),
            debtorFee: Units.ether(0.001),
            expirationTimestampInSec: new BigNumber(
                moment
                    .unix(latestBlockTime)
                    .add(30, "days")
                    .unix(),
            ),
            termsContractParameters,
            orderSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER },
        };

        orderFactory = new DebtOfferFactory(defaultOfferParams);

        // Setup ABI decoder in order to decode logs
        ABIDecoder.addABI(creditorProxyContract.abi);
        ABIDecoder.addABI(debtTokenContract.abi);
        ABIDecoder.addABI(debtRegistryContract.abi);
    };

    before(reset);

    after(() => {
        // Tear down ABIDecoder before next set of tests
        ABIDecoder.removeABI(creditorProxyContract.abi);
    });

    describe("Initialization & Upgrades", async () => {
        it("points to correct contract registry", async () => {
            expect(creditorProxy.contractRegistry.callAsync()).to.eventually.equal(
                contractRegistry.address,
            );
        });
    });

    describe("#fillDebtOffer", () => {
        let debtOffer: SignedDebtOffer;

        const testShouldReturnError = async (
            order: SignedDebtOffer,
            errorCode: number,
            signaturesR?: string[],
            signaturesS?: string[],
            signaturesV?: number[],
        ) => {
            const txHash = await creditorProxy.fillDebtOffer.sendTransactionAsync(
                order.getCreditor(),
                order.getOrderAddresses(),
                order.getOrderValues(),
                order.getOrderBytes32(),
                signaturesV || order.getSignaturesV(),
                signaturesR || order.getSignaturesR(),
                signaturesS || order.getSignaturesS(),
            );

            const receipt = await web3.eth.getTransactionReceipt(txHash);
            const [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));

            expect(errorLog).to.deep.equal(
                LogError(
                    creditorProxy.address,
                    errorCode,
                    order.getCreditor(),
                    order.getCreditorCommitmentHash(),
                ),
            );
        };

        const setupBalancesAndAllowances = async (): Promise<[BigNumber, BigNumber]> => {
            const token = await DummyTokenContract.at(
                debtOffer.getPrincipalToken(),
                web3,
                TX_DEFAULTS,
            );

            const debtor = debtOffer.getDebtor();
            const creditor = debtOffer.getCreditor();

            const debtorBalanceAndAllowance = new BigNumber(0);
            const creditorBalanceAndAllowance = debtOffer
                .getPrincipalAmount()
                .plus(debtOffer.getCreditorFee());

            await token.setBalance.sendTransactionAsync(debtor, debtorBalanceAndAllowance, {
                from: CONTRACT_OWNER,
            });
            await token.approve.sendTransactionAsync(
                tokenTransferProxy.address,
                debtorBalanceAndAllowance,
                {
                    from: debtor,
                },
            );

            await token.setBalance.sendTransactionAsync(creditor, creditorBalanceAndAllowance, {
                from: CONTRACT_OWNER,
            });
            await token.approve.sendTransactionAsync(
                tokenTransferProxy.address,
                creditorBalanceAndAllowance,
                { from: creditor },
            );

            return [debtorBalanceAndAllowance, creditorBalanceAndAllowance];
        };

        const getAgentBalances = async (principalToken: DummyTokenContract) => {
            const debtorBalance = await principalToken.balanceOf.callAsync(debtOffer.getDebtor());
            const creditorBalance = await principalToken.balanceOf.callAsync(
                debtOffer.getCreditor(),
            );
            const underwriterBalance = await principalToken.balanceOf.callAsync(
                debtOffer.getUnderwriter(),
            );
            const relayerBalance = await principalToken.balanceOf.callAsync(debtOffer.getRelayer());
            const creditorProxyBalance = await principalToken.balanceOf.callAsync(
                creditorProxy.address,
            );

            return [
                debtorBalance,
                creditorBalance,
                underwriterBalance,
                relayerBalance,
                creditorProxyBalance,
            ];
        };

        const testOfferFill = (filler: string, setupDebtOffer: () => Promise<void>) => {
            return () => {
                let principalToken: DummyTokenContract;

                let debtorBalanceBefore: BigNumber;
                let creditorBalanceBefore: BigNumber;
                let underwriterBalanceBefore: BigNumber;
                let relayerBalanceBefore: BigNumber;
                let creditorProxyBalanceBefore: BigNumber;

                let receipt: Web3.TransactionReceipt;
                let block: Web3.BlockWithoutTransactionData;

                let logs: ABIDecoder.DecodedLog[];

                before(async () => {
                    await setupDebtOffer();
                    await setupBalancesAndAllowances();

                    principalToken = await DummyTokenContract.at(
                        debtOffer.getPrincipalToken(),
                        web3,
                        TX_DEFAULTS,
                    );

                    [
                        debtorBalanceBefore,
                        creditorBalanceBefore,
                        underwriterBalanceBefore,
                        relayerBalanceBefore,
                        creditorProxyBalanceBefore,
                    ] = await getAgentBalances(principalToken);

                    const txHash = await creditorProxy.fillDebtOffer.sendTransactionAsync(
                        debtOffer.getCreditor(),
                        debtOffer.getOrderAddresses(),
                        debtOffer.getOrderValues(),
                        debtOffer.getOrderBytes32(),
                        debtOffer.getSignaturesV(),
                        debtOffer.getSignaturesR(),
                        debtOffer.getSignaturesS(),
                        { from: filler },
                    );

                    receipt = await web3.eth.getTransactionReceipt(txHash);
                    block = await web3.eth.getBlock(receipt.blockNumber);

                    logs = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should deduct principal + creditor fee from creditor account", async () => {
                    const balance = await principalToken.balanceOf.callAsync(
                        debtOffer.getCreditor(),
                    );
                    const expectedBalance = creditorBalanceBefore.minus(
                        debtOffer.getPrincipalAmount().plus(debtOffer.getCreditorFee()),
                    );
                    expect(balance.toString()).to.equal(expectedBalance.toString());
                });

                it("should transfer newly minted debt token to creditor", async () => {
                    await expect(
                        debtTokenContract.ownerOf.callAsync(
                            new BigNumber(debtOffer.getAgreementId()),
                        ),
                    ).to.eventually.equal(debtOffer.getCreditor());
                });

                it("creditor proxy balance should not change", async () => {
                    const balance = await principalToken.balanceOf.callAsync(creditorProxy.address);
                    expect(balance.toString()).to.equal(creditorProxyBalanceBefore.toString());
                });

                describe("Logs Emitted:", () => {
                    it("should emit approval log allowing the transfer of the creditor proxy's principal", async () => {});

                    it("should emit transfer log from creditor to creditor proxy", async () => {});

                    it("should emit registry insert log", async () => {});

                    it("should emit debt token transfer log", async () => {});

                    it("should emit transfer log from creditor to debtor (if principal - debtor fee > 0)", async () => {});

                    it("should emit transfer log from creditor to underwriter (if present)", async () => {});

                    it("should emit transfer log from kernel to relayer (if present)", async () => {});

                    it("should emit debt order filled log", () => {});

                    it("should emit debt token transfer log", async () => {});

                    it("should emit debt offer filled log", async () => {
                        expect(logs[logs.length - 1]).to.deep.equal(
                            LogDebtOfferFilled(
                                creditorProxy.address,
                                debtOffer.getCreditor(),
                                debtOffer.getCreditorCommitmentHash(),
                                debtOffer.getAgreementId(),
                            ),
                        );
                    });
                });
            };
        };

        before(reset);

        describe("User fills valid, consentual debt offer", () => {
            describe("...and creditor proxy is paused by owner via multi-sig", async () => {
                before(async () => {
                    debtOffer = await orderFactory.generateDebtOffer();
                    await multiSigExecutePauseImmediately(
                        web3,
                        multiSig,
                        creditorProxy,
                        "pause",
                        ACCOUNTS,
                    );
                });
                after(async () => {
                    await multiSigExecuteAfterTimelock(
                        web3,
                        multiSig,
                        creditorProxy,
                        "unpause",
                        ACCOUNTS,
                    );
                });
                it("should throw", async () => {
                    await expect(
                        creditorProxy.fillDebtOffer.sendTransactionAsync(
                            debtOffer.getCreditor(),
                            debtOffer.getOrderAddresses(),
                            debtOffer.getOrderValues(),
                            debtOffer.getOrderBytes32(),
                            debtOffer.getSignaturesV(),
                            debtOffer.getSignaturesR(),
                            debtOffer.getSignaturesS(),
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe(
                "...with valid params",
                testOfferFill(CONTRACT_OWNER, async () => {
                    debtOffer = await orderFactory.generateDebtOffer();
                }),
            );

            describe(
                "...with no principal and no creditor / debtor fees",
                testOfferFill(CONTRACT_OWNER, async () => {
                    debtOffer = await orderFactory.generateDebtOffer({
                        creditorFee: new BigNumber(0),
                        debtorFee: new BigNumber(0),
                        principalAmount: new BigNumber(0),
                        relayer: NULL_ADDRESS,
                        relayerFee: new BigNumber(0),
                        underwriter: NULL_ADDRESS,
                        underwriterFee: new BigNumber(0),
                        underwriterRiskRating: new BigNumber(0),
                    });
                }),
            );

            describe(
                "...with no principal and nonzero creditor fee",
                testOfferFill(CONTRACT_OWNER, async () => {
                    debtOffer = await orderFactory.generateDebtOffer({
                        creditorFee: Units.ether(0.002),
                        debtorFee: new BigNumber(0),
                        principalAmount: new BigNumber(0),
                        relayer: NULL_ADDRESS,
                        relayerFee: new BigNumber(0),
                        underwriter: UNDERWRITER,
                        underwriterFee: Units.ether(0.002),
                    });
                }),
            );

            describe(
                "...when creditor and debtor are same address",
                testOfferFill(CONTRACT_OWNER, async () => {
                    debtOffer = await orderFactory.generateDebtOffer({
                        creditor: CREDITOR_1,
                        creditorFee: new BigNumber(0),
                        debtor: CREDITOR_1,
                        debtorFee: new BigNumber(0),
                        orderSignatories: {
                            creditor: CREDITOR_1,
                            debtor: CREDITOR_1,
                        },
                        principalAmount: new BigNumber(0),
                        relayer: NULL_ADDRESS,
                        relayerFee: new BigNumber(0),
                        underwriter: NULL_ADDRESS,
                        underwriterFee: new BigNumber(0),
                        underwriterRiskRating: new BigNumber(0),
                    });
                }),
            );
        });

        describe("User fills invalid debt order", () => {
            describe("...when creditor has not granted the transfer proxy sufficient allowance", () => {
                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {});
            });

            describe("...when creditor does not have sufficient balance", () => {
                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {});
            });

            describe("...when debt offer has already been filled", () => {
                it("should return DEBT_OFFER_ALREADY_FILLED error", async () => {});
            });

            describe("...when debt offer has been cancelled", () => {
                it("should return DEBT_OFFER_CANCELLED error", async () => {});
            });

            describe("...when debt kernel returns NULL_ISSUANCE_HASH", () => {
                it("should throw", async () => {});
            });
        });

        describe("User fills valid, nonconsensual debt offer", () => {
            let mismatchedOffer: SignedDebtOffer;

            before(async () => {
                debtOffer = await orderFactory.generateDebtOffer();
                await setupBalancesAndAllowances();
            });

            describe("...with mismatched issuance parameters", () => {
                before(async () => {
                    mismatchedOffer = await orderFactory.generateDebtOffer({
                        salt: debtOffer.getSalt(),
                        termsContract: MALICIOUS_TERMS_CONTRACTS,
                    });
                });

                describe("creditor's signature commits to creditor address =/= offer's", async () => {
                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
                });

                describe("creditor's signature commits to repayment router =/= offer's", async () => {
                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
                });

                describe("creditor's signature commits to creditor fee =/= offer's", async () => {
                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
                });

                describe("creditor's signature commits to underwriter =/= offer's", async () => {
                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
                });

                describe("creditor's signature commits to risk rating =/= offer's", async () => {
                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
                });

                describe("creditor's signature commits to terms contract =/= offer's", async () => {
                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
                });

                describe("creditor's signature commits to terms parameters =/= offer's", async () => {
                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
                });

                describe("creditor's signature commits to expiration =/= offer's", async () => {
                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
                });

                describe("creditor's signature commits to salt =/= offer's", async () => {
                    it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {});
                });
            });
        });
    });
});

export const DummyToken = 
{
  "contractName": "DummyToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "mintingFinished",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "finishMinting",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_target",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "setBalance",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_symbol",
          "type": "string"
        },
        {
          "name": "_decimals",
          "type": "uint256"
        },
        {
          "name": "_totalSupply",
          "type": "uint256"
        },
        {
          "name": "_initialBalanceHolders",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "MintFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x60606040526000600360146101000a81548160ff02191690831515021790555034156200002b57600080fd5b60405162001bfc38038062001bfc83398101604052808051820191906020018051820191906020018051906020019091908051906020019091908051820191905050600080600033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508760049080519060200190620000cb9291906200018d565b508660059080519060200190620000e49291906200018d565b50856006819055508460018190555083519250600091505b828210156200017f5783828151811015156200011457fe5b906020019060200201519050826001548115156200012e57fe5b046000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508180600101925050620000fc565b50505050505050506200023c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001d057805160ff191683800117855562000201565b8280016001018555821562000201579182015b8281111562000200578251825591602001919060010190620001e3565b5b50905062000210919062000214565b5090565b6200023991905b80821115620002355760008160009055506001016200021b565b5090565b90565b6119b0806200024c6000396000f3006060604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100f657806306fdde0314610123578063095ea7b3146101b157806318160ddd1461020b57806323b872dd14610234578063313ce567146102ad57806340c10f19146102d6578063661884631461033057806370a082311461038a5780637d64bcb4146103d75780638da5cb5b1461040457806395d89b4114610459578063a9059cbb146104e7578063d73dd62314610541578063dd62ed3e1461059b578063e30443bc14610607578063f2fde38b14610649575b600080fd5b341561010157600080fd5b610109610682565b604051808215151515815260200191505060405180910390f35b341561012e57600080fd5b610136610695565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017657808201518184015260208101905061015b565b50505050905090810190601f1680156101a35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101bc57600080fd5b6101f1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610733565b604051808215151515815260200191505060405180910390f35b341561021657600080fd5b61021e610825565b6040518082815260200191505060405180910390f35b341561023f57600080fd5b610293600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061082f565b604051808215151515815260200191505060405180910390f35b34156102b857600080fd5b6102c0610be9565b6040518082815260200191505060405180910390f35b34156102e157600080fd5b610316600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610bef565b604051808215151515815260200191505060405180910390f35b341561033b57600080fd5b610370600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610dd5565b604051808215151515815260200191505060405180910390f35b341561039557600080fd5b6103c1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611066565b6040518082815260200191505060405180910390f35b34156103e257600080fd5b6103ea6110ae565b604051808215151515815260200191505060405180910390f35b341561040f57600080fd5b610417611176565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561046457600080fd5b61046c61119c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104ac578082015181840152602081019050610491565b50505050905090810190601f1680156104d95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104f257600080fd5b610527600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061123a565b604051808215151515815260200191505060405180910390f35b341561054c57600080fd5b610581600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611459565b604051808215151515815260200191505060405180910390f35b34156105a657600080fd5b6105f1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611655565b6040518082815260200191505060405180910390f35b341561061257600080fd5b610647600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506116dc565b005b341561065457600080fd5b610680600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506117f5565b005b600360149054906101000a900460ff1681565b60048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561072b5780601f106107005761010080835404028352916020019161072b565b820191906000526020600020905b81548152906001019060200180831161070e57829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561086c57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156108b957600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561094457600080fd5b610995826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461194d90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a28826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610af982600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461194d90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60065481565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c4d57600080fd5b600360149054906101000a900460ff16151515610c6957600080fd5b610c7e8260015461196690919063ffffffff16565b600181905550610cd5826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610ee6576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f7a565b610ef9838261194d90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561110c57600080fd5b600360149054906101000a900460ff1615151561112857600080fd5b6001600360146101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112325780601f1061120757610100808354040283529160200191611232565b820191906000526020600020905b81548152906001019060200180831161121557829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561127757600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156112c457600080fd5b611315826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461194d90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113a8826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60006114ea82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561173a57600080fd5b61174383611066565b90508082101561177f57611774611763838361194d90919063ffffffff16565b60015461194d90919063ffffffff16565b6001819055506117ad565b6117a6611795828461194d90919063ffffffff16565b60015461196690919063ffffffff16565b6001819055505b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561185157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561188d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600082821115151561195b57fe5b818303905092915050565b600080828401905083811015151561197a57fe5b80915050929150505600a165627a7a72305820fc88baf7bbca20a9e8f5d4a785227ef6c81b35cafaa47ce68d68441eb59760160029",
  "deployedBytecode": "0x6060604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100f657806306fdde0314610123578063095ea7b3146101b157806318160ddd1461020b57806323b872dd14610234578063313ce567146102ad57806340c10f19146102d6578063661884631461033057806370a082311461038a5780637d64bcb4146103d75780638da5cb5b1461040457806395d89b4114610459578063a9059cbb146104e7578063d73dd62314610541578063dd62ed3e1461059b578063e30443bc14610607578063f2fde38b14610649575b600080fd5b341561010157600080fd5b610109610682565b604051808215151515815260200191505060405180910390f35b341561012e57600080fd5b610136610695565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017657808201518184015260208101905061015b565b50505050905090810190601f1680156101a35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101bc57600080fd5b6101f1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610733565b604051808215151515815260200191505060405180910390f35b341561021657600080fd5b61021e610825565b6040518082815260200191505060405180910390f35b341561023f57600080fd5b610293600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061082f565b604051808215151515815260200191505060405180910390f35b34156102b857600080fd5b6102c0610be9565b6040518082815260200191505060405180910390f35b34156102e157600080fd5b610316600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610bef565b604051808215151515815260200191505060405180910390f35b341561033b57600080fd5b610370600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610dd5565b604051808215151515815260200191505060405180910390f35b341561039557600080fd5b6103c1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611066565b6040518082815260200191505060405180910390f35b34156103e257600080fd5b6103ea6110ae565b604051808215151515815260200191505060405180910390f35b341561040f57600080fd5b610417611176565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561046457600080fd5b61046c61119c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104ac578082015181840152602081019050610491565b50505050905090810190601f1680156104d95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104f257600080fd5b610527600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061123a565b604051808215151515815260200191505060405180910390f35b341561054c57600080fd5b610581600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611459565b604051808215151515815260200191505060405180910390f35b34156105a657600080fd5b6105f1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611655565b6040518082815260200191505060405180910390f35b341561061257600080fd5b610647600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506116dc565b005b341561065457600080fd5b610680600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506117f5565b005b600360149054906101000a900460ff1681565b60048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561072b5780601f106107005761010080835404028352916020019161072b565b820191906000526020600020905b81548152906001019060200180831161070e57829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561086c57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156108b957600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561094457600080fd5b610995826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461194d90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a28826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610af982600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461194d90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60065481565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c4d57600080fd5b600360149054906101000a900460ff16151515610c6957600080fd5b610c7e8260015461196690919063ffffffff16565b600181905550610cd5826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610ee6576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f7a565b610ef9838261194d90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561110c57600080fd5b600360149054906101000a900460ff1615151561112857600080fd5b6001600360146101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112325780601f1061120757610100808354040283529160200191611232565b820191906000526020600020905b81548152906001019060200180831161121557829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561127757600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156112c457600080fd5b611315826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461194d90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113a8826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60006114ea82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461196690919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561173a57600080fd5b61174383611066565b90508082101561177f57611774611763838361194d90919063ffffffff16565b60015461194d90919063ffffffff16565b6001819055506117ad565b6117a6611795828461194d90919063ffffffff16565b60015461196690919063ffffffff16565b6001819055505b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561185157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561188d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600082821115151561195b57fe5b818303905092915050565b600080828401905083811015151561197a57fe5b80915050929150505600a165627a7a72305820fc88baf7bbca20a9e8f5d4a785227ef6c81b35cafaa47ce68d68441eb59760160029",
  "sourceMap": "151:1173:20:-;;;544:5:41;514:35;;;;;;;;;;;;;;;;;;;;300:656:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;605:29;762:6;823:15;509:10:37;501:5;;:18;;;;;;;;;;;;;;;;;;496:5:20;489:4;:12;;;;;;;;;;;;:::i;:::-;;520:7;511:6;:16;;;;;;;;;;;;:::i;:::-;;548:9;537:8;:20;;;;582:12;567;:27;;;;637:22;:29;605:61;;771:1;762:10;;757:193;778:24;774:1;:28;757:193;;;841:22;864:1;841:25;;;;;;;;;;;;;;;;;;823:43;;915:24;900:12;;:39;;;;;;;;880:8;:17;889:7;880:17;;;;;;;;;;;;;;;:59;;;;804:3;;;;;;;757:193;;;300:656;;;;;;;;151:1173;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "151:1173:20:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;514:35:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;223:18:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1798:183:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;736:439:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;273:20:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;853:264:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3602:398:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:107:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1231:135:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;247::20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:379:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2883:257:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2300:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;962:360:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;514:35:41;;;;;;;;;;;;;:::o;223:18:20:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1798:183:42:-;1865:4;1909:6;1877:7;:19;1885:10;1877:19;;;;;;;;;;;;;;;:29;1897:8;1877:29;;;;;;;;;;;;;;;:38;;;;1942:8;1921:38;;1930:10;1921:38;;;1952:6;1921:38;;;;;;;;;;;;;;;;;;1972:4;1965:11;;1798:183;;;;:::o;371:83:38:-;415:7;437:12;;430:19;;371:83;:::o;736:439:42:-;818:4;853:1;838:17;;:3;:17;;;;830:26;;;;;;;;880:8;:15;889:5;880:15;;;;;;;;;;;;;;;;870:6;:25;;862:34;;;;;;;;920:7;:14;928:5;920:14;;;;;;;;;;;;;;;:26;935:10;920:26;;;;;;;;;;;;;;;;910:6;:36;;902:45;;;;;;;;972:27;992:6;972:8;:15;981:5;972:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;954:8;:15;963:5;954:15;;;;;;;;;;;;;;;:45;;;;1021:25;1039:6;1021:8;:13;1030:3;1021:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1005:8;:13;1014:3;1005:13;;;;;;;;;;;;;;;:41;;;;1081:38;1112:6;1081:7;:14;1089:5;1081:14;;;;;;;;;;;;;;;:26;1096:10;1081:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1052:7;:14;1060:5;1052:14;;;;;;;;;;;;;;;:26;1067:10;1052:26;;;;;;;;;;;;;;;:67;;;;1141:3;1125:28;;1134:5;1125:28;;;1146:6;1125:28;;;;;;;;;;;;;;;;;;1166:4;1159:11;;736:439;;;;;:::o;273:20:20:-;;;;:::o;853:264:41:-;931:4;653:5:37;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;589:15:41;;;;;;;;;;;588:16;580:25;;;;;;;;958;975:7;958:12;;:16;;:25;;;;:::i;:::-;943:12;:40;;;;1005:26;1023:7;1005:8;:13;1014:3;1005:13;;;;;;;;;;;;;;;;:17;;:26;;;;:::i;:::-;989:8;:13;998:3;989:13;;;;;;;;;;;;;;;:42;;;;1042:3;1037:18;;;1047:7;1037:18;;;;;;;;;;;;;;;;;;1082:3;1061:34;;1078:1;1061:34;;;1087:7;1061:34;;;;;;;;;;;;;;;;;;1108:4;1101:11;;853:264;;;;:::o;3602:398:42:-;3685:4;3697:13;3713:7;:19;3721:10;3713:19;;;;;;;;;;;;;;;:29;3733:8;3713:29;;;;;;;;;;;;;;;;3697:45;;3771:8;3752:16;:27;3748:164;;;3821:1;3789:7;:19;3797:10;3789:19;;;;;;;;;;;;;;;:29;3809:8;3789:29;;;;;;;;;;;;;;;:33;;;;3748:164;;;3875:30;3888:16;3875:8;:12;;:30;;;;:::i;:::-;3843:7;:19;3851:10;3843:19;;;;;;;;;;;;;;;:29;3863:8;3843:29;;;;;;;;;;;;;;;:62;;;;3748:164;3938:8;3917:61;;3926:10;3917:61;;;3948:7;:19;3956:10;3948:19;;;;;;;;;;;;;;;:29;3968:8;3948:29;;;;;;;;;;;;;;;;3917:61;;;;;;;;;;;;;;;;;;3991:4;3984:11;;3602:398;;;;;:::o;1189:107:38:-;1245:15;1275:8;:16;1284:6;1275:16;;;;;;;;;;;;;;;;1268:23;;1189:107;;;:::o;1231:135:41:-;1290:4;653:5:37;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;589:15:41;;;;;;;;;;;588:16;580:25;;;;;;;;1320:4;1302:15;;:22;;;;;;;;;;;;;;;;;;1330:14;;;;;;;;;;1357:4;1350:11;;1231:135;:::o;238:20:37:-;;;;;;;;;;;;;:::o;247::20:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;608:379:38:-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;847:32;872:6;847:8;:20;856:10;847:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;824:8;:20;833:10;824:20;;;;;;;;;;;;;;;:55;;;;901:25;919:6;901:8;:13;910:3;901:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;885:8;:13;894:3;885:13;;;;;;;;;;;;;;;:41;;;;953:3;932:33;;941:10;932:33;;;958:6;932:33;;;;;;;;;;;;;;;;;;978:4;971:11;;608:379;;;;:::o;2883:257:42:-;2961:4;3005:46;3039:11;3005:7;:19;3013:10;3005:19;;;;;;;;;;;;;;;:29;3025:8;3005:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;2973:7;:19;2981:10;2973:19;;;;;;;;;;;;;;;:29;2993:8;2973:29;;;;;;;;;;;;;;;:78;;;;3078:8;3057:61;;3066:10;3057:61;;;3088:7;:19;3096:10;3088:19;;;;;;;;;;;;;;;:29;3108:8;3088:29;;;;;;;;;;;;;;;;3057:61;;;;;;;;;;;;;;;;;;3131:4;3124:11;;2883:257;;;;:::o;2300:126::-;2374:7;2396;:15;2404:6;2396:15;;;;;;;;;;;;;;;:25;2412:8;2396:25;;;;;;;;;;;;;;;;2389:32;;2300:126;;;;:::o;962:360:20:-;1039:16;653:5:37;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1058:18:20;1068:7;1058:9;:18::i;:::-;1039:37;;1099:11;1090:6;:20;1086:194;;;1141:41;1158:23;1174:6;1158:11;:15;;:23;;;;:::i;:::-;1141:12;;:16;;:41;;;;:::i;:::-;1126:12;:56;;;;1086:194;;;1228:41;1245:23;1256:11;1245:6;:10;;:23;;;;:::i;:::-;1228:12;;:16;;:41;;;;:::i;:::-;1213:12;:56;;;;1086:194;1309:6;1289:8;:17;1298:7;1289:17;;;;;;;;;;;;;;;:26;;;;962:360;;;:::o;832:169:37:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;835:110:36:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o",
  "source": "pragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/token/ERC20/MintableToken.sol\";\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\n\n\ncontract DummyToken is MintableToken {\n    using SafeMath for uint;\n    string public name;\n    string public symbol;\n    uint public decimals;\n\n    function DummyToken(\n        string _name,\n        string _symbol,\n        uint _decimals,\n        uint _totalSupply,\n        address[] _initialBalanceHolders)\n        public\n    {\n        name = _name;\n        symbol = _symbol;\n        decimals = _decimals;\n        totalSupply_ = _totalSupply;\n\n        uint numInitialBalanceHolders = _initialBalanceHolders.length;\n\n        // Distribute the total supply evenly among the initial balance holders\n        for (uint i = 0; i < numInitialBalanceHolders; i++) {\n            address account = _initialBalanceHolders[i];\n            balances[account] = totalSupply_ / numInitialBalanceHolders;\n        }\n    }\n\n    function setBalance(address _target, uint _value) public onlyOwner {\n        uint currBalance = balanceOf(_target);\n        if (_value < currBalance) {\n            totalSupply_ = totalSupply_.sub(currBalance.sub(_value));\n        } else {\n            totalSupply_ = totalSupply_.add(_value.sub(currBalance));\n        }\n        balances[_target] = _value;\n    }\n}\n",
  "sourcePath": "/Users/graemeboy/Dharma/charta/contracts/test/dummy_tokens/DummyToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/test/dummy_tokens/DummyToken.sol",
      "exportedSymbols": {
        "DummyToken": [
          9550
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 9426,
        "name": "PragmaDirective",
        "src": "0:23:20"
      },
      {
        "attributes": {
          "SourceUnit": 13669,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
          "scope": 9551,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 9427,
        "name": "ImportDirective",
        "src": "25:67:20"
      },
      {
        "attributes": {
          "SourceUnit": 13347,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 9551,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 9428,
        "name": "ImportDirective",
        "src": "93:55:20"
      },
      {
        "attributes": {
          "contractDependencies": [
            13402,
            13498,
            13541,
            13573,
            13668,
            13914
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            9550,
            13668,
            13402,
            13914,
            13498,
            13541,
            13573
          ],
          "name": "DummyToken",
          "scope": 9551
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "MintableToken",
                  "referencedDeclaration": 13668,
                  "type": "contract MintableToken"
                },
                "id": 9429,
                "name": "UserDefinedTypeName",
                "src": "174:13:20"
              }
            ],
            "id": 9430,
            "name": "InheritanceSpecifier",
            "src": "174:13:20"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 13346,
                  "type": "library SafeMath"
                },
                "id": 9431,
                "name": "UserDefinedTypeName",
                "src": "200:8:20"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 9432,
                "name": "ElementaryTypeName",
                "src": "213:4:20"
              }
            ],
            "id": 9433,
            "name": "UsingForDirective",
            "src": "194:24:20"
          },
          {
            "attributes": {
              "constant": false,
              "name": "name",
              "scope": 9550,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 9434,
                "name": "ElementaryTypeName",
                "src": "223:6:20"
              }
            ],
            "id": 9435,
            "name": "VariableDeclaration",
            "src": "223:18:20"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbol",
              "scope": 9550,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 9436,
                "name": "ElementaryTypeName",
                "src": "247:6:20"
              }
            ],
            "id": 9437,
            "name": "VariableDeclaration",
            "src": "247:20:20"
          },
          {
            "attributes": {
              "constant": false,
              "name": "decimals",
              "scope": 9550,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 9438,
                "name": "ElementaryTypeName",
                "src": "273:4:20"
              }
            ],
            "id": 9439,
            "name": "VariableDeclaration",
            "src": "273:20:20"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "DummyToken",
              "payable": false,
              "scope": 9550,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_name",
                      "scope": 9501,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 9440,
                        "name": "ElementaryTypeName",
                        "src": "329:6:20"
                      }
                    ],
                    "id": 9441,
                    "name": "VariableDeclaration",
                    "src": "329:12:20"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_symbol",
                      "scope": 9501,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 9442,
                        "name": "ElementaryTypeName",
                        "src": "351:6:20"
                      }
                    ],
                    "id": 9443,
                    "name": "VariableDeclaration",
                    "src": "351:14:20"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_decimals",
                      "scope": 9501,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 9444,
                        "name": "ElementaryTypeName",
                        "src": "375:4:20"
                      }
                    ],
                    "id": 9445,
                    "name": "VariableDeclaration",
                    "src": "375:14:20"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_totalSupply",
                      "scope": 9501,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 9446,
                        "name": "ElementaryTypeName",
                        "src": "399:4:20"
                      }
                    ],
                    "id": 9447,
                    "name": "VariableDeclaration",
                    "src": "399:17:20"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_initialBalanceHolders",
                      "scope": 9501,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "address[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 9448,
                            "name": "ElementaryTypeName",
                            "src": "426:7:20"
                          }
                        ],
                        "id": 9449,
                        "name": "ArrayTypeName",
                        "src": "426:9:20"
                      }
                    ],
                    "id": 9450,
                    "name": "VariableDeclaration",
                    "src": "426:32:20"
                  }
                ],
                "id": 9451,
                "name": "ParameterList",
                "src": "319:140:20"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9452,
                "name": "ParameterList",
                "src": "479:0:20"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9435,
                              "type": "string storage ref",
                              "value": "name"
                            },
                            "id": 9453,
                            "name": "Identifier",
                            "src": "489:4:20"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9441,
                              "type": "string memory",
                              "value": "_name"
                            },
                            "id": 9454,
                            "name": "Identifier",
                            "src": "496:5:20"
                          }
                        ],
                        "id": 9455,
                        "name": "Assignment",
                        "src": "489:12:20"
                      }
                    ],
                    "id": 9456,
                    "name": "ExpressionStatement",
                    "src": "489:12:20"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9437,
                              "type": "string storage ref",
                              "value": "symbol"
                            },
                            "id": 9457,
                            "name": "Identifier",
                            "src": "511:6:20"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9443,
                              "type": "string memory",
                              "value": "_symbol"
                            },
                            "id": 9458,
                            "name": "Identifier",
                            "src": "520:7:20"
                          }
                        ],
                        "id": 9459,
                        "name": "Assignment",
                        "src": "511:16:20"
                      }
                    ],
                    "id": 9460,
                    "name": "ExpressionStatement",
                    "src": "511:16:20"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9439,
                              "type": "uint256",
                              "value": "decimals"
                            },
                            "id": 9461,
                            "name": "Identifier",
                            "src": "537:8:20"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9445,
                              "type": "uint256",
                              "value": "_decimals"
                            },
                            "id": 9462,
                            "name": "Identifier",
                            "src": "548:9:20"
                          }
                        ],
                        "id": 9463,
                        "name": "Assignment",
                        "src": "537:20:20"
                      }
                    ],
                    "id": 9464,
                    "name": "ExpressionStatement",
                    "src": "537:20:20"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 13417,
                              "type": "uint256",
                              "value": "totalSupply_"
                            },
                            "id": 9465,
                            "name": "Identifier",
                            "src": "567:12:20"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9447,
                              "type": "uint256",
                              "value": "_totalSupply"
                            },
                            "id": 9466,
                            "name": "Identifier",
                            "src": "582:12:20"
                          }
                        ],
                        "id": 9467,
                        "name": "Assignment",
                        "src": "567:27:20"
                      }
                    ],
                    "id": 9468,
                    "name": "ExpressionStatement",
                    "src": "567:27:20"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        9470
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "numInitialBalanceHolders",
                          "scope": 9501,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 9469,
                            "name": "ElementaryTypeName",
                            "src": "605:4:20"
                          }
                        ],
                        "id": 9470,
                        "name": "VariableDeclaration",
                        "src": "605:29:20"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "length",
                          "referencedDeclaration": null,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9450,
                              "type": "address[] memory",
                              "value": "_initialBalanceHolders"
                            },
                            "id": 9471,
                            "name": "Identifier",
                            "src": "637:22:20"
                          }
                        ],
                        "id": 9472,
                        "name": "MemberAccess",
                        "src": "637:29:20"
                      }
                    ],
                    "id": 9473,
                    "name": "VariableDeclarationStatement",
                    "src": "605:61:20"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            9475
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 9501,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 9474,
                                "name": "ElementaryTypeName",
                                "src": "762:4:20"
                              }
                            ],
                            "id": 9475,
                            "name": "VariableDeclaration",
                            "src": "762:6:20"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 9476,
                            "name": "Literal",
                            "src": "771:1:20"
                          }
                        ],
                        "id": 9477,
                        "name": "VariableDeclarationStatement",
                        "src": "762:10:20"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9475,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 9478,
                            "name": "Identifier",
                            "src": "774:1:20"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9470,
                              "type": "uint256",
                              "value": "numInitialBalanceHolders"
                            },
                            "id": 9479,
                            "name": "Identifier",
                            "src": "778:24:20"
                          }
                        ],
                        "id": 9480,
                        "name": "BinaryOperation",
                        "src": "774:28:20"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9475,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 9481,
                                "name": "Identifier",
                                "src": "804:1:20"
                              }
                            ],
                            "id": 9482,
                            "name": "UnaryOperation",
                            "src": "804:3:20"
                          }
                        ],
                        "id": 9483,
                        "name": "ExpressionStatement",
                        "src": "804:3:20"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                9485
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "account",
                                  "scope": 9501,
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "type": "address",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "address",
                                      "type": "address"
                                    },
                                    "id": 9484,
                                    "name": "ElementaryTypeName",
                                    "src": "823:7:20"
                                  }
                                ],
                                "id": 9485,
                                "name": "VariableDeclaration",
                                "src": "823:15:20"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9450,
                                      "type": "address[] memory",
                                      "value": "_initialBalanceHolders"
                                    },
                                    "id": 9486,
                                    "name": "Identifier",
                                    "src": "841:22:20"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9475,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 9487,
                                    "name": "Identifier",
                                    "src": "864:1:20"
                                  }
                                ],
                                "id": 9488,
                                "name": "IndexAccess",
                                "src": "841:25:20"
                              }
                            ],
                            "id": 9489,
                            "name": "VariableDeclarationStatement",
                            "src": "823:43:20"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 13415,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 9490,
                                        "name": "Identifier",
                                        "src": "880:8:20"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9485,
                                          "type": "address",
                                          "value": "account"
                                        },
                                        "id": 9491,
                                        "name": "Identifier",
                                        "src": "889:7:20"
                                      }
                                    ],
                                    "id": 9492,
                                    "name": "IndexAccess",
                                    "src": "880:17:20"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "/",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 13417,
                                          "type": "uint256",
                                          "value": "totalSupply_"
                                        },
                                        "id": 9493,
                                        "name": "Identifier",
                                        "src": "900:12:20"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9470,
                                          "type": "uint256",
                                          "value": "numInitialBalanceHolders"
                                        },
                                        "id": 9494,
                                        "name": "Identifier",
                                        "src": "915:24:20"
                                      }
                                    ],
                                    "id": 9495,
                                    "name": "BinaryOperation",
                                    "src": "900:39:20"
                                  }
                                ],
                                "id": 9496,
                                "name": "Assignment",
                                "src": "880:59:20"
                              }
                            ],
                            "id": 9497,
                            "name": "ExpressionStatement",
                            "src": "880:59:20"
                          }
                        ],
                        "id": 9498,
                        "name": "Block",
                        "src": "809:141:20"
                      }
                    ],
                    "id": 9499,
                    "name": "ForStatement",
                    "src": "757:193:20"
                  }
                ],
                "id": 9500,
                "name": "Block",
                "src": "479:477:20"
              }
            ],
            "id": 9501,
            "name": "FunctionDefinition",
            "src": "300:656:20"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setBalance",
              "payable": false,
              "scope": 9550,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_target",
                      "scope": 9549,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9502,
                        "name": "ElementaryTypeName",
                        "src": "982:7:20"
                      }
                    ],
                    "id": 9503,
                    "name": "VariableDeclaration",
                    "src": "982:15:20"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 9549,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 9504,
                        "name": "ElementaryTypeName",
                        "src": "999:4:20"
                      }
                    ],
                    "id": 9505,
                    "name": "VariableDeclaration",
                    "src": "999:11:20"
                  }
                ],
                "id": 9506,
                "name": "ParameterList",
                "src": "981:30:20"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9509,
                "name": "ParameterList",
                "src": "1029:0:20"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 13376,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 9507,
                    "name": "Identifier",
                    "src": "1019:9:20"
                  }
                ],
                "id": 9508,
                "name": "ModifierInvocation",
                "src": "1019:9:20"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        9511
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "currBalance",
                          "scope": 9549,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 9510,
                            "name": "ElementaryTypeName",
                            "src": "1039:4:20"
                          }
                        ],
                        "id": 9511,
                        "name": "VariableDeclaration",
                        "src": "1039:16:20"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                13497
                              ],
                              "referencedDeclaration": 13497,
                              "type": "function (address) view returns (uint256)",
                              "value": "balanceOf"
                            },
                            "id": 9512,
                            "name": "Identifier",
                            "src": "1058:9:20"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9503,
                              "type": "address",
                              "value": "_target"
                            },
                            "id": 9513,
                            "name": "Identifier",
                            "src": "1068:7:20"
                          }
                        ],
                        "id": 9514,
                        "name": "FunctionCall",
                        "src": "1058:18:20"
                      }
                    ],
                    "id": 9515,
                    "name": "VariableDeclarationStatement",
                    "src": "1039:37:20"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9505,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 9516,
                            "name": "Identifier",
                            "src": "1090:6:20"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9511,
                              "type": "uint256",
                              "value": "currBalance"
                            },
                            "id": 9517,
                            "name": "Identifier",
                            "src": "1099:11:20"
                          }
                        ],
                        "id": 9518,
                        "name": "BinaryOperation",
                        "src": "1090:20:20"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 13417,
                                      "type": "uint256",
                                      "value": "totalSupply_"
                                    },
                                    "id": 9519,
                                    "name": "Identifier",
                                    "src": "1126:12:20"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint256",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "sub",
                                          "referencedDeclaration": 13321,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 13417,
                                              "type": "uint256",
                                              "value": "totalSupply_"
                                            },
                                            "id": 9520,
                                            "name": "Identifier",
                                            "src": "1141:12:20"
                                          }
                                        ],
                                        "id": 9521,
                                        "name": "MemberAccess",
                                        "src": "1141:16:20"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "uint256",
                                          "type_conversion": false
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "sub",
                                              "referencedDeclaration": 13321,
                                              "type": "function (uint256,uint256) pure returns (uint256)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 9511,
                                                  "type": "uint256",
                                                  "value": "currBalance"
                                                },
                                                "id": 9522,
                                                "name": "Identifier",
                                                "src": "1158:11:20"
                                              }
                                            ],
                                            "id": 9523,
                                            "name": "MemberAccess",
                                            "src": "1158:15:20"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9505,
                                              "type": "uint256",
                                              "value": "_value"
                                            },
                                            "id": 9524,
                                            "name": "Identifier",
                                            "src": "1174:6:20"
                                          }
                                        ],
                                        "id": 9525,
                                        "name": "FunctionCall",
                                        "src": "1158:23:20"
                                      }
                                    ],
                                    "id": 9526,
                                    "name": "FunctionCall",
                                    "src": "1141:41:20"
                                  }
                                ],
                                "id": 9527,
                                "name": "Assignment",
                                "src": "1126:56:20"
                              }
                            ],
                            "id": 9528,
                            "name": "ExpressionStatement",
                            "src": "1126:56:20"
                          }
                        ],
                        "id": 9529,
                        "name": "Block",
                        "src": "1112:81:20"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 13417,
                                      "type": "uint256",
                                      "value": "totalSupply_"
                                    },
                                    "id": 9530,
                                    "name": "Identifier",
                                    "src": "1213:12:20"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint256",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "add",
                                          "referencedDeclaration": 13345,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 13417,
                                              "type": "uint256",
                                              "value": "totalSupply_"
                                            },
                                            "id": 9531,
                                            "name": "Identifier",
                                            "src": "1228:12:20"
                                          }
                                        ],
                                        "id": 9532,
                                        "name": "MemberAccess",
                                        "src": "1228:16:20"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "uint256",
                                          "type_conversion": false
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "sub",
                                              "referencedDeclaration": 13321,
                                              "type": "function (uint256,uint256) pure returns (uint256)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 9505,
                                                  "type": "uint256",
                                                  "value": "_value"
                                                },
                                                "id": 9533,
                                                "name": "Identifier",
                                                "src": "1245:6:20"
                                              }
                                            ],
                                            "id": 9534,
                                            "name": "MemberAccess",
                                            "src": "1245:10:20"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9511,
                                              "type": "uint256",
                                              "value": "currBalance"
                                            },
                                            "id": 9535,
                                            "name": "Identifier",
                                            "src": "1256:11:20"
                                          }
                                        ],
                                        "id": 9536,
                                        "name": "FunctionCall",
                                        "src": "1245:23:20"
                                      }
                                    ],
                                    "id": 9537,
                                    "name": "FunctionCall",
                                    "src": "1228:41:20"
                                  }
                                ],
                                "id": 9538,
                                "name": "Assignment",
                                "src": "1213:56:20"
                              }
                            ],
                            "id": 9539,
                            "name": "ExpressionStatement",
                            "src": "1213:56:20"
                          }
                        ],
                        "id": 9540,
                        "name": "Block",
                        "src": "1199:81:20"
                      }
                    ],
                    "id": 9541,
                    "name": "IfStatement",
                    "src": "1086:194:20"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 13415,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 9542,
                                "name": "Identifier",
                                "src": "1289:8:20"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9503,
                                  "type": "address",
                                  "value": "_target"
                                },
                                "id": 9543,
                                "name": "Identifier",
                                "src": "1298:7:20"
                              }
                            ],
                            "id": 9544,
                            "name": "IndexAccess",
                            "src": "1289:17:20"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9505,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 9545,
                            "name": "Identifier",
                            "src": "1309:6:20"
                          }
                        ],
                        "id": 9546,
                        "name": "Assignment",
                        "src": "1289:26:20"
                      }
                    ],
                    "id": 9547,
                    "name": "ExpressionStatement",
                    "src": "1289:26:20"
                  }
                ],
                "id": 9548,
                "name": "Block",
                "src": "1029:293:20"
              }
            ],
            "id": 9549,
            "name": "FunctionDefinition",
            "src": "962:360:20"
          }
        ],
        "id": 9550,
        "name": "ContractDefinition",
        "src": "151:1173:20"
      }
    ],
    "id": 9551,
    "name": "SourceUnit",
    "src": "0:1325:20"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-29T22:07:29.227Z"
}
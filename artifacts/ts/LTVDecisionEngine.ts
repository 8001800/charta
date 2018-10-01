export const LTVDecisionEngine = 
{
  "contractName": "LTVDecisionEngine",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "principalTokenPrice",
          "type": "uint256"
        },
        {
          "name": "collateralTokenPrice",
          "type": "uint256"
        },
        {
          "name": "principalAmount",
          "type": "uint256"
        },
        {
          "name": "collateralAmount",
          "type": "uint256"
        }
      ],
      "name": "computeLTV",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
          "name": "priceFeedOperator",
          "type": "address"
        },
        {
          "name": "creditor",
          "type": "address"
        },
        {
          "name": "principalTokenPrice",
          "type": "uint256"
        },
        {
          "name": "collateralTokenPrice",
          "type": "uint256"
        },
        {
          "name": "principalAmount",
          "type": "uint256"
        },
        {
          "name": "collateralAmount",
          "type": "uint256"
        },
        {
          "name": "maxLTV",
          "type": "uint256"
        },
        {
          "name": "creditorSignature",
          "type": "bytes32"
        },
        {
          "name": "expirationTimestamp",
          "type": "uint256"
        }
      ],
      "name": "evaluate",
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
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "errorIndex",
          "type": "uint8"
        }
      ],
      "name": "LogError",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b61021b8061001e6000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063c2c8c7b514610051578063e62df66c146100a3575b600080fd5b341561005c57600080fd5b61008d6004808035906020019091908035906020019091908035906020019091908035906020019091905050610156565b6040518082815260200191505060405180910390f35b34156100ae57600080fd5b61013c600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001909190803590602001909190803590602001909190803590602001909190803560001916906020019091908035906020019091905050610172565b604051808215151515815260200191505060405180910390f35b6000828583860281151561016657fe5b04029050949350505050565b60008061018189898989610156565b9050848111156101dc577f0489f2369368f4688acd012107ac5a7d98ca739b913449d852f35d871e433cc36004808111156101b857fe5b604051808260ff1660ff16815260200191505060405180910390a1600091506101e1565b600191505b5099985050505050505050505600a165627a7a72305820db9c9d87b7059f0bf4c2a9dbd7d8d0190c4c56332c3ed010c860e52f07a2a9790029",
  "deployedBytecode": "0x60606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063c2c8c7b514610051578063e62df66c146100a3575b600080fd5b341561005c57600080fd5b61008d6004808035906020019091908035906020019091908035906020019091908035906020019091905050610156565b6040518082815260200191505060405180910390f35b34156100ae57600080fd5b61013c600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001909190803590602001909190803590602001909190803590602001909190803560001916906020019091908035906020019091905050610172565b604051808215151515815260200191505060405180910390f35b6000828583860281151561016657fe5b04029050949350505050565b60008061018189898989610156565b9050848111156101dc577f0489f2369368f4688acd012107ac5a7d98ca739b913449d852f35d871e433cc36004808111156101b857fe5b604051808260ff1660ff16815260200191505060405180910390a1600091506101e1565b600191505b5099985050505050505050505600a165627a7a72305820db9c9d87b7059f0bf4c2a9dbd7d8d0190c4c56332c3ed010c860e52f07a2a9790029",
  "sourceMap": "329:2474:14:-;;;700:46;;;;;;;;329:2474;;;;;;",
  "deployedSourceMap": "329:2474:14:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2527:274;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1407:1114;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2527:274;2692:4;2779:15;2757:19;2738:16;2715:20;:39;:61;;;;;;;;:79;2708:86;;2527:274;;;;;;:::o;1407:1114::-;1744:4;2207:13;2223:146;2247:19;2280:20;2314:15;2343:16;2223:10;:146::i;:::-;2207:162;;2395:6;2384:8;:17;2380:113;;;2417:39;2432:22;2426:29;;;;;;;;2417:39;;;;;;;;;;;;;;;;;;;;;;2477:5;2470:12;;;;2380:113;2510:4;2503:11;;1407:1114;;;;;;;;;;;;;:::o",
  "source": "import \"zeppelin-solidity/contracts/math/SafeMath.sol\";\n\n/**\n * A decision engine for creditor-driven loans, that can evaluate whether or not a creditor\n * should fill a loan, depending on the loan-to-value ratio of the principal and collateral amounts.\n * These amounts are defined by prices that are signed by the relayer.\n */\ncontract LTVDecisionEngine {\n    using SafeMath for uint;\n\n    enum Errors {\n        INVALID_CREDITOR_SIGNATURE,\n        INVALID_PRINCIPAL_PRICE_SIGNATURE,\n        INVALID_COLLATERAL_PRICE_SIGNATURE,\n        AGREEMENT_EXPIRED,\n        LTV_EXCEEDS_MAX\n    }\n\n    event LogError(\n        // Corresponds to the Errors enum listed above.\n        uint8 errorIndex\n    );\n\n    function LTVDecisionEngine()\n        public {}\n\n    // Required params:\n    // Creditor address\n    // LTV ratio\n    // Price feed operator address\n    // Price of principal token\n    // price of collateral token\n    // Signature and date for principal token price\n    // Signature and date for collateral token price\n    // Expiration date\n    // Decision engine address\n    // Signature for creditor on:\n        // LTV ratio\n        // Price feed operator\n        // Principal token\n        // Collateral token\n        // Principal amount\n        // Expiration date\n        // Decision engine address\n    // NOTE: Decision engine address is used in the CreditorProxy, but signature is validated here.\n    function evaluate(\n        address priceFeedOperator,\n        address creditor,\n        uint principalTokenPrice,\n        uint collateralTokenPrice,\n        uint principalAmount,\n        uint collateralAmount,\n        uint maxLTV,\n        bytes32 creditorSignature,\n        uint expirationTimestamp\n    )\n        public\n        returns (bool) {\n        // CHECK SIGNATURES\n        // Get the address of the price feed operator.\n        // Check that the price feed operator has signed the principal token price, recently enough.\n        // Check that the price feed operator has signed the collateral token price, recently enough.\n        // Get the creditor address.\n        // Check that the creditor signed the hash of relevant parameters (outlined above.)\n\n        // CHECK EXPIRATIONAl\n\n        uint givenLTV = computeLTV(\n            principalTokenPrice,\n            collateralTokenPrice,\n            principalAmount,\n            collateralAmount\n        );\n\n        if (givenLTV > maxLTV) {\n            LogError(uint8(Errors.LTV_EXCEEDS_MAX));\n            return false;\n        }\n\n        return true;\n    }\n\n    function computeLTV(\n        uint principalTokenPrice,\n        uint collateralTokenPrice,\n        uint principalAmount,\n        uint collateralAmount\n    ) returns (uint) {\n        return collateralTokenPrice * collateralAmount / principalTokenPrice * principalAmount;\n    }\n}\n",
  "sourcePath": "/Users/graemeboy/Dharma/charta/contracts/decision_engines/LTVDecisionEngine.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/decision_engines/LTVDecisionEngine.sol",
      "exportedSymbols": {
        "LTVDecisionEngine": [
          5297
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "SourceUnit": 14203,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 5298,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5208,
        "name": "ImportDirective",
        "src": "0:55:14"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": "A decision engine for creditor-driven loans, that can evaluate whether or not a creditor\nshould fill a loan, depending on the loan-to-value ratio of the principal and collateral amounts.\nThese amounts are defined by prices that are signed by the relayer.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            5297
          ],
          "name": "LTVDecisionEngine",
          "scope": 5298
        },
        "children": [
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 14202,
                  "type": "library SafeMath"
                },
                "id": 5209,
                "name": "UserDefinedTypeName",
                "src": "368:8:14"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 5210,
                "name": "ElementaryTypeName",
                "src": "381:4:14"
              }
            ],
            "id": 5211,
            "name": "UsingForDirective",
            "src": "362:24:14"
          },
          {
            "attributes": {
              "canonicalName": "LTVDecisionEngine.Errors",
              "name": "Errors"
            },
            "children": [
              {
                "attributes": {
                  "name": "INVALID_CREDITOR_SIGNATURE"
                },
                "id": 5212,
                "name": "EnumValue",
                "src": "414:26:14"
              },
              {
                "attributes": {
                  "name": "INVALID_PRINCIPAL_PRICE_SIGNATURE"
                },
                "id": 5213,
                "name": "EnumValue",
                "src": "450:33:14"
              },
              {
                "attributes": {
                  "name": "INVALID_COLLATERAL_PRICE_SIGNATURE"
                },
                "id": 5214,
                "name": "EnumValue",
                "src": "493:34:14"
              },
              {
                "attributes": {
                  "name": "AGREEMENT_EXPIRED"
                },
                "id": 5215,
                "name": "EnumValue",
                "src": "537:17:14"
              },
              {
                "attributes": {
                  "name": "LTV_EXCEEDS_MAX"
                },
                "id": 5216,
                "name": "EnumValue",
                "src": "564:15:14"
              }
            ],
            "id": 5217,
            "name": "EnumDefinition",
            "src": "392:193:14"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogError"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "errorIndex",
                      "scope": 5221,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint8",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint8",
                          "type": "uint8"
                        },
                        "id": 5218,
                        "name": "ElementaryTypeName",
                        "src": "671:5:14"
                      }
                    ],
                    "id": 5219,
                    "name": "VariableDeclaration",
                    "src": "671:16:14"
                  }
                ],
                "id": 5220,
                "name": "ParameterList",
                "src": "605:88:14"
              }
            ],
            "id": 5221,
            "name": "EventDefinition",
            "src": "591:103:14"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "LTVDecisionEngine",
              "payable": false,
              "scope": 5297,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5222,
                "name": "ParameterList",
                "src": "726:2:14"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5223,
                "name": "ParameterList",
                "src": "744:0:14"
              },
              {
                "attributes": {
                  "statements": [
                    null
                  ]
                },
                "children": [],
                "id": 5224,
                "name": "Block",
                "src": "744:2:14"
              }
            ],
            "id": 5225,
            "name": "FunctionDefinition",
            "src": "700:46:14"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "evaluate",
              "payable": false,
              "scope": 5297,
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
                      "name": "priceFeedOperator",
                      "scope": 5274,
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
                        "id": 5226,
                        "name": "ElementaryTypeName",
                        "src": "1434:7:14"
                      }
                    ],
                    "id": 5227,
                    "name": "VariableDeclaration",
                    "src": "1434:25:14"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "creditor",
                      "scope": 5274,
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
                        "id": 5228,
                        "name": "ElementaryTypeName",
                        "src": "1469:7:14"
                      }
                    ],
                    "id": 5229,
                    "name": "VariableDeclaration",
                    "src": "1469:16:14"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "principalTokenPrice",
                      "scope": 5274,
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
                        "id": 5230,
                        "name": "ElementaryTypeName",
                        "src": "1495:4:14"
                      }
                    ],
                    "id": 5231,
                    "name": "VariableDeclaration",
                    "src": "1495:24:14"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "collateralTokenPrice",
                      "scope": 5274,
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
                        "id": 5232,
                        "name": "ElementaryTypeName",
                        "src": "1529:4:14"
                      }
                    ],
                    "id": 5233,
                    "name": "VariableDeclaration",
                    "src": "1529:25:14"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "principalAmount",
                      "scope": 5274,
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
                        "id": 5234,
                        "name": "ElementaryTypeName",
                        "src": "1564:4:14"
                      }
                    ],
                    "id": 5235,
                    "name": "VariableDeclaration",
                    "src": "1564:20:14"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "collateralAmount",
                      "scope": 5274,
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
                        "id": 5236,
                        "name": "ElementaryTypeName",
                        "src": "1594:4:14"
                      }
                    ],
                    "id": 5237,
                    "name": "VariableDeclaration",
                    "src": "1594:21:14"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "maxLTV",
                      "scope": 5274,
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
                        "id": 5238,
                        "name": "ElementaryTypeName",
                        "src": "1625:4:14"
                      }
                    ],
                    "id": 5239,
                    "name": "VariableDeclaration",
                    "src": "1625:11:14"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "creditorSignature",
                      "scope": 5274,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5240,
                        "name": "ElementaryTypeName",
                        "src": "1646:7:14"
                      }
                    ],
                    "id": 5241,
                    "name": "VariableDeclaration",
                    "src": "1646:25:14"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "expirationTimestamp",
                      "scope": 5274,
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
                        "id": 5242,
                        "name": "ElementaryTypeName",
                        "src": "1681:4:14"
                      }
                    ],
                    "id": 5243,
                    "name": "VariableDeclaration",
                    "src": "1681:24:14"
                  }
                ],
                "id": 5244,
                "name": "ParameterList",
                "src": "1424:287:14"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5274,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 5245,
                        "name": "ElementaryTypeName",
                        "src": "1744:4:14"
                      }
                    ],
                    "id": 5246,
                    "name": "VariableDeclaration",
                    "src": "1744:4:14"
                  }
                ],
                "id": 5247,
                "name": "ParameterList",
                "src": "1743:6:14"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        5249
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "givenLTV",
                          "scope": 5274,
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
                            "id": 5248,
                            "name": "ElementaryTypeName",
                            "src": "2207:4:14"
                          }
                        ],
                        "id": 5249,
                        "name": "VariableDeclaration",
                        "src": "2207:13:14"
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
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5296,
                              "type": "function (uint256,uint256,uint256,uint256) returns (uint256)",
                              "value": "computeLTV"
                            },
                            "id": 5250,
                            "name": "Identifier",
                            "src": "2223:10:14"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5231,
                              "type": "uint256",
                              "value": "principalTokenPrice"
                            },
                            "id": 5251,
                            "name": "Identifier",
                            "src": "2247:19:14"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5233,
                              "type": "uint256",
                              "value": "collateralTokenPrice"
                            },
                            "id": 5252,
                            "name": "Identifier",
                            "src": "2280:20:14"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5235,
                              "type": "uint256",
                              "value": "principalAmount"
                            },
                            "id": 5253,
                            "name": "Identifier",
                            "src": "2314:15:14"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5237,
                              "type": "uint256",
                              "value": "collateralAmount"
                            },
                            "id": 5254,
                            "name": "Identifier",
                            "src": "2343:16:14"
                          }
                        ],
                        "id": 5255,
                        "name": "FunctionCall",
                        "src": "2223:146:14"
                      }
                    ],
                    "id": 5256,
                    "name": "VariableDeclarationStatement",
                    "src": "2207:162:14"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
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
                          "operator": ">",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5249,
                              "type": "uint256",
                              "value": "givenLTV"
                            },
                            "id": 5257,
                            "name": "Identifier",
                            "src": "2384:8:14"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5239,
                              "type": "uint256",
                              "value": "maxLTV"
                            },
                            "id": 5258,
                            "name": "Identifier",
                            "src": "2395:6:14"
                          }
                        ],
                        "id": 5259,
                        "name": "BinaryOperation",
                        "src": "2384:17:14"
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
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5221,
                                      "type": "function (uint8)",
                                      "value": "LogError"
                                    },
                                    "id": 5260,
                                    "name": "Identifier",
                                    "src": "2417:8:14"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint8",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_enum$_Errors_$5217",
                                              "typeString": "enum LTVDecisionEngine.Errors"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint8)",
                                          "value": "uint8"
                                        },
                                        "id": 5261,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "2426:5:14"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "member_name": "LTV_EXCEEDS_MAX",
                                          "referencedDeclaration": null,
                                          "type": "enum LTVDecisionEngine.Errors"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 5217,
                                              "type": "type(enum LTVDecisionEngine.Errors)",
                                              "value": "Errors"
                                            },
                                            "id": 5262,
                                            "name": "Identifier",
                                            "src": "2432:6:14"
                                          }
                                        ],
                                        "id": 5263,
                                        "name": "MemberAccess",
                                        "src": "2432:22:14"
                                      }
                                    ],
                                    "id": 5264,
                                    "name": "FunctionCall",
                                    "src": "2426:29:14"
                                  }
                                ],
                                "id": 5265,
                                "name": "FunctionCall",
                                "src": "2417:39:14"
                              }
                            ],
                            "id": 5266,
                            "name": "ExpressionStatement",
                            "src": "2417:39:14"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 5247
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "66616c7365",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "false"
                                },
                                "id": 5267,
                                "name": "Literal",
                                "src": "2477:5:14"
                              }
                            ],
                            "id": 5268,
                            "name": "Return",
                            "src": "2470:12:14"
                          }
                        ],
                        "id": 5269,
                        "name": "Block",
                        "src": "2403:90:14"
                      }
                    ],
                    "id": 5270,
                    "name": "IfStatement",
                    "src": "2380:113:14"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5247
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 5271,
                        "name": "Literal",
                        "src": "2510:4:14"
                      }
                    ],
                    "id": 5272,
                    "name": "Return",
                    "src": "2503:11:14"
                  }
                ],
                "id": 5273,
                "name": "Block",
                "src": "1750:771:14"
              }
            ],
            "id": 5274,
            "name": "FunctionDefinition",
            "src": "1407:1114:14"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "computeLTV",
              "payable": false,
              "scope": 5297,
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
                      "name": "principalTokenPrice",
                      "scope": 5296,
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
                        "id": 5275,
                        "name": "ElementaryTypeName",
                        "src": "2556:4:14"
                      }
                    ],
                    "id": 5276,
                    "name": "VariableDeclaration",
                    "src": "2556:24:14"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "collateralTokenPrice",
                      "scope": 5296,
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
                        "id": 5277,
                        "name": "ElementaryTypeName",
                        "src": "2590:4:14"
                      }
                    ],
                    "id": 5278,
                    "name": "VariableDeclaration",
                    "src": "2590:25:14"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "principalAmount",
                      "scope": 5296,
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
                        "id": 5279,
                        "name": "ElementaryTypeName",
                        "src": "2625:4:14"
                      }
                    ],
                    "id": 5280,
                    "name": "VariableDeclaration",
                    "src": "2625:20:14"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "collateralAmount",
                      "scope": 5296,
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
                        "id": 5281,
                        "name": "ElementaryTypeName",
                        "src": "2655:4:14"
                      }
                    ],
                    "id": 5282,
                    "name": "VariableDeclaration",
                    "src": "2655:21:14"
                  }
                ],
                "id": 5283,
                "name": "ParameterList",
                "src": "2546:136:14"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5296,
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
                        "id": 5284,
                        "name": "ElementaryTypeName",
                        "src": "2692:4:14"
                      }
                    ],
                    "id": 5285,
                    "name": "VariableDeclaration",
                    "src": "2692:4:14"
                  }
                ],
                "id": 5286,
                "name": "ParameterList",
                "src": "2691:6:14"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5286
                    },
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
                          "operator": "*",
                          "type": "uint256"
                        },
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
                              "operator": "/",
                              "type": "uint256"
                            },
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
                                  "operator": "*",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5278,
                                      "type": "uint256",
                                      "value": "collateralTokenPrice"
                                    },
                                    "id": 5287,
                                    "name": "Identifier",
                                    "src": "2715:20:14"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5282,
                                      "type": "uint256",
                                      "value": "collateralAmount"
                                    },
                                    "id": 5288,
                                    "name": "Identifier",
                                    "src": "2738:16:14"
                                  }
                                ],
                                "id": 5289,
                                "name": "BinaryOperation",
                                "src": "2715:39:14"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5276,
                                  "type": "uint256",
                                  "value": "principalTokenPrice"
                                },
                                "id": 5290,
                                "name": "Identifier",
                                "src": "2757:19:14"
                              }
                            ],
                            "id": 5291,
                            "name": "BinaryOperation",
                            "src": "2715:61:14"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5280,
                              "type": "uint256",
                              "value": "principalAmount"
                            },
                            "id": 5292,
                            "name": "Identifier",
                            "src": "2779:15:14"
                          }
                        ],
                        "id": 5293,
                        "name": "BinaryOperation",
                        "src": "2715:79:14"
                      }
                    ],
                    "id": 5294,
                    "name": "Return",
                    "src": "2708:86:14"
                  }
                ],
                "id": 5295,
                "name": "Block",
                "src": "2698:103:14"
              }
            ],
            "id": 5296,
            "name": "FunctionDefinition",
            "src": "2527:274:14"
          }
        ],
        "id": 5297,
        "name": "ContractDefinition",
        "src": "329:2474:14"
      }
    ],
    "id": 5298,
    "name": "SourceUnit",
    "src": "0:2804:14"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-09-28T20:51:14.517Z"
}
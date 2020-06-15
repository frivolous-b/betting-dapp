var abi =  [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "won",
        "type": "bool"
      }
    ],
    "name": "placeBet",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "balance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "gamblerAccount",
    "outputs": [
      {
        "internalType": "uint256",
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
    "inputs": [],
    "name": "summery",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "collected",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "getMyBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "userBalance",
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
        "internalType": "uint256",
        "name": "bet",
        "type": "uint256"
      }
    ],
    "name": "gamble",
    "outputs": [
      {
        "internalType": "bool",
        "name": "won",
        "type": "bool"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }

]

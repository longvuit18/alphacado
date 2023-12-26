export const multipleSwapAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_exchange",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "InvalidInput",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "inTokens",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "outToken",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "name": "swap",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
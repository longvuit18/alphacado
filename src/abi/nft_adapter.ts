export const nftAdapterAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_alphacado",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "alphacado",
    "outputs": [
      {
        "internalType": "contract IAlphacado",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "sourceChainId",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "sourceChainRequestId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receipient",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "payload",
        "type": "bytes"
      }
    ],
    "name": "executeReceived",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC721",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumSendAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint16",
        "name": "targetChain",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "targetChainActionId",
        "type": "uint16"
      },
      {
        "internalType": "address",
        "name": "receipient",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "payload",
        "type": "bytes"
      }
    ],
    "name": "fromNFT",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]
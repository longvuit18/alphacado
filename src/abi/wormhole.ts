export const wormholeAbi = [
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "targetChain",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "receiverValue",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "gasLimit",
        "type": "uint256"
      }
    ],
    "name": "quoteEVMDeliveryPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "nativePriceQuote",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "targetChainRefundPerGasUnused",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
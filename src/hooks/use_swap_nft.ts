
import { useEffect, useMemo, useState } from "react"
import { erc20ABI, erc721ABI, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { useClientAccount } from "./use_client_account";
import { SUPPLY_LIST, ADAPTER_ADDRESS, ROUTER, rateList, EXCHANGE_TOKEN, MULTIPLE_SWAP_VICTION } from "@/constants/contract_address";
import { encodeAbiParameters, isAddress, parseEther, zeroAddress } from "viem";
import { Token } from "@/models/supply";

import { nftAdapterAbi } from "@/abi/nft_adapter";

const nftRateUSDC = 5.4;
export const useSwapNft = ({ chainFromId }: { chainFromId?: number }) => {
  const account = useClientAccount();
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [tokenFrom, setTokenFrom] = useState<Token>(SUPPLY_LIST.ethereum.token.USDC)
  const [tokenTo, setTokenTo] = useState<Token>(SUPPLY_LIST.viction.token.VIC)
  const [chainToId, setChainToId] = useState<number>(89)
  const [receiver, setReceiver] = useState<string>("")
  const [isUseAnotherWallet, setIsUseAnotherWallet] = useState(false)
  const [progressState, setProgressState] = useState("")
  const [hash, setHash] = useState("")
  const [tokenId, setTokenId] = useState<string | undefined>();
  const [zapTo, setZapTo] = useState("token");
  const [swapped, setSwapped] = useState(false);



  const { data: transactionRes, isError: transactionError, isLoading: transactionLoading } = useWaitForTransaction({
    hash: hash as `0x${string}`,
    enabled: !!hash
  })


  useEffect(() => {
    if (transactionLoading) {
      setProgressState("Processing ...")
    } else {
      if (transactionError) {
        setProgressState("Something was wrong!");
      } else {
        setProgressState("Transaction successfully!")
      }

      if (swapped) {
        setTokenId(undefined)
        setSwapped(false)
      }
      setTimeout(() => {
        setHash("");
      }, 1000);
    }
  }, [transactionRes, transactionError, transactionLoading, swapped])

  const { data: operator } = useContractRead({
    address: tokenFrom?.address as `0x${string}`,
    abi: erc721ABI,
    functionName: "getApproved",
    args: [BigInt((tokenId as string ?? "0")?.toString())],
    enabled: !!tokenId,
    watch: true
  })

  const isApprove = useMemo(() => {
    return operator != (ADAPTER_ADDRESS as any)[(chainFromId as number)?.toString()]?.NFTAdapter
  }, [operator, tokenId])

  const { config: configSwap, error } = usePrepareContractWrite({
    address: (ADAPTER_ADDRESS as any)[(chainFromId as number)?.toString()]?.NFTAdapter,
    abi: nftAdapterAbi,
    functionName: 'fromNFT',
    args: [
      tokenFrom?.address,
      BigInt(tokenId as string ?? "0"),
      BigInt(parseEther(nftRateUSDC.toString())),
      13,
      1,
      isUseAnotherWallet ? receiver : account?.address ?? zeroAddress,
      encodeAbiParameters([
        { name: 'x', type: 'address' },
        { name: 'y', type: 'address' },
        { name: 'z', type: 'uint256' },
        { name: 'k', type: 'bytes' },
      ], [
        (ADAPTER_ADDRESS as any)[chainToId?.toString()]?.uniswapV2Token ?? "0xeFA7D4F3378a79A0985407b4e36955D54808df87",
        tokenTo?.address as `0x${string}` ?? zeroAddress,
        parseEther("0"),
        "" as any
      ])
    ],
    value: parseEther("0.001"),
    enabled: !!tokenTo?.address && !!tokenFrom?.address && !!chainFromId && !!chainToId && !isApprove && !!tokenId
  })


  const { config: configApprove, error: errorApprove } = usePrepareContractWrite({
    address: tokenFrom?.address as `0x${string}`,
    abi: erc721ABI,
    functionName: "approve",
    args: [(ADAPTER_ADDRESS as any)[(chainFromId as number)?.toString()]?.NFTAdapter, BigInt((tokenId as string ?? "0").toString())],
    enabled: !!tokenId
  })


  const { data, writeAsync: writeSwapAsync } = useContractWrite(configSwap);
  const { data: approveData, writeAsync: writeApproveAsync } = useContractWrite(configApprove);



  const onSwap = async () => {
    if (buttonLoading || !tokenId) {
      return;
    }
    setButtonLoading(true);
    if (isApprove) {
      try {
        if (writeApproveAsync) {
          const tx = await writeApproveAsync()
          setHash(tx.hash)
          setButtonLoading(false)
        }
      } catch (error) {
        setButtonLoading(false)
        console.error(error)
      }
      return;
    }

    try {
      if (writeSwapAsync) {
        const tx = await writeSwapAsync()
        setSwapped(true)
        setHash(tx.hash)
        setButtonLoading(false)
      }
    } catch (error) {
      setButtonLoading(false)
      console.error(error)
    }
  }

  const errorMessage = useMemo(() => {
    if (isUseAnotherWallet) {
      if (!receiver) {
        return "Receiver is empty."
      }

      if (!isAddress(receiver)) {
        return "Receiver address is invalid."
      }
    }

    if ((errorApprove?.cause as any)?.shortMessage) {
      return (errorApprove?.cause as any)?.shortMessage
    }

    return ""
  }, [error,
    errorApprove,
    isUseAnotherWallet,
    receiver
  ])

  const amountOut = useMemo(() => {
    const pair = `USDC/${tokenTo?.name}`.toUpperCase();
    const revertPair = `${tokenTo?.name}/USDC`.toUpperCase();
    if ((rateList as any)?.[pair]) {
      return (1 / (rateList as any)?.[pair]) * nftRateUSDC
    }

    if ((rateList as any)?.[revertPair]) {
      return (rateList as any)?.[revertPair] * nftRateUSDC
    }
    return 1
  }, [tokenFrom, tokenTo])

  return {

    isApprove,
    onSwap,
    buttonLoading,
    setTokenFrom,
    // feeWormhole,
    tokenFrom,
    setTokenTo,
    tokenTo,
    chainToId,
    setChainToId,
    errorMessage,
    progressState,
    setProgressState,
    hash,
    isUseAnotherWallet,
    setIsUseAnotherWallet,
    receiver,
    setReceiver,
    setTokenId,
    tokenId,
    zapTo,
    setZapTo,
    amountOut
  }

}
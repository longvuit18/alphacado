import { multipleSwapAbi } from "@/abi/mutiple_swap";
import { MULTIPLE_SWAP_VICTION } from "@/constants/contract_address";
import { useMemo, useState } from "react";
import { isAddress, parseEther, zeroAddress } from "viem";
import { erc20ABI, useContractRead, useContractWrite, usePrepareContractWrite } from "wagmi";

export const useMultipleSwap = ({ isUseAnotherWallet, receiver, tokenTo, account, tokenFrom1, tokenFrom2, amount1, amount2, setHash, setButtonLoading, chainToId }: any) => {
  const [isMultiple, setIsMultiple] = useState(false);

  const { data: allowanceToken1 } = useContractRead({
    address: tokenFrom1?.address as `0x${string}`,
    abi: erc20ABI,
    functionName: "allowance",
    args: [account?.address ?? zeroAddress, MULTIPLE_SWAP_VICTION],
    enabled: !!account?.address && isMultiple,
    watch: true
  })

  const { data: allowanceToken2 } = useContractRead({
    address: tokenFrom2?.address as `0x${string}`,
    abi: erc20ABI,
    functionName: "allowance",
    args: [account?.address ?? zeroAddress, MULTIPLE_SWAP_VICTION],
    enabled: !!account?.address && isMultiple,
    watch: true
  })

  const isApproveToken1 = useMemo(() => {
    return BigInt(allowanceToken1?.toString() ?? 0) < BigInt(parseEther(amount1.toString()))
  }, [allowanceToken1, amount1])

  const isApproveToken2 = useMemo(() => {
    return BigInt(allowanceToken2?.toString() ?? 0) < BigInt(parseEther(amount2.toString()))
  }, [allowanceToken2, amount2])
  const { config: configApproveMultipleToken1, error: errorApproveMultipleToken1 } = usePrepareContractWrite({
    address: tokenFrom1?.address as `0x${string}`,
    abi: erc20ABI,
    functionName: "approve",
    args: [MULTIPLE_SWAP_VICTION, parseEther(amount1.toString())],
    enabled: !!tokenFrom1?.address
  })

  const { config: configApproveMultipleToken2, error: errorApproveMultipleToken2 } = usePrepareContractWrite({
    address: tokenFrom2?.address as `0x${string}`,
    abi: erc20ABI,
    functionName: "approve",
    args: [MULTIPLE_SWAP_VICTION, parseEther(amount2.toString())],
    enabled: !!tokenFrom2?.address
  })

  const { data: approveData, writeAsync: writeApproveAsyncToken1 } = useContractWrite(configApproveMultipleToken1);
  const { data: approveData2, writeAsync: writeApproveAsyncToken2 } = useContractWrite(configApproveMultipleToken2);

  const { config: configSwap, error } = usePrepareContractWrite({
    address: MULTIPLE_SWAP_VICTION,
    abi: multipleSwapAbi,
    functionName: "swap",
    args: [
      [
        tokenFrom1?.address ?? zeroAddress,
        tokenFrom2?.address ?? zeroAddress,
      ],
      tokenTo?.address ?? zeroAddress,
      [
        parseEther(amount1.toString()),
        parseEther(amount2.toString()),
      ]
    ],
    enabled: true
  })

  const { data, writeAsync: writeSwapAsync } = useContractWrite(configSwap);

  const onSwapMultiple = async () => {
    setButtonLoading(true)
    if (isApproveToken1) {
      try {
        if (writeApproveAsyncToken1) {
          const tx = await writeApproveAsyncToken1()
          setHash(tx.hash)
          setButtonLoading(false)
        }
      } catch (error) {
        setButtonLoading(false)
        console.error(error)
      }
      return;
    }

    if (isApproveToken2) {
      try {
        if (writeApproveAsyncToken2) {
          const tx = await writeApproveAsyncToken2()
          setHash(tx.hash)
          setButtonLoading(false)
        }
      } catch (error) {
        setButtonLoading(false)
        console.error(error)
      }
      return;
    }

    if (chainToId === 89) {
      try {
        if (writeSwapAsync) {
          const tx = await writeSwapAsync()
          setHash(tx.hash)
          setButtonLoading(false)
        }
      } catch (error) {
        setButtonLoading(false)
        console.error(error)
      }
      return;
    }

    setButtonLoading(false)
  }

  const { data: tokenFrom1Balance } = useContractRead({
    address: tokenFrom1?.address as `0x${string}`,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [account?.address ?? zeroAddress],
    enabled: !!account?.address && isMultiple,
    watch: true
  })

  const { data: tokenFrom2Balance } = useContractRead({
    address: tokenFrom2?.address as `0x${string}`,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [account?.address ?? zeroAddress],
    enabled: !!account?.address && isMultiple,
    watch: true
  })

  const errorMessageMultipleSwap = useMemo(() => {
    if (isUseAnotherWallet) {
      if (!receiver) {
        return "Receiver is empty."
      }

      if (!isAddress(receiver)) {
        return "Receiver address is invalid."
      }
    }
    if (tokenFrom1Balance !== undefined && tokenFrom1Balance !== null && BigInt(parseEther(amount1.toString())) > tokenFrom1Balance) {
      return "Balance is not enough!"
    }

    if (tokenFrom2Balance !== undefined && tokenFrom2Balance !== null && BigInt(parseEther(amount2.toString())) > tokenFrom2Balance) {
      return "Balance is not enough!"
    }
    if ((errorApproveMultipleToken1?.cause as any)?.shortMessage) {
      return (errorApproveMultipleToken1?.cause as any)?.shortMessage
    }
    if ((errorApproveMultipleToken2?.cause as any)?.shortMessage) {
      return (errorApproveMultipleToken2?.cause as any)?.shortMessage
    }

    return ""
  }, [error,
    tokenFrom1Balance,
    tokenFrom2Balance,
    amount2,
    isUseAnotherWallet,
    receiver,
    errorApproveMultipleToken1,
    errorApproveMultipleToken2

  ])
  return {
    isMultiple,
    setIsMultiple,
    allowanceToken1,
    allowanceToken2,
    errorApproveMultipleToken1,
    errorApproveMultipleToken2,
    onSwapMultiple,
    isApproveToken1,
    isApproveToken2,
    errorMessageMultipleSwap,
    tokenFrom1Balance,
    tokenFrom2Balance,
  };
}
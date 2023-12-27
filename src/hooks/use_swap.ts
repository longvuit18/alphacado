import { uniswapV2AdapterAbi } from "@/abi/uniswapv2_adapter";
import { useEffect, useMemo, useState } from "react"
import { erc20ABI, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { useClientAccount } from "./use_client_account";
import { MUMBAI_UNISWAP_V2_ADAPTER_ADDRESS, MUMBAI_USDC, MUMBAI_UNISWAP_V2_ROUTER, MUMBAI_WORMHOLE, SUPPLY_LIST, ADAPTER_ADDRESS, ROUTER, rateList, EXCHANGE_TOKEN, MULTIPLE_SWAP_VICTION } from "@/constants/contract_address";
import { encodeAbiParameters, etherUnits, formatEther, formatUnits, isAddress, parseEther, zeroAddress } from "viem";
import { wormholeAbi } from "@/abi/wormhole";
import { Token } from "@/models/supply";
import { CHAINS_TESTNET } from "@/constants/chains";
import { exchangeAbi } from "@/abi/exchange";
import { useMultipleSwap } from "./use_multiple_swap";

type Address = `0x${string}`;
export const useSwap = ({ chainFromId }: { chainFromId?: number }) => {
  const account = useClientAccount();
  const [amount, setAmount] = useState<number>(0);
  const [amount2, setAmount2] = useState<number>(0);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [tokenFrom, setTokenFrom] = useState<Token>(SUPPLY_LIST.ethereum.token.USDC)
  const [tokenFrom2, setTokenFrom2] = useState<Token>(SUPPLY_LIST.ethereum.token.USDT)
  const [tokenTo, setTokenTo] = useState<Token>(SUPPLY_LIST.viction.token.VIC)
  const [chainToId, setChainToId] = useState<number>(89)
  const [receiver, setReceiver] = useState<string>("")
  const [isUseAnotherWallet, setIsUseAnotherWallet] = useState(false)
  const [progressState, setProgressState] = useState("")
  const [hash, setHash] = useState("")
  const [zapTo, setZapTo] = useState("token");
  const [zapFrom, setZapFrom] = useState("token");
  const [zapFrom2, setZapFrom2] = useState("token");

  const { isMultiple,
    setIsMultiple,
    errorApproveMultipleToken1,
    errorApproveMultipleToken2,
    isApproveToken1,
    isApproveToken2,
    onSwapMultiple,
    errorMessageMultipleSwap,
    tokenFrom1Balance,
    tokenFrom2Balance
  } = useMultipleSwap({
    account,
    tokenFrom1: tokenFrom,
    tokenFrom2,
    amount1: amount,
    amount2,
    setHash,
    setButtonLoading,
    chainToId,
    tokenTo,
    isUseAnotherWallet,
    receiver
  })

  const { data: transactionRes, isError: transactionError, isLoading: transactionLoading } = useWaitForTransaction({
    hash: hash as `0x${string}`,
    enabled: !!hash
  })

  useEffect(() => {
    if (chainFromId) {
      const chainName = Object.values(CHAINS_TESTNET)?.find(item => item.id === chainFromId)?.name?.toLowerCase()
      setTokenFrom(SUPPLY_LIST[chainName ?? ""]?.token?.USDC)
    }
  }, [chainFromId])
  useEffect(() => {
    if (transactionLoading) {
      setProgressState("Processing ...")
    } else {
      if (transactionError) {
        setProgressState("Something was wrong!");
      } else {
        setProgressState("Transaction successfully!")
      }
      setTimeout(() => {
        setHash("");
      }, 1000);
    }
  }, [transactionRes, transactionError, transactionLoading])

  const { data: allowance } = useContractRead({
    address: tokenFrom?.address as `0x${string}`,
    abi: erc20ABI,
    functionName: "allowance",
    args: [account?.address ?? zeroAddress, zapFrom === "farm" && chainFromId === 1001 ? EXCHANGE_TOKEN : (ADAPTER_ADDRESS as any)[(chainFromId as number)?.toString()]?.uniswapV2Token],
    enabled: !!account?.address,
    watch: true
  })

  const { data: tokenFromBalance } = useContractRead({
    address: tokenFrom?.address as `0x${string}`,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [account?.address ?? zeroAddress],
    enabled: !!account?.address && !isMultiple,
    watch: true
  })

  // const { data: feeWormhole } = useContractRead({
  //   address: MUMBAI_WORMHOLE,
  //   abi: wormholeAbi,
  //   functionName: "quoteEVMDeliveryPrice",
  //   args: [4, 0, 250000],
  //   enabled: !!account?.address,
  // })
  const isApprove = useMemo(() => {
    return BigInt(allowance?.toString() ?? 0) < BigInt(parseEther(amount.toString()))
  }, [allowance, amount])

  const { config: configSwap, error } = usePrepareContractWrite({
    address: (ADAPTER_ADDRESS as any)[(chainFromId as number)?.toString()]?.uniswapV2Token,
    abi: uniswapV2AdapterAbi,
    functionName: zapFrom === "token" ? 'fromUniV2Token' : "fromUniV2LP",
    args: [
      ROUTER,
      tokenFrom?.address,
      parseEther(amount.toString()),
      0,
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
        parseEther(amount.toString()),
        "" as any
      ])
    ],
    value: parseEther("0.01"),
    enabled: !!tokenTo?.address && !!tokenFrom?.address && amount > 0 && !!chainFromId && !!chainToId && !isApprove && !isMultiple
  })


  const { config: configApprove, error: errorApprove } = usePrepareContractWrite({
    address: tokenFrom?.address as `0x${string}`,
    abi: erc20ABI,
    functionName: "approve",
    args: [zapFrom === "farm" && chainFromId === 1001 ? EXCHANGE_TOKEN : (ADAPTER_ADDRESS as any)[(chainFromId as number)?.toString()]?.uniswapV2Token, parseEther(amount.toString())],
    enabled: !!tokenFrom?.address && !isMultiple
  })

  const isExchange = !!tokenFrom?.address && !!tokenTo && chainFromId === 1001 && chainToId === 1001 && zapFrom === "farm" && zapTo === "farm" && amount > 0 && !isApprove
  const { config: configExchangeToken, error: errorExchangeToken } = usePrepareContractWrite({
    address: EXCHANGE_TOKEN,
    abi: exchangeAbi,
    functionName: "exchangeToken",
    args: [tokenFrom?.address, tokenTo?.address, parseEther(amount.toString())],
    enabled: isExchange && !isMultiple
  })


  const { data, writeAsync: writeSwapAsync } = useContractWrite(configSwap);
  const { data: approveData, writeAsync: writeApproveAsync } = useContractWrite(configApprove);
  const { writeAsync: writeExchangeAsync } = useContractWrite(configExchangeToken);

  const onChangeValue = (v: string | undefined) => {
    if (!v) {
      setAmount(0)
      return;
    }
    setAmount(Number(v))
  }

  const onChangeValue2 = (v: string | undefined) => {
    if (!v) {
      setAmount2(0)
      return;
    }
    setAmount2(Number(v))
  }


  const onSwap = async () => {
    if (buttonLoading || amount <= 0 || (isMultiple && amount2 <= 0)) {
      return;
    }

    if (isMultiple) {
      onSwapMultiple()
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

    if (chainFromId === 1001 && chainToId === 1001 && zapFrom === "farm" && zapTo === "farm") {
      try {
        if (writeExchangeAsync) {
          const tx = await writeExchangeAsync()
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
    if (tokenFromBalance !== undefined && tokenFromBalance !== null && BigInt(parseEther(amount.toString())) > tokenFromBalance) {
      return "Balance is not enough!"
    }
    if ((errorApprove?.cause as any)?.shortMessage) {
      return (errorApprove?.cause as any)?.shortMessage
    }
    if (isExchange) {
      if ((errorExchangeToken?.cause as any)?.shortMessage) {
        return (errorExchangeToken?.cause as any)?.shortMessage
      }
    } else {
      if ((error?.cause as any)?.shortMessage) {
        return (error?.cause as any)?.shortMessage
      }
    }

    return ""
  }, [error,
    errorApprove,
    tokenFromBalance,
    errorExchangeToken,
    isExchange,
    isUseAnotherWallet,
    receiver,
    errorApproveMultipleToken1,
    errorApproveMultipleToken2
  ])

  const rate = useMemo(() => {
    const pair = `${tokenFrom?.name}/${tokenTo?.name}`;
    const revertPair = `${tokenTo?.name}/${tokenFrom?.name}`;
    if ((rateList as any)?.[pair]) {
      return (rateList as any)?.[pair]
    }

    if ((rateList as any)?.[revertPair]) {
      return 1 / (rateList as any)?.[revertPair]
    }
    return 1
  }, [tokenFrom, tokenTo])

  const rateToken2 = useMemo(() => {
    const pair = `${tokenFrom?.name}/${tokenTo?.name}`;
    const revertPair = `${tokenTo?.name}/${tokenFrom?.name}`;
    if ((rateList as any)?.[pair]) {
      return (rateList as any)?.[pair]
    }

    if ((rateList as any)?.[revertPair]) {
      return 1 / (rateList as any)?.[revertPair]
    }
    return 1
  }, [tokenFrom2, tokenTo])

  return {
    amount,
    onChangeValue,
    isApprove,
    onSwap,
    buttonLoading,
    tokenFromBalance,
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
    zapFrom,
    zapTo,
    setZapFrom,
    setZapTo,
    rate,
    isUseAnotherWallet,
    setIsUseAnotherWallet,
    receiver,
    setReceiver,
    isMultiple,
    setIsMultiple,
    onChangeValue2,
    zapFrom2,
    setZapFrom2,
    tokenFrom2,
    setTokenFrom2,
    tokenFrom1Balance,
    tokenFrom2Balance,
    isApproveToken1,
    isApproveToken2,
    errorMessageMultipleSwap,
    rateToken2,
    amount2
  }

}
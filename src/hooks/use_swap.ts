import { uniswapV2AdapterAbi } from "@/abi/uniswapv2_adapter";
import { useEffect, useMemo, useState } from "react"
import { erc20ABI, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { useClientAccount } from "./use_client_account";
import { MUMBAI_UNISWAP_V2_ADAPTER_ADDRESS, MUMBAI_USDC, MUMBAI_UNISWAP_V2_ROUTER, MUMBAI_WORMHOLE, SUPPLY_LIST, ADAPTER_ADDRESS, ROUTER, rateList, EXCHANGE_TOKEN } from "@/constants/contract_address";
import { encodeAbiParameters, etherUnits, formatEther, formatUnits, parseEther, zeroAddress } from "viem";
import { wormholeAbi } from "@/abi/wormhole";
import { Token } from "@/models/supply";
import { CHAINS_TESTNET } from "@/constants/chains";
import { exchangeAbi } from "@/abi/exchange";

export const useSwap = ({ chainFromId }: { chainFromId?: number }) => {
  const account = useClientAccount();
  const [amount, setAmount] = useState<number>(0);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [tokenFrom, setTokenFrom] = useState<Token>(SUPPLY_LIST.ethereum.token.USDC)
  const [tokenTo, setTokenTo] = useState<Token>(SUPPLY_LIST.klay.token.KLAY)
  const [chainToId, setChainToId] = useState<number>(1001)
  const [receiver, setReceiver] = useState<string>(account?.address ?? '')
  const [progressState, setProgressState] = useState("")
  const [hash, setHash] = useState("")
  const [zapTo, setZapTo] = useState("token");
  const [zapFrom, setZapFrom] = useState("token");

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
      setProgressState("Progressing ...")
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
    address: tokenFrom.address as `0x${string}`,
    abi: erc20ABI,
    functionName: "allowance",
    args: [account?.address ?? zeroAddress, zapFrom === "farm" ? EXCHANGE_TOKEN : (ADAPTER_ADDRESS as any)[(chainFromId as number)?.toString()]?.uniswapV2Token],
    enabled: !!account?.address,
    watch: true
  })

  const { data: tokenFromBalance } = useContractRead({
    address: tokenFrom.address as `0x${string}`,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [account?.address ?? zeroAddress],
    enabled: !!account?.address,
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
      account?.address ?? zeroAddress,
      encodeAbiParameters([
        { name: 'x', type: 'address' },
        { name: 'y', type: 'address' },
        { name: 'z', type: 'uint256' },
        { name: 'k', type: 'bytes' },
      ], [
        (ADAPTER_ADDRESS as any)[chainToId?.toString()]?.uniswapV2Token ?? "0xF149Ee748C2553f2E8D450A27D7c647E28428781",
        tokenTo?.address as `0x${string}` ?? zeroAddress,
        parseEther(amount.toString()),
        "" as any
      ])
    ],
    value: parseEther("0.01"),
    enabled: !!tokenTo?.address && !!tokenFrom?.address && amount > 0 && !!chainFromId && !!chainToId && !isApprove && zapFrom !== "farm"
  })



  const { config: configApprove, error: errorApprove } = usePrepareContractWrite({
    address: tokenFrom.address as `0x${string}`,
    abi: erc20ABI,
    functionName: "approve",
    args: [zapFrom === "farm" ? EXCHANGE_TOKEN : (ADAPTER_ADDRESS as any)[(chainFromId as number)?.toString()]?.uniswapV2Token, parseEther(amount.toString())],
    enabled: !!tokenFrom.address
  })

  const { config: configExchangeToken, error: errorExchangeToken } = usePrepareContractWrite({
    address: EXCHANGE_TOKEN,
    abi: exchangeAbi,
    functionName: "exchangeToken",
    args: [tokenFrom.address, tokenTo.address, parseEther(amount.toString())],
    enabled: !!tokenFrom.address && !!tokenTo && chainFromId === 1001 && chainToId === 1001 && zapFrom === "farm" && zapTo === "farm" && amount > 0 && !isApprove
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

  const onSwap = async () => {
    setButtonLoading(true)
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
    if (tokenFromBalance !== undefined && tokenFromBalance !== null && BigInt(parseEther(amount.toString())) > tokenFromBalance) {
      return "Balance is not enough!"
    }
    if ((errorApprove?.cause as any)?.shortMessage) {
      return (errorApprove?.cause as any)?.shortMessage
    }
    if ((error?.cause as any)?.shortMessage) {
      return (error?.cause as any)?.shortMessage
    }

    if ((errorExchangeToken?.cause as any)?.shortMessage) {
      return (errorExchangeToken?.cause as any)?.shortMessage
    }
    return ""
  }, [error, errorApprove, tokenFromBalance, amount, errorExchangeToken])

  const rate = useMemo(() => {
    return (rateList as any)?.[`${tokenFrom.name}/${tokenTo.name}`] ?? 0.2
  }, [tokenFrom, tokenTo])

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
    rate
  }

}
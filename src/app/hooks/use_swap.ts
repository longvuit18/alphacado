import { uniswapV2AdapterAbi } from "@/abi/uniswapv2_adapter";
import { useMemo, useState } from "react"
import { erc20ABI, useContractRead, useContractWrite, usePrepareContractWrite } from "wagmi";
import { useClientAccount } from "./use_client_account";
import { MUMBAI_UNISWAP_V2_ADAPTER_ADDRESS, MUMBAI_USDC, MUMBAI_UNISWAP_V2_ROUTER, MUMBAI_WORMHOLE, SUPPLY_LIST } from "@/constants/contract_address";
import { encodeAbiParameters, etherUnits, formatEther, formatUnits, parseEther, zeroAddress } from "viem";
import { wormholeAbi } from "@/abi/wormhole";
import { Token } from "@/models/supply";

export const useSwap = () => {
  const account = useClientAccount();
  const [amount, setAmount] = useState<number>(0);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [tokenFrom, setTokenFrom] = useState<Token>(SUPPLY_LIST.bsc.token.USDC)
  const [tokenTo, setTokenTo] = useState<Token>(SUPPLY_LIST.bsc.token.USDC)
  const [chainToId, setChainToId] = useState<number>(1001)
  const [receiver, setReceiver] = useState<string>(account?.address ?? '')


  const { data: allowance } = useContractRead({
    address: tokenFrom.address as `0x${string}`,
    abi: erc20ABI,
    functionName: "allowance",
    args: [account?.address ?? zeroAddress, MUMBAI_UNISWAP_V2_ADAPTER_ADDRESS],
    enabled: !!account?.address,
    watch: true
  })

  const { data: usdcBalance } = useContractRead({
    address: tokenFrom.address as `0x${string}`,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [account?.address ?? zeroAddress],
    enabled: !!account?.address,

  })

  const { data: feeWormhole } = useContractRead({
    address: MUMBAI_WORMHOLE,
    abi: wormholeAbi,
    functionName: "quoteEVMDeliveryPrice",
    args: [4, 0, 250000],
    enabled: !!account?.address,
  })
  const { config: configSwap, error } = usePrepareContractWrite({
    address: MUMBAI_UNISWAP_V2_ADAPTER_ADDRESS,
    abi: uniswapV2AdapterAbi,
    functionName: 'fromUniV2',
    args: [
      MUMBAI_UNISWAP_V2_ROUTER,
      MUMBAI_USDC,
      parseEther(amount.toString()),
      parseEther(amount.toString()),
      4,
      1,
      account?.address,
      encodeAbiParameters([
        { name: 'x', type: 'address' },
        { name: 'y', type: 'address' },
        { name: 'z', type: 'uint256' }
      ], [
        "0xBB48201ce454826cecf11424566dbb52307BE0D4",
        "0x67a1015df91cA4a56ACff7E3aff519e55b0107f5",
        parseEther(amount.toString())
      ])
    ],
    value: (feeWormhole as any)?.[0]
  })

  const isApprove = useMemo(() => {
    return BigInt(allowance?.toString() ?? 0) < BigInt(parseEther(amount.toString()))
  }, [allowance, amount])

  const { config: configApprove } = usePrepareContractWrite({
    address: MUMBAI_USDC,
    abi: erc20ABI,
    functionName: "approve",
    args: [MUMBAI_UNISWAP_V2_ADAPTER_ADDRESS, isApprove && allowance ? parseEther(amount.toString()) - allowance : parseEther(amount.toString())]
  })

  const { data, writeAsync: writeSwapAsync } = useContractWrite(configSwap);
  const { data: approveData, writeAsync: writeApproveAsync } = useContractWrite(configApprove);

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
          const res = await writeApproveAsync()

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
        await writeSwapAsync()
        setButtonLoading(false)
      }
    } catch (error) {
      setButtonLoading(false)
      console.error(error)
    }
  }

  return {
    amount,
    onChangeValue,
    isApprove,
    onSwap,
    buttonLoading,
    usdcBalance,
    setTokenFrom,
    feeWormhole,
    tokenFrom,
    setTokenTo,
    tokenTo,
    chainToId,
    setChainToId
  }

}
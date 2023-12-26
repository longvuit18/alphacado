import { useBlockNumber, useContractWrite, useNetwork, usePrepareContractWrite, useSwitchNetwork, useWaitForTransaction } from "wagmi";
import { useClientAccount } from "./use_client_account"
import { BSCTESTNET_VAULT_FACTORY, KLAYTNTESTNET_VAULT_FACTORY, SUPPLY_LIST, VICTIONTESTNET_VAULT_FACTORY } from "@/constants/contract_address";
import { vaultFactoryAbi } from "@/abi/vault_factory";
import { useEffect, useState } from "react";
import { parseEther } from "viem";

type Props = {
  data: {
    name: string;
    // stakeToken: `0x${string}`;
    // rewardToken: `0x${string}`;
    depositAmount: number;
    fee: number;
    receiver: `0x${string}`;
    isConfirmed: boolean;
  }
  setEndStep: () => void
}
export const useVault = (props: Props) => {
  const { data } = props;
  const account = useClientAccount();
  // get block number docs: wagmi
  const { data: blockData } = useBlockNumber()
  const [progressState, setProgressState] = useState("")
  const [chainId, setChainId] = useState(-1)
  const [hash, setHash] = useState("")
  const { chain } = useNetwork()
  const { switchNetworkAsync } = useSwitchNetwork()

  useEffect(() => {
    if (chain) {
      setChainId(chain.id)
    } else {
      setChainId(-1)
    }
  }, [chain])
  const { data: transactionRes, isError: transactionError, isLoading: transactionLoading } = useWaitForTransaction({
    hash: hash as `0x${string}`,
    enabled: !!hash
  })
  // chuẩn bị function
  const { config } = usePrepareContractWrite({
    address: VICTIONTESTNET_VAULT_FACTORY,
    abi: vaultFactoryAbi, // tự định nghĩa 1 cái abi,
    functionName: "deployVault",
    args: [
      data.name,
      SUPPLY_LIST.klay.token.USDT.address,
      SUPPLY_LIST.klay.token.USDC.address,
      parseEther("0.0001"),
      blockData?.toString(),
      239693914,
      data.depositAmount,
      account?.address,
      0,
      data.receiver
    ],
    enabled: !!account?.address && data.isConfirmed
  })

  useEffect(() => {
    if (transactionLoading) {
      setProgressState("Progressing ...")
    } else {
      if (transactionError) {
        setProgressState("Something was wrong!");
      } else {
        setProgressState("Transaction successfully!")
      }
      if (hash) {
        setTimeout(() => {
          props.setEndStep()
          setHash("");
        }, 1000);
      }

    }
  }, [transactionRes, transactionError, transactionLoading, hash])

  const { writeAsync } = useContractWrite(config)

  const createVault = async () => {
    try {
      if (writeAsync) {
        const tx = await writeAsync()
        setHash(tx.hash)
      }
    } catch (error) {
      console.error(error)
    }

  }
  return {
    createVault,
    chainId,
    switchNetworkAsync,
    hash,
    progressState,
    setProgressState
  }
}
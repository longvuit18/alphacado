import { useBlockNumber, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { useClientAccount } from "./use_client_account"
import { BSCTESTNET_VAULT_FACTORY } from "@/constants/contract_address";

export const useVault = () => {
  const account = useClientAccount();
  // get block number docs: wagmi

  // chuẩn bị function
  const { config } = usePrepareContractWrite({
    address: BSCTESTNET_VAULT_FACTORY,
    abi: [], // tự định nghĩa 1 cái abi,
    args: [], //đây là các tham số cần có,
  })

  const { writeAsync } = useContractWrite(config)

  const createVault = async () => {
    // TODO
  }
  return {
    createVault
  }
}
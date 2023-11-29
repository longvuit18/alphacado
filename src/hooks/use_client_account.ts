import { useEffect, useState } from "react";
import { PublicClient, useAccount } from "wagmi";
import { GetAccountResult } from "wagmi/actions";

export const useClientAccount = (): GetAccountResult<PublicClient> | undefined => {
  const account = useAccount()
  const [state, setState] = useState<GetAccountResult<PublicClient>>();
  useEffect(() => {
    if (account?.isConnected) {
      setState(account)
    } else {
      setState(undefined)
    }
  }, [account?.isConnected]);

  return state;
};
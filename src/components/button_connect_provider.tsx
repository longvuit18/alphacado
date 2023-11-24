"use client"

import { Web3Provider } from "@/context/web3_provider"
import Button from "./common/button"
import { useAccount } from "wagmi"
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { truncate } from "@/utils/string"
import { PropsWithChildren, useEffect, useState } from "react"

type Props = PropsWithChildren & {
  children?: React.ReactNode | React.ReactNode[];
  className?: string
}

const ButtonWithConnectWallet = (props: Props) => {
  const [currentAddress, setCurrentAddress] = useState<string | undefined | null>(undefined);

  const { address, isConnected } = useAccount()
  useEffect(() => {
    if (isConnected) {
      setCurrentAddress(address)
    } else {
      setCurrentAddress(null)

    }
  }, [isConnected])
  const { open, close } = useWeb3Modal()
  if (currentAddress) {
    return (
      !props?.children ? (
        <Button className={props?.className ?? ""} onClick={() => open()}>
          {truncate(currentAddress ?? "")}
        </Button>
      ) : props.children
    )


  }
  return (
    <Button className={props?.className ?? ""} onClick={() => open()}>
      Connect Wallet
    </Button>
  )
}
export const ButtonConnectProvider = (props: Props) => {
  return (
    <Web3Provider>
      <ButtonWithConnectWallet className={props.className}>
        {props.children}
      </ButtonWithConnectWallet>
    </Web3Provider>


  )
}
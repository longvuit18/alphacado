"use client"

import { Web3ModalProvider } from "@/context/web_3_modal"
import Button from "./common/button"
import { useAccount } from "wagmi"
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { truncate } from "@/utils/string"

type Props = {
	children?: React.ReactNode;
	className?: string
}

const ButtonWithConnectWallet = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
	const { address } = useAccount()
	const { open, close } = useWeb3Modal()
	if (address) {
		return <Button className={className ?? ""}>
			{children ?? truncate(address)}
		</Button>
	}
	return <Button className={className ?? ""} onClick={() => open()}>
		Connect Wallet
	</Button>
}
export const ButtonConnectProvider = (props: Props) => {
	return (
		<Web3ModalProvider>
			<ButtonWithConnectWallet />
		</Web3ModalProvider>


	)
}
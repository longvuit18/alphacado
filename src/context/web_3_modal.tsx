"use client";

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
// import { arbitrum, mainnet } from 'viem/chains'

// 1. Get projectId
const projectId = 'cca6a9d38d924a20b984843baea04031'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

export function Web3ModalProvider({ children }: any) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
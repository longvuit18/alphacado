import { Chain } from 'wagmi'
import ETHIcon from "@/assets/eth-icon.webp"
import KlaytnIcon from "@/assets/klaytn.png"
import PolygonIcon from "@/assets/polygon-icon.webp"
import BSCIcon from "@/assets/bsc-icon.png"

export const CHAINS_TESTNET = {
  ETH: {
    name: "Ethereum",
    icon: ETHIcon,
    id: 11155111
  },
  BSC: {
    name: "BSC",
    icon: BSCIcon,
    id: 97
  },
  KLAYTN: {
    name: "Klay",
    icon: KlaytnIcon,
    id: 1001
  },
  POLYGON: {
    name: "Polygon",
    icon: PolygonIcon,
    id: 80001
  }

};
export const klaytnTestnet = {
  id: 1001,
  name: 'Klaytn Testnet',
  network: 'klaytn',
  nativeCurrency: {
    decimals: 18,
    name: 'Klaytn',
    symbol: 'KLAY',
  },
  rpcUrls: {
    public: { http: ['https://klaytn-baobab.blockpi.network/v1/rpc/public'] },
    default: { http: ['https://klaytn-baobab.blockpi.network/v1/rpc/public'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: 'https://baobab.klaytnscope.com' },
    default: { name: 'SnowTrace', url: 'https://baobab.klaytnscope.com' },
  },
  // contracts: {
  //   multicall3: {
  //     address: '0xca11bde05977b3631167028862be2a173976ca11',
  //     blockCreated: 11_907_934,
  //   },
  // },
} as const satisfies Chain
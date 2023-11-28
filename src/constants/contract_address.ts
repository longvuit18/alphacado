
// TESTNET

import { Supply } from "@/models/supply";
import ETHIcon from "@/assets/eth-icon.webp"
import KlaytnIcon from "@/assets/klaytn.png"
import USDTIcon from "@/assets/usdt-icon.png"
import BTCIcon from "@/assets/btc-icon.png"

import BSCIcon from "@/assets/bsc-icon.png"
import USDCIcon from "@/assets/usdc-icon.png"


export const MUMBAI_UNISWAP_V2_ADAPTER_ADDRESS = "0x75055303e8ACa5F966AA15BacAE9172A5887C534";

export const MUMBAI_USDC = "0x87A35f50E570F909F275F5C8AEC40FbeB9e76D17"

export const MUMBAI_UNISWAP_V2_ROUTER = "0x8954afa98594b838bda56fe4c12a09d7739d179b";

export const MUMBAI_WORMHOLE = "0x0591C25ebd0580E0d4F27A82Fc2e24E7489CB5e0"

export const BSCTESTNET_VAULT_FACTORY = "0x9E39a440A5420892b5183b2E3F4FBF01eE6FE9EC"


export const SUPPLY_LIST: Supply = {
  eth: {
    token: {},
    farm: {},
    lending: {},
    liquid: {}
  },
  klaytn: {
    token: {},
    farm: {},
    lending: {},
    liquid: {}
  },
  bsc: {
    token: {
      USDC: { address: "0x67a1015df91cA4a56ACff7E3aff519e55b0107f5", icon: USDCIcon, apy: 3, balance: 60 },
      USDT: { address: "0xE0177884e7f10CfDA32bD342c27B4ACc89A66ac9", icon: USDTIcon, apy: 3, balance: 60 },
      ETH: { address: "0x2C0C3c13E75941d88700Ea4ff83563a368d72cd3", icon: ETHIcon, apy: 3, balance: 60 },
      BTC: { address: "0xD93B5Bd519647DA81eD3e43F3d3f7e25E0A2505a", icon: BTCIcon, apy: 3, balance: 60 },
      KLAYTN: { address: "0xD518a4Aa913f4FCF6AF70c543220717f582939e6", icon: KlaytnIcon, apy: 3, balance: 60 }
    },
    farm: {},
    lending: {},
    liquid: {}
  },
  polygon: {
    token: {
      USDC: { address: "0x87A35f50E570F909F275F5C8AEC40FbeB9e76D17", icon: USDCIcon, apy: 3, balance: 60 },
      USDT: { address: "0x5c81B1777c9aeaf2beCffC788cd182db39C3EbE7", icon: USDTIcon, apy: 3, balance: 60 },
      ETH: { address: "0xc371Ac00382296346DaC17F82aab001aBB8B5ba4", icon: ETHIcon, apy: 3, balance: 60 },
      BTC: { address: "0x53E5E9e323C79357Cf7896A5d2E5B55e91416006", icon: BTCIcon, apy: 3, balance: 60 },
      KLAYTN: { address: "0x7b2493189F2484Ca03f70081fC88ee151A452832", icon: KlaytnIcon, apy: 3, balance: 60 }
    }
    ,
    farm: {},
    lending: {},
    liquid: {}
  },
}
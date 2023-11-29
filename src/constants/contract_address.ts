
// TESTNET

import { Supply } from "@/models/supply";
import ETHIcon from "@/assets/eth-icon.webp"
import KlaytnIcon from "@/assets/klaytn.png"
import USDTIcon from "@/assets/usdt-icon.png"
import BTCIcon from "@/assets/btc-icon.png"

import BSCIcon from "@/assets/bsc-icon.png"
import USDCIcon from "@/assets/usdc-icon.png"
import sKlayIcon from "@/assets/sKLAY.png"
import stKlayIcon from "@/assets/stKLAY.png"


export const MUMBAI_UNISWAP_V2_ADAPTER_ADDRESS = "0x75055303e8ACa5F966AA15BacAE9172A5887C534";

export const MUMBAI_USDC = "0x87A35f50E570F909F275F5C8AEC40FbeB9e76D17"

export const MUMBAI_UNISWAP_V2_ROUTER = "0x8954afa98594b838bda56fe4c12a09d7739d179b";

export const MUMBAI_WORMHOLE = "0x0591C25ebd0580E0d4F27A82Fc2e24E7489CB5e0"


export const BSCTESTNET_VAULT_FACTORY = "0x9E39a440A5420892b5183b2E3F4FBF01eE6FE9EC"

export const KLAYTNTESTNET_VAULT_FACTORY = "0xF149Ee748C2553f2E8D450A27D7c647E28428781"

export const ROUTER = "0x87A35f50E570F909F275F5C8AEC40FbeB9e76D17"

export const ADAPTER_ADDRESS = {
  "11155111": {
    uniswapV2LP: "0xF149Ee748C2553f2E8D450A27D7c647E28428781",
    uniswapV2Token: "0xF149Ee748C2553f2E8D450A27D7c647E28428781"
  },
  "1001": {
    uniswapV2LP: "0xF4c12757Aa3b68Fd6fBf3340228D3F06c4044278",
    uniswapV2Token: "0xF4c12757Aa3b68Fd6fBf3340228D3F06c4044278",
    bank: "0x237E22f7aA165659a603B5eB19a1bd7f2c618391",
    station: "0xDD3FEcD49ef5f21D9F66d6a462BE5f1b07374F6f"
  },
  "80001": {
    uniswapV2Token: "0x75055303e8ACa5F966AA15BacAE9172A5887C534"
  }
}

export const ALPHACADO_CONTRACT = {
  ethereum: "0x6291Cf69a372Fbb68a2dF0C619d1DE52F38bBa8f"
}


export const SUPPLY_LIST: Supply = {
  ethereum: {
    token: {
      USDC: { address: "0x8843010C138A3eBF5080C6c6374BeA29A2de9e4C", icon: USDCIcon, apy: 1.7, balance: 64 },
      USDT: { address: "0x14e43aA77DB231985d04D3A83B7195b6866f2324", icon: USDTIcon, apy: 2.1, balance: 55 },
      ETH: { address: "0x0722102aAB6C417044A870CB1eDEe4EF51c81220", icon: ETHIcon, apy: 1.65, balance: 82 },
      BTC: { address: "0x955525CeAA1d4e661024809327f30B605b5b53D4", icon: BTCIcon, apy: 2, balance: 85 },
      KLAYTN: { address: "0x7905548A08837061B9B247BEEd39E5F307c2BBAd", icon: KlaytnIcon, apy: 2.5, balance: 70 }
    },
    farm: {
      "ETH-Klaytn": { address: "0x8843010C138A3eBF5080C6c6374BeA29A2de9e4C", icon: [ETHIcon, KlaytnIcon], apy: 3.5, balance: 60 },
      "ETH-BTC": { address: "0xa39C7B82ff1F23eF65f7b5aDD7dFbE3C700b25A6", icon: [ETHIcon, BSCIcon], apy: 2.5, balance: 81 },
      "ETH-USDT": { address: "0x73C49c8432D38DE7Ae7aC5123c9666eC5136107C", icon: [ETHIcon, USDTIcon], apy: 1.3, balance: 63 },
      "ETH-USDC": { address: "0xaAF190fE7A6Fae45d299F0D1b5983EC8efa367De", icon: [ETHIcon, USDCIcon], apy: 2.7, balance: 65 },
    },
    "lending protocols": {},
    "liquid staking": {
      SKLAY: { address: "0xcdA13312be7b1b0c37628e38Daf7802c24893Bc2", icon: sKlayIcon, apy: 1.3, balance: 88},
      STKLAY: { address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4", icon: stKlayIcon, apy: 1.3, balance: 88},
    }
  },
  klaytn: {
    token: {
      USDC: { address: "0x473425f22e9B25d78dbE0234492b79172a2e6588", icon: USDCIcon, apy: 5.1, balance: 64 },
      USDT: { address: "0x5f4Ccc4c4503Bd79AE210019b65dC5E2264fD6D2", icon: USDTIcon, apy: 3.1, balance: 75 },
      ETH: { address: "0x49BeFa60218A2Bf9F41c65ecAa27ABbB6C4e0b25", icon: ETHIcon, apy: 1.66, balance: 62 },
      BTC: { address: "0x92BC58eb0153300f36253d4ff0665bda2eb09A05", icon: BTCIcon, apy: 2.3, balance: 85 },
      KLAYTN: { address: "0x9bBC56D7a806EA67A3D528C772550BdF99Ce4579", icon: KlaytnIcon, apy: 2.5, balance: 50 }
    },
    farm: {
      "ETH-Klaytn": { address: "0x65481e2F0cc8E127D9266beF1438864940513da9", icon: [ETHIcon, KlaytnIcon], apy: 2, balance: 60 },
      "ETH-BTC": { address: "0x674A13CFc3e2F6B8981C7842489EC6F6cFd5898D", icon: [ETHIcon, BSCIcon], apy: 2.5, balance: 50 },
      "ETH-USDT": { address: "0x9fd7037B6bD6F16a89D33bE16127E067c1c7a292", icon: [ETHIcon, USDTIcon], apy: 3, balance: 65 },
      "ETH-USDC": { address: "0x642eDAC6E437F5D6037b7456966dA9d60edC9743", icon: [ETHIcon, USDCIcon], apy: 1.4, balance: 50 },
    },
    "lending protocols": {},
    "liquid staking": {
      SKLAY: { address: "0xcdA13312be7b1b0c37628e38Daf7802c24893Bc2", icon: sKlayIcon, apy: 1.1, balance: 93},
      STKLAY: { address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4", icon: stKlayIcon, apy: 1.7, balance: 82},
    }
  },
  bsc: {
    token: {
      USDC: { address: "0x67a1015df91cA4a56ACff7E3aff519e55b0107f5", icon: USDCIcon, apy: 3.3, balance: 54 },
      USDT: { address: "0xE0177884e7f10CfDA32bD342c27B4ACc89A66ac9", icon: USDTIcon, apy: 2.1, balance: 55 },
      ETH: { address: "0x2C0C3c13E75941d88700Ea4ff83563a368d72cd3", icon: ETHIcon, apy: 1.65, balance: 82 },
      BTC: { address: "0xD93B5Bd519647DA81eD3e43F3d3f7e25E0A2505a", icon: BTCIcon, apy: 4, balance: 85 },
      KLAYTN: { address: "0xD518a4Aa913f4FCF6AF70c543220717f582939e6", icon: KlaytnIcon, apy: 2.5, balance: 70 }
    },
    farm: {},
    "lending protocols": {},
    "liquid staking": {
      SKLAY: { address: "0xcdA13312be7b1b0c37628e38Daf7802c24893Bc2", icon: sKlayIcon, apy: 1.8, balance: 89},
      STKLAY: { address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4", icon: stKlayIcon, apy: 1.2, balance: 82},
    }
  },
  polygon: {
    token: {
      USDC: { address: "0x87A35f50E570F909F275F5C8AEC40FbeB9e76D17", icon: USDCIcon, apy: 2.1, balance: 80 },
      USDT: { address: "0x5c81B1777c9aeaf2beCffC788cd182db39C3EbE7", icon: USDTIcon, apy: 3, balance: 64 },
      ETH: { address: "0xc371Ac00382296346DaC17F82aab001aBB8B5ba4", icon: ETHIcon, apy: 3.2, balance: 65 },
      BTC: { address: "0x53E5E9e323C79357Cf7896A5d2E5B55e91416006", icon: BTCIcon, apy: 3.5, balance: 64 },
      KLAYTN: { address: "0x7b2493189F2484Ca03f70081fC88ee151A452832", icon: KlaytnIcon, apy: 3, balance: 70 }
    }
    ,
    farm: {},
    "lending protocols": {},
    "liquid staking": {
      SKLAY: { address: "0xcdA13312be7b1b0c37628e38Daf7802c24893Bc2", icon: sKlayIcon, apy: 1.9, balance: 83},
      STKLAY: { address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4", icon: stKlayIcon, apy: 1.3, balance: 88},
    }
  },
}
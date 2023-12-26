// TESTNET

import { Supply } from "@/models/supply";
import ETHIcon from "@/assets/eth-icon.webp";
import KlaytnIcon from "@/assets/klaytn.png";
import USDTIcon from "@/assets/usdt-icon.png";
import BTCIcon from "@/assets/btc-icon.png";

import BSCIcon from "@/assets/bsc-icon.png";
import USDCIcon from "@/assets/usdc-icon.png";
import sKlayIcon from "@/assets/sKLAY.png";
import stKlayIcon from "@/assets/stKLAY.png";
import KokosIcon from "@/assets/kokos-icon.webp";
import KSPIcon from "@/assets/klayswap-icon.webp";
import wETHICON from "@/assets/wETH-icon.png";
import stETHIcon from "@/assets/stETH.png";
import stMaticIcon from "@/assets/stMATIC.png";
import wbtcIcon from "@/assets/wbtc.png";
import ksdIcon from "@/assets/ksd.png";
import coin98Icon from "@/assets/c98-icon.png"
import luaIcon from "@/assets/lua-icon.png"
import victionIcon from "@/assets/viction-icon.png"

export const MUMBAI_UNISWAP_V2_ADAPTER_ADDRESS =
  "0x75055303e8ACa5F966AA15BacAE9172A5887C534";

export const MUMBAI_USDC = "0x87A35f50E570F909F275F5C8AEC40FbeB9e76D17";

export const MUMBAI_UNISWAP_V2_ROUTER =
  "0x8954afa98594b838bda56fe4c12a09d7739d179b";

export const MUMBAI_WORMHOLE = "0x0591C25ebd0580E0d4F27A82Fc2e24E7489CB5e0";

export const BSCTESTNET_VAULT_FACTORY =
  "0x9E39a440A5420892b5183b2E3F4FBF01eE6FE9EC";

export const KLAYTNTESTNET_VAULT_FACTORY =
  "0xF149Ee748C2553f2E8D450A27D7c647E28428781";


export const VICTIONTESTNET_VAULT_FACTORY =
  "0xBB48201ce454826cecf11424566dbb52307BE0D4";
export const ROUTER = "0x87A35f50E570F909F275F5C8AEC40FbeB9e76D17";

export const EXCHANGE_TOKEN = "0x55b84AA20159Ebe618259166dEd708ae31d7A6c3";

export const MULTIPLE_SWAP_VICTION = "0x23F10582A60B3d378fE8f366e6674D20e2D3887d";

export const ADAPTER_ADDRESS = {
  "11155111": {
    uniswapV2LP: "0xF149Ee748C2553f2E8D450A27D7c647E28428781",
    uniswapV2Token: "0xF149Ee748C2553f2E8D450A27D7c647E28428781",
  },
  "1001": {
    uniswapV2LP: "0xF4c12757Aa3b68Fd6fBf3340228D3F06c4044278",
    uniswapV2Token: "0xF4c12757Aa3b68Fd6fBf3340228D3F06c4044278",
    bank: "0x237E22f7aA165659a603B5eB19a1bd7f2c618391",
    station: "0xDD3FEcD49ef5f21D9F66d6a462BE5f1b07374F6f",
  },
  "80001": {
    uniswapV2Token: "0x75055303e8ACa5F966AA15BacAE9172A5887C534",
  },
  "89": {
    uniswapV2LP: "0xeFA7D4F3378a79A0985407b4e36955D54808df87",
    uniswapV2Token: "0xeFA7D4F3378a79A0985407b4e36955D54808df87",
  }
};

export const ALPHACADO_CONTRACT = {
  ethereum: "0x6291Cf69a372Fbb68a2dF0C619d1DE52F38bBa8f",
};

export const SUPPLY_LIST: Supply = {
  ethereum: {
    token: {
      USDC: {
        name: "USDC",
        address: "0x8843010C138A3eBF5080C6c6374BeA29A2de9e4C",
        icon: USDCIcon,
        apy: 1.7,
        totalSupplied: "600 M",
        protocol: "ETHEREUM",
      },
      USDT: {
        name: "USDT",
        address: "0x14e43aA77DB231985d04D3A83B7195b6866f2324",
        icon: USDTIcon,
        apy: 2.1,
        totalSupplied: "720 M",
        protocol: "ETHEREUM",
      },
      C98: {
        name: "C98",
        address: "0xA46f3048DA7F51EBb179F5CE111dF06A52625Af8",
        icon: coin98Icon,
        apy: 2.4,
        totalSupplied: "528 M",
        protocol: "ETHEREUM",
      },
      VIC: {
        name: "VIC",
        address: "0xE1781d85368D1d6032700C035f0fed1557d76369",
        icon: victionIcon,
        apy: 1.9,
        totalSupplied: "414 M",
        protocol: "ETHEREUM",
      },
      ETH: {
        name: "ETH",
        address: "0x0722102aAB6C417044A870CB1eDEe4EF51c81220",
        icon: ETHIcon,
        apy: 1.65,
        totalSupplied: "520 M",
        protocol: "ETHEREUM",
      },
      BTC: {
        name: "BTC",
        address: "0x955525CeAA1d4e661024809327f30B605b5b53D4",
        icon: BTCIcon,
        apy: 2,
        totalSupplied: "400 M",
        protocol: "ETHEREUM",
      },
      KLAY: {
        name: "KLAY",
        address: "0x7905548A08837061B9B247BEEd39E5F307c2BBAd",
        icon: KlaytnIcon,
        apy: 2.5,
        totalSupplied: "300 M",
        protocol: "ETHEREUM",
      },
    },
    farm: {
      "C98-wETH": {
        name: "C98-wETH",
        address: "0x04b1E03771b976Ae1bd3d455a44Fe930d4546E98",
        icon: [coin98Icon, wETHICON],
        apy: 3.2,
        balance: "62 M",
        protocol: "Uniswap V3",
      },
      "VIC-wETH": {
        name: "VIC-wETH",
        address: "0xd1a113F69C2D16A701B61E48574F0ecDaff64B51",
        icon: [victionIcon, wETHICON],
        apy: 1.5,
        balance: "88 M",
        protocol: "Uniswap V3",
      },
      "ETH-KLAY": {
        name: "ETH-KLAY",
        address: "0x8843010C138A3eBF5080C6c6374BeA29A2de9e4C",
        icon: [ETHIcon, KlaytnIcon],
        apy: 3.5,
        balance: "54 M",
        protocol: "Uniswap V3",
      },
      "ETH-BTC": {
        name: "ETH-BTC",
        address: "0xa39C7B82ff1F23eF65f7b5aDD7dFbE3C700b25A6",
        icon: [ETHIcon, BTCIcon],
        apy: 2.5,
        balance: "53 M",
        protocol: "Uniswap V2",
      },
      "ETH-USDT": {
        name: "ETH-USDT",
        address: "0x73C49c8432D38DE7Ae7aC5123c9666eC5136107C",
        icon: [ETHIcon, USDTIcon],
        apy: 1.3,
        balance: "61 M",
        protocol: "Uniswap V2",
      },
      "ETH-USDC": {
        name: "ETH-USDC",
        address: "0xaAF190fE7A6Fae45d299F0D1b5983EC8efa367De",
        icon: [ETHIcon, USDCIcon],
        apy: 2.7,
        balance: "54 M",
        protocol: "Uniswap V2",
      },
      "wETH-USDC": {
        name: "wETH-USDC",
        address: "0xf0f0A3c6530DCC2d00B72B9219D937a897F9fbB9",
        icon: [wETHICON, USDCIcon],
        apy: 3.7,
        balance: "72 M",
        protocol: "Uniswap V3",
      },
    },
    "lending pools": {
      ETH: {
        name: "ETH",
        address: "0xcdA13312be7b1b0c37628e38Daf7802c24893Bc2",
        icon: ETHIcon,
        apy: 3.7,
        totalSupplied: "456K",
        protocol: "AAVE",
      },
      WBTC: {
        name: "WBTC",
        address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4",
        icon: wbtcIcon,
        apy: 4.34,
        totalSupplied: "12K",
        protocol: "AAVE",
      },
      USDC: {
        name: "USDC",
        address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4",
        icon: USDCIcon,
        apy: 4.34,
        totalSupplied: "440M",
        protocol: "AAVE",
      },
      USDT: {
        name: "USDT",
        address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4",
        icon: USDTIcon,
        apy: 4.34,
        totalSupplied: "369M",
        protocol: "AAVE",
      },
    },
    "liquid staking": {
      stETH: {
        name: "sKLAY",
        address: "0xcdA13312be7b1b0c37628e38Daf7802c24893Bc2",
        icon: stETHIcon,
        apy: 3.7,
        tvl: "1.4B",
        protocol: "LIDO",
      },
      stMATIC: {
        name: "stKLAY",
        address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4",
        icon: stMaticIcon,
        apy: 4.34,
        tvl: "300M",
        protocol: "LIDO",
      },
    },
  },
  klay: {
    token: {
      USDC: {
        name: "USDC",
        address: "0x473425f22e9B25d78dbE0234492b79172a2e6588",
        icon: USDCIcon,
        apy: 5.1,
        totalSupplied: "520 M",
        protocol: "KLAYTN",
      },
      USDT: {
        name: "USDT",
        address: "0x5f4Ccc4c4503Bd79AE210019b65dC5E2264fD6D2",
        icon: USDTIcon,
        apy: 3.1,
        totalSupplied: "410 M",
        protocol: "KLAYTN",
      },
      ETH: {
        name: "ETH",
        address: "0x49BeFa60218A2Bf9F41c65ecAa27ABbB6C4e0b25",
        icon: ETHIcon,
        apy: 1.66,
        totalSupplied: "607 M",
        protocol: "KLAYTN",
      },
      BTC: {
        name: "BTC",
        address: "0x92BC58eb0153300f36253d4ff0665bda2eb09A05",
        icon: BTCIcon,
        apy: 2.3,
        totalSupplied: "403 M",
        protocol: "KLAYTN",
      },
      KLAY: {
        name: "KLAY",
        address: "0x9bBC56D7a806EA67A3D528C772550BdF99Ce4579",
        icon: KlaytnIcon,
        apy: 2.5,
        totalSupplied: "500 M",
        protocol: "KLAYTN",
      },
    },
    farm: {
      "KOKOS-ETH": {
        name: "KOKOS-ETH",
        address: "0xc7072E9A72912fb8a6E341c4F30e46Ac15289055",
        icon: [KokosIcon, ETHIcon],
        apy: 1.3,
        tvl: "63 M",
        protocol: "KOKONUT SWAP",
      },
      "KSP-KLAY": {
        name: "KSP-KLAY",
        address: "0x5e1dF595d357B1c4d4958B5D4eDCBBC018090b0A",
        icon: [KSPIcon, KlaytnIcon],
        apy: 2.4,
        tvl: "79 M",
        protocol: "KLAYSWAP",
      },
      "ETH-KLAY": {
        name: "ETH-KLAY",
        address: "0x65481e2F0cc8E127D9266beF1438864940513da9",
        icon: [ETHIcon, KlaytnIcon],
        apy: 2,
        tvl: "52 M",
        protocol: "KLAYSWAP",
      },
      "ETH-BTC": {
        name: "ETH-BTC",
        address: "0x674A13CFc3e2F6B8981C7842489EC6F6cFd5898D",
        icon: [ETHIcon, BTCIcon],
        apy: 2.5,
        tvl: "97 M",
        protocol: "KLAYSWAP",
      },
      "ETH-USDT": {
        name: "ETH-USDT",
        address: "0x9fd7037B6bD6F16a89D33bE16127E067c1c7a292",
        icon: [ETHIcon, USDTIcon],
        apy: 3,
        tvl: "87 M",
        protocol: "KLAYSWAP",
      },
      "ETH-USDC": {
        name: "ETH-USDC",
        address: "0x642eDAC6E437F5D6037b7456966dA9d60edC9743",
        icon: [ETHIcon, USDCIcon],
        apy: 1.4,
        tvl: "53 M",
        protocol: "KLAYSWAP",
      },
    },
    "lending pools": {
      KLAY: {
        name: "KLAY",
        address: "0xcdA13312be7b1b0c37628e38Daf7802c24893Bc2",
        icon: KlaytnIcon,
        apy: 3.7,
        totalSupplied: "415M",
        protocol: "KLAYBANK",
      },
      OUSDT: {
        name: "OUSDT",
        address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4",
        icon: wbtcIcon,
        apy: 4.34,
        totalSupplied: "694M",
        protocol: "KLAYBANK",
      },
      KSD: {
        name: "KSD",
        address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4",
        icon: ksdIcon,
        apy: 4.34,
        totalSupplied: "5.8M",
        protocol: "KLAYBANK",
      },
    },
    "liquid staking": {
      sKLAY: {
        name: "sKLAY",
        address: "0xcdA13312be7b1b0c37628e38Daf7802c24893Bc2",
        icon: sKlayIcon,
        apy: 5.0,
        tvl: "5.2M",
        protocol: "KLAYSTATION",
      },
      stKLAY: {
        name: "stKLAY",
        address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4",
        icon: stKlayIcon,
        apy: 6.0,
        tvl: "40M",
        protocol: "STAKELY",
      },
    },
  },
  bsc: {
    token: {
      USDC: {
        name: "USDC",
        address: "0x67a1015df91cA4a56ACff7E3aff519e55b0107f5",
        icon: USDCIcon,
        apy: 3.3,
        totalSupplied: "230 M",
        protocol: "AAVE",
      },
      USDT: {
        name: "USDT",
        address: "0xE0177884e7f10CfDA32bD342c27B4ACc89A66ac9",
        icon: USDTIcon,
        apy: 2.1,
        totalSupplied: "560 M",
        protocol: "AAVE",
      },
      ETH: {
        name: "ETH",
        address: "0x2C0C3c13E75941d88700Ea4ff83563a368d72cd3",
        icon: ETHIcon,
        apy: 1.65,
        totalSupplied: "930 M",
        protocol: "AAVE",
      },
      BTC: {
        name: "BTC",
        address: "0xD93B5Bd519647DA81eD3e43F3d3f7e25E0A2505a",
        icon: BTCIcon,
        apy: 4,
        totalSupplied: "430 M",
        protocol: "AAVE",
      },
      KLAY: {
        name: "KLAY",
        address: "0xD518a4Aa913f4FCF6AF70c543220717f582939e6",
        icon: KlaytnIcon,
        apy: 2.5,
        totalSupplied: "540 M",
        protocol: "AAVE",
      },
    },
    farm: {},
    "lending pools": {
      ETH: {
        name: "ETH",
        address: "0xcdA13312be7b1b0c37628e38Daf7802c24893Bc2",
        icon: ETHIcon,
        apy: 3.7,
        totalSupplied: "456K",
        protocol: "AAVE",
      },
      WBTC: {
        name: "WBTC",
        address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4",
        icon: wbtcIcon,
        apy: 4.34,
        totalSupplied: "12K",
        protocol: "AAVE",
      },
      USDC: {
        name: "USDC",
        address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4",
        icon: USDCIcon,
        apy: 4.34,
        totalSupplied: "440M",
        protocol: "AAVE",
      },
      USDT: {
        name: "USDT",
        address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4",
        icon: USDTIcon,
        apy: 4.34,
        totalSupplied: "369M",
        protocol: "AAVE",
      },
    },
    "liquid staking": {
      sKLAY: {
        name: "sKLAY",
        address: "0xcdA13312be7b1b0c37628e38Daf7802c24893Bc2",
        icon: sKlayIcon,
        apy: 1.8,
        balance: "670 M",
      },
      stKLAY: {
        name: "stKLAY",
        address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4",
        icon: stKlayIcon,
        apy: 1.2,
        balance: "732 M",
      },
    },
  },
  polygon: {
    token: {
      USDC: {
        name: "USDC",
        address: "0x87A35f50E570F909F275F5C8AEC40FbeB9e76D17",
        icon: USDCIcon,
        apy: 2.1,
        totalSupplied: "554 M",
        protocol: "POLYGON",
      },
      USDT: {
        name: "USDT",
        address: "0x5c81B1777c9aeaf2beCffC788cd182db39C3EbE7",
        icon: USDTIcon,
        apy: 3,
        totalSupplied: "920 M",
        protocol: "POLYGON",
      },
      ETH: {
        name: "ETH",
        address: "0xc371Ac00382296346DaC17F82aab001aBB8B5ba4",
        icon: ETHIcon,
        apy: 3.2,
        totalSupplied: "380 M",
        protocol: "POLYGON",
      },
      BTC: {
        name: "BTC",
        address: "0x53E5E9e323C79357Cf7896A5d2E5B55e91416006",
        icon: BTCIcon,
        apy: 3.5,
        totalSupplied: "760 M",
        protocol: "POLYGON",
      },
      KLAY: {
        name: "KLAY",
        address: "0x7b2493189F2484Ca03f70081fC88ee151A452832",
        icon: KlaytnIcon,
        apy: 3,
        totalSupplied: "450 M",
        protocol: "POLYGON",
      },
    },
    farm: {},
    "lending pools": {
      ETH: {
        name: "ETH",
        address: "0xcdA13312be7b1b0c37628e38Daf7802c24893Bc2",
        icon: ETHIcon,
        apy: 3.7,
        totalSupplied: "456K",
        protocol: "AAVE",
      },
      WBTC: {
        name: "WBTC",
        address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4",
        icon: wbtcIcon,
        apy: 4.34,
        totalSupplied: "12K",
        protocol: "AAVE",
      },
      USDC: {
        name: "USDC",
        address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4",
        icon: USDCIcon,
        apy: 4.34,
        totalSupplied: "440M",
        protocol: "AAVE",
      },
      USDT: {
        name: "USDT",
        address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4",
        icon: USDTIcon,
        apy: 4.34,
        totalSupplied: "369M",
        protocol: "AAVE",
      },
    },
    "liquid staking": {
      sKLAY: {
        name: "sKLAY",
        address: "0xcdA13312be7b1b0c37628e38Daf7802c24893Bc2",
        icon: sKlayIcon,
        apy: 1.9,
        balance: "520 M",
      },
      stKLAY: {
        name: "stKLAY",
        address: "0xE492088AB3E99e3b964a7315162d2Aa96c59ddd4",
        icon: stKlayIcon,
        apy: 1.3,
        balance: "501 M",
      },
    },
  },
  arbitrum: {
    token: {},
    farm: {},
    "lending pools": {},
    "liquid staking": {},
  },
  optimism: {
    token: {},
    farm: {},
    "lending pools": {},
    "liquid staking": {},
  },
  avalanche: {
    token: {},
    farm: {},
    "lending pools": {},
    "liquid staking": {},
  },
  zksync: {
    token: {},
    farm: {},
    "lending pools": {},
    "liquid staking": {},
  },
  viction: {
    token: {
      USDC: {
        name: "USDC",
        address: "0x8843010C138A3eBF5080C6c6374BeA29A2de9e4C",
        icon: USDCIcon,
        apy: 1.7,
        totalSupplied: "529 M",
        protocol: "VICTION",
      },
      USDT: {
        name: "USDT",
        address: "0xbB07650Aa77a3e21EF5a3180eAF21f4Ce3fB31AA",
        icon: USDTIcon,
        apy: 5.1,
        totalSupplied: "427 M",
        protocol: "VICTION",
      },
      C98: {
        name: "C98",
        address: "0x6feEB778A1b9D9566E0e1a5383EfD5CF17B923CF",
        icon: coin98Icon,
        apy: 2.4,
        totalSupplied: "518 M",
        protocol: "VICTION",
      },
      VIC: {
        name: "VIC",
        address: "0x16c69e86bB26e56f1f2623Bb556d14d369bE1511",
        icon: victionIcon,
        apy: 2.0,
        totalSupplied: "474 M",
        protocol: "VICTION",
      },
      ETH: {
        name: "ETH",
        address: "0x127b0b4A674fCbda01d95ba31cDfEC470836754d",
        icon: ETHIcon,
        apy: 2.81,
        totalSupplied: "700 M",
        protocol: "VICTION",
      },
      BTC: {
        name: "BTC",
        address: "0xd63031C80DDBE4FE5C6cc60dEAeaF8DF1Bd0B194",
        icon: BTCIcon,
        apy: 3.8,
        totalSupplied: "150 M",
        protocol: "VICTION",
      }
    },
    farm: {
      "USDT-VIC": {
        name: "USDT-VIC",
        address: "0x1ef15bA769d8141f3615F8257AA646f442103703",
        icon: [USDTIcon, victionIcon],
        apy: 4.2,
        balance: "78 M",
        protocol: "Baryon",
      },
      "USDC-VIC": {
        name: "USDC-VIC",
        address: "0x0d3cfa75fcD2c262374bBB21C7bacC5e4Af7eB80",
        icon: [USDCIcon, victionIcon],
        apy: 2.8,
        balance: "98 M",
        protocol: "Baryon",
      },
      "C98-USDT": {
        name: "C98-USDT",
        address: "0xa5E002CE0b82Af12A617aB9C7Aa78f8E7897f03c",
        icon: [coin98Icon, USDTIcon],
        apy: 1.8,
        balance: "108 M",
        protocol: "Baryon",
      },
      "C98-USDC": {
        name: "C98-USDC",
        address: "0xB0fcE4f2F8E4021ac1C3fEA2305A1e2D4eb3e223",
        icon: [coin98Icon, USDCIcon],
        apy: 2.8,
        balance: "178 M",
        protocol: "Baryon",
      },
      "C98-VIC": {
        name: "C98-VIC",
        address: "0x829F3e4AC34Df12b221AA3f94FC88a3A0D86f9E1",
        icon: [coin98Icon, victionIcon],
        apy: 5.4,
        balance: "278 M",
        protocol: "Baryon",
      },
      "VIC-wETH": {
        name: "VIC-wETH",
        address: "0xCc9D7940f6D5Cb7590E2B60064F2391c64937E1D",
        icon: [victionIcon, wETHICON],
        apy: 1.5,
        balance: "88 M",
        protocol: "Baryon",
      },
      "USDC-wETH": {
        name: "USDC-wETH",
        address: "0xFC23c2F5C3Bec388D6971d06C4CF30662D995dab",
        icon: [USDCIcon, wETHICON],
        apy: 2.5,
        balance: "78 M",
        protocol: "Baryon",
      },
      "USDT-wETH": {
        name: "USDT-wETH",
        address: "0x52215A52E53fF3EaA4437FC05470Fb8DfE0EebC1",
        icon: [USDTIcon, wETHICON],
        apy: 1.5,
        balance: "71 M",
        protocol: "Baryon",
      },
      "C98-wETH": {
        name: "C98-wETH",
        address: "0xF6fe45E137451Ace68187DEDBcfa235938ccebBD",
        icon: [coin98Icon, wETHICON],
        apy: 0.9,
        balance: "781 M",
        protocol: "Baryon",
      },
      "USDC-wBTC": {
        name: "USDC-wBTC",
        address: "0x5D441d07a6A176A61CC9Ea9C2b8D3E31708dE1C5",
        icon: [USDCIcon, wbtcIcon],
        apy: 3.9,
        balance: "281 M",
        protocol: "Baryon",
      },
      "USDT-wBTC": {
        name: "USDT-wBTC",
        address: "0x617A22432e683b676CCDB2A61318647e2a935D6b",
        icon: [USDTIcon, wbtcIcon],
        apy: 1.3,
        balance: "381 M",
        protocol: "Baryon",
      },
      "C98-wBTC": {
        name: "C98-wBTC",
        address: "0x6c1f92e0828bc7d67161C6253D60f065529b7F74",
        icon: [USDTIcon, wbtcIcon],
        apy: 2.7,
        balance: "281 M",
        protocol: "Baryon",
      },
      "VIC-wBTC": {
        name: "VIC-wBTC",
        address: "0x7b5e1d27B59267933a322b9B1f76B3CD5c0Aa8d9",
        icon: [victionIcon, wbtcIcon],
        apy: 2.6,
        balance: "285 M",
        protocol: "Baryon",
      },

    },
    "lending pools": {
    },
    "liquid staking": {
    },
  },
};

export const rateList = {
  "ETH-KLAY/ETH-BTC": 1 / 0.00002,
  "ETH-BTC/ETH-KLAY": 0.00002,
  "ETH-KLAY/ETH-USDT": 0.2,
  "ETH-KLAY/ETH-USDC": 0.2,
  "ETH-USDT/ETH-KLAY": 1 / 0.2,
  "ETH-USDC/ETH-KLAY": 1 / 0.2,
  "ETH-USDT/ETH-USDC": 1,
  "ETH-USDC/ETH-USDT": 1,
  "ETH-BTC/ETH-USDT": 0.000027,
  "ETH-USDT/ETH-BTC": 1 / 0.000027,
  "ETH-BTC/ETH-USDC": 0.000027,
  "ETH-USDC/ETH-BTC": 1 / 0.000027,
  "USDT/ETH": 2000,
  "ETH/USDT": 1 / 2000,
  "USDC/ETH": 2000,
  "ETH/USDC": 1 / 2000,
  "USDC/BTC": 2000,
  "BTC/USDC": 1 / 2000,
  "KSP-KLAY/KOKOS-ETH": 65 / 10,
  "KOKOS-ETH/KSP-KLAY": 10 / 65,
  "wETH-USDC/KSP-KLAY": 0.4,
  "KSP-KLAY/wETH-USDC": 1 / 0.4,

  "USDC/VIC": 1 / 5,
  "USDC/USDT": 1 / 1,
  "USDC/WETH": 2000 / 1,
  "USDC/WBTC": 40000 / 1,
  "USDC/C98": 1 / 5,
  "USDC/USDT-VIC": 1 / 5,
  "USDC/USDC-VIC": 1 / 5,
  "USDC/C98-USDT": 1 / 5,
  "USDC/C98-USDC": 1 / 5,
  "USDC/C98-VIC": 1 / 10,
  "USDC/USDC-WETH": 2000 / 1,
  "USDC/USDT-WETH": 2000 / 1,
  "USDC/C98-WETH": 2000 / 1,
  "USDC/VIC-WETH": 2000 / 1,
  "USDC/USDC-WBTC": 40000 / 1,
  "USDC/USDT-WBTC": 40000 / 1,
  "USDC/C98-WBTC": 40000 / 1,
  "USDC/VIC-WBTC": 40000 / 1,
  "USDT/VIC": 1 / 5,
  "USDT/WETH": 2000 / 1,
  "USDT/WBTC": 40000 / 1,
  "USDT/C98": 1 / 5,
  "USDT/USDT-VIC": 1 / 5,
  "USDT/USDC-VIC": 1 / 5,
  "USDT/C98-USDT": 1 / 5,
  "USDT/C98-USDC": 1 / 5,
  "USDT/C98-VIC": 1 / 10,
  "USDT/USDC-WETH": 2000 / 1,
  "USDT/USDT-WETH": 2000 / 1,
  "USDT/C98-WETH": 2000 / 1,
  "USDT/VIC-WETH": 2000 / 1,
  "USDT/USDC-WBTC": 40000 / 1,
  "USDT/USDT-WBTC": 40000 / 1,
  "USDT/C98-WBTC": 40000 / 1,
  "USDT/VIC-WBTC": 40000 / 1,
  "C98/VIC": 1 / 5,
  "C98/WETH": 1 / 2000,
  "C98/WBTC": 1 / 40000,
  "C98/C98": 1 / 1,
  "C98/USDT-VIC": 1 / 5,
  "C98/USDC-VIC": 1 / 5,
  "C98/C98-USDT": 1 / 5,
  "C98/C98-USDC": 1 / 5,
  "C98/C98-VIC": 1 / 10,
  "C98/USDC-WETH": 1 / 2000,
  "C98/USDT-WETH": 1 / 2000,
  "C98/C98-WETH": 1 / 2000,
  "C98/VIC-WETH": 1 / 2000,
  "C98/USDC-WBTC": 1 / 40000,
  "C98/USDT-WBTC": 1 / 40000,
  "C98/C98-WBTC": 1 / 40000,
  "C98/VIC-WBTC": 1 / 40000,
  "VIC/WETH": 1 / 2000,
  "VIC/WBTC": 1 / 40000,
  "VIC/USDT-VIC": 1 / 5,
  "VIC/USDC-VIC": 1 / 5,
  "VIC/C98-USDT": 1 / 5,
  "VIC/C98-USDC": 1 / 5,
  "VIC/C98-VIC": 1 / 10,
  "VIC/USDC-WETH": 1 / 2000,
  "VIC/USDT-WETH": 1 / 2000,
  "VIC/C98-WETH": 1 / 2000,
  "VIC/VIC-WETH": 1 / 2000,
  "VIC/USDC-WBTC": 1 / 40000,
  "VIC/USDT-WBTC": 1 / 40000,
  "VIC/C98-WBTC": 1 / 40000,
  "VIC/VIC-WBTC": 1 / 40000,
};


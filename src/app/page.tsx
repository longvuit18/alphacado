import Image from 'next/image'
import landingpageBackground from '../../public/landingpageBackground.png'
import chainLogo from '../../public/klaytn.png'
import etherLogo from '../../public/ether-icon.png';
import klaytnLogo from '../../public/klaytn-icon.png';
import bnbChainLogo from '../../public/bnbchain-icon.png';
import polygonLogo from '../../public/polygon.png';
import arbitrumLogo from '../../public/arbitrum.png';
import optimismLogo from '../../public/optim.png';
import avalanche from '../../public/avalan.png';
import zksyncLogo from '../../public/zksync.png';
import baseLogo from '../../public/base.png';
import linearLogo from '../../public/linear.png';
import aleoLogo from '../../public/aleo.png';
import suiLogo from '../../public/sui.png';
import klaytn from '../../public/klaytn.png'
import logo from '@/assets/logo.png'
import Button from '@/components/common/button'
import Card from '@/components/common/card'
import './style.css'
import ChainLogo from '@/components/common/chain_logo'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='relative'>
      {/* Background  */}
      <div className='relative'>
        <div>
          <Image
            src={landingpageBackground}
            alt='Landing page background'
          />
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full z-10'>
          <div>
            <h2 className='text-large-typo text-background'>
              ONE CLICK TO
            </h2>
            <h2 className='text-large-typo text-background'>
              ACCESS DEFI WORLD
            </h2>
            <div className='flex justify-center items-center gap-3'>
              <h4 className='text-[#130D0D] text-[38px] '>on Klaytn</h4>
              <Image className='w-[40px] h-[40px]' src={klaytn} alt='Klaytn Logo' />
            </div>
          </div>
          <div className='mt-[43px] w-full flex justify-center'>
            <Link href={"/app/swap"} passHref legacyBehavior>
              <Button className='w-[334px]'>Enjoy Now</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute top-9 left-[135px] right-[135px] flex items-center justify-between z-2'>
        <div className='cursor-pointer'>
          <Image
            src={logo}
            alt='Logo'
            height={40}
          />
        </div>
        <div className='flex justify-center items-center'>
          <div className='text-[#142321] cursor-pointer'>Developers</div>
          <div className='text-[#142321] ml-6 cursor-pointer'>Community</div>
          <Link href={"/app/swap"} passHref legacyBehavior>
            <Button className='ml-9'>Launch App</Button>
          </Link>
        </div>
      </div>
      <div className='relative pb-[250px]'>

        {/* Left background decorator  */}
        <div
          className="absolute bottom-0 -z-10"
          style={{
            width: '600px',
            height: '1000px',
            zIndex: '-10',
            overflow: 'hidden',
            opacity: 0.5
          }}
        >
          <Image
            src="/left_bg_decorator.png"
            alt="Left Background Decorator"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* END Left background decorator  */}

        {/* Right background decorator  */}
        <div
          className="absolute bottom-[450px] right-0 -z-10"
          style={{
            width: '600px',
            height: '1000px',
            zIndex: '-10',
            overflow: 'hidden',
            opacity: 0.5
          }}
        >
          <Image
            src="/right_bg_decorator.png"
            alt="Right Background Decorator"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* END Right background decorator  */}

        <div className='absolute bottom-[950px] right-[600px] -z-10 bg-[#FFE47A] rounded-full w-[106px] h-[106px]'>
        </div>

        <div className='flex flex-col justify-center items-center my-32'>
          <div className='w-[971px]'>
            <div className='flex flex-col justify-center items-center'>
              <h4 className='font-semibold text-[38px] leading-10 text-center'>Elevate your Web3 journey with One-click Access to Any asset from Any blockchain</h4>
              {/* <h4 className='font-semibold text-[38px] leading-10'>clickaccess to any asset</h4> */}
              <p className='leading-5 font-normal text-[#4A5654] text-center text-[14px] mt-2'>Fed up with managing numerous DeFi transactions? Streamline your experience with Alphacado—consolidate all your DeFi actions into a single, gasless transaction.</p>
            </div>
            <div className='flex gap-6 mt-[66px]'>
              <Card title='Gasless' content='Experience gasless swaps and zaps without the worry of costs for failed transactions, ensuring a seamless and hassle-free process.' className='w-full bg-[#F1FFF4]' />
              <Card title='Cross-chain Interoperability' content='Experience cross-chain interoperability with support for the most popular and newest EVM chains, continually expanding to enhance accessibility.' className='w-full bg-[#F1FFF4]' />
              <Card title='Zaps' content='Effortlessly bundle multi-step actions into a single multicall transaction, seamlessly swapping interest-bearing, liquidity pool, vault, or any type of token for another.' className='w-full bg-[#F1FFF4]' />
            </div>
            <div className='mt-40'>
              <div className='flex'>
                <h4 className='text-[#2E3B39] text-[48px] leading-10 font-semibold min-w-[450px]'>Supported chains</h4>
                <p className='text-[#2E3B39] text-[16px] leading-6 font-normal'>Alphacado consolidates liquidity from both liquid and non-liquid assets across Any EVM and non-EVM networks. Effortlessly swap any asset and transfer liquidity across diverse blockchains, unlocking endless possibilities in the world of DeFi.</p>
              </div>
              <div className='grid grid-cols-4 mt-16'>
                <ChainLogo logo={etherLogo} className='bg-[#F1FFF4]' />
                <ChainLogo logo={klaytnLogo} className='bg-[#D4FEDD]' />
                <ChainLogo logo={bnbChainLogo} className='bg-[#F1FFF4]' />
                <ChainLogo logo={polygonLogo} className='bg-[#D4FEDD]' />
                <ChainLogo logo={arbitrumLogo} className='bg-[#D4FEDD]' />
                <ChainLogo logo={optimismLogo} className='bg-[#F1FFF4]' />
                <ChainLogo logo={avalanche} className='bg-[#D4FEDD]' />
                <ChainLogo logo={zksyncLogo} className='bg-[#F1FFF4]' />
                <ChainLogo logo={baseLogo} className='bg-[#F1FFF4] opacity-60' imageClassName='w-[75%]' commingSoon />
                <ChainLogo logo={linearLogo} className='bg-[#D4FEDD] opacity-60' imageClassName='w-[75%]' commingSoon />
                <ChainLogo logo={aleoLogo} className='bg-[#F1FFF4] opacity-60' imageClassName='w-[60%]' commingSoon />
                <ChainLogo logo={suiLogo} className='bg-[#D4FEDD] opacity-60' imageClassName='w-[50%]' commingSoon />
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

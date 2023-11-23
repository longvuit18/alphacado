import Image from 'next/image'
import landingpageBackground from '../../public/landingpageBackground.png'
import chainLogo from '../../public/klaytn.png'
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
            <Button className='w-[334px]'>Enjoy Now</Button>
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
              <h4 className='font-semibold text-[38px] leading-10'>Supercharge your Web3 experience with one</h4>
              <h4 className='font-semibold text-[38px] leading-10'>clickaccess to any asset</h4>
              <p className='leading-5 font-normal text-[#4A5654] text-center text-[14px] mt-2'>Tired of juggling multiple DeFi transactions? Simplify your experience with Portals – bundle all your DeFi actions into one gasless transaction.</p>
            </div>
            <div className='flex gap-6 mt-[66px]'>
              <Card title='Gasless' content='Gasless swaps and zaps with no cost for failed trainsactions means you never have to worry about gas or stuck transactions again.' className='w-full bg-[#F1FFF4]' />
              <Card title='Multichain' content='Multichain support for for the most popular and newest EVM chains, with frequent additions' className='w-full bg-[#F1FFF4]' />
              <Card title='Zaps' content='Bundle multi-step actions into a single multicall transaction that seamlessly swaps interest bearing, liquidity pool, vault, or any kind of token for any other' className='w-full bg-[#F1FFF4]' />
            </div>
            <div className='mt-40'>
              <h4 className='text-center text-[#2E3B39] text-[38px] leading-10 font-semibold'>With support for the most popular<br />EVM chains</h4>
              <div className='grid grid-cols-4 gap-6 mt-16'>
                <ChainLogo logo={chainLogo} borderRight borderBottom imageClassName='w-full' />
                <ChainLogo logo={chainLogo} borderLeft borderRight borderBottom imageClassName='w-full' />
                <ChainLogo logo={chainLogo} borderLeft borderRight borderBottom imageClassName='w-full' />
                <ChainLogo logo={chainLogo} borderLeft borderBottom imageClassName='w-full' />
                <ChainLogo logo={chainLogo} borderRight borderTop imageClassName='w-full' />
                <ChainLogo logo={chainLogo} borderLeft borderRight borderTop imageClassName='w-full' />
                <ChainLogo logo={chainLogo} borderLeft borderRight borderTop imageClassName='w-full' />
                <ChainLogo logo={chainLogo} borderLeft borderTop imageClassName='w-full' />
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

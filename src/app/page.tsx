import { Header } from '@/components/header'
import Image from 'next/image'
import landingpageBackground from '../../public/landingpageBackground.png'
import chainLogo from '../../public/klaytn.png'
import facebook from '../../public/facebook.png'
import linkedIn from '../../public/linkedIn.png'
import instagram from '../../public/instagram.png'
import logo from '../../public/logo.svg'
import Button from '@/components/common/button'
import Card from '@/components/common/card'
import './style.css'
import ChainLogo from '@/components/common/chainLogo'

export default function Home() {
  return (
    <main>
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
              ONE CLICK
            </h2>
            <h5 className='text-small-typo text-background'>
              TO
            </h5>
            <h2 className='text-large-typo text-background'>
              ACCESS DEFI WORLD
            </h2>
          </div>
          <div className='mt-[43px] w-full flex justify-center'>
            <Button className='w-[334px]' content='Enjoy Now' />
          </div>
        </div>
      </div>
      <div className='absolute top-9 left-[135px] right-[135px] flex items-center justify-between z-2'>
        <div className='cursor-pointer'>
          <Image 
            src={logo}
            alt='Logo'
          />
        </div>
        <div className='flex justify-center items-center'>
          <div className='text-[#142321] cursor-pointer'>Developers</div>
          <div className='text-[#142321] ml-6 cursor-pointer'>Community</div>
          <Button className='ml-9' content='Launch App' />
        </div>
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
            <h4 className='text-center text-[#2E3B39] text-[38px] leading-10 font-semibold'>With support for the most popular<br/>EVM chains</h4>
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

      <div className='mt-[300px]'>
        <div className='px-[135px]'>
          <div className='pb-4 flex justify-between items-center border-bottom'>
            <div>
              <Image 
                src={logo}
                alt='Logo'
              />
              <p className='text-[#2E3B39] text-[13px] ml-10'>One Click To Access DeFi World</p>
            </div>
            <div className='flex gap-11'>
              <div className='w-6 h-6'>
                <Image src={linkedIn} alt='Linked In' />
              </div>
              <div className='w-6 h-6 flex justify-center items-center'>
                <Image className='h-full w-[50%]' src={facebook} alt='Facebook' />
              </div>
              <div className='w-6 h-6'>
                <Image src={instagram} alt='Instagram' />
              </div>
            </div>
          </div>
          <div className='pt-4 mb-6 flex justify-between'>
            <div>
              <p className='text-[#202E2C]'>Alphacado ©. All rights reserved.</p>
            </div>
            <div className='flex gap-5'>
              <div className='cursor-pointer'>
                <p className='text-[#202E2C]'>Term of Service</p>
              </div>
              <div className='w-[1px] h-6 bg-[#000]'></div>
              <div className='cursor-pointer'>
                <p className='text-[#202E2C]'>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

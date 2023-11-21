import Image from "next/image"
import logo from '@/assets/logo.png'
import facebook from '@/assets/facebook.png'
import instagram from '@/assets/instagram.png'
import linkedIn from '@/assets/linkedIn.png'

export const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className='pb-4 flex justify-between items-center border-bottom'>
        <div>
          <Image
            src={logo}
            alt='Logo'
            height={40}
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
  )
}
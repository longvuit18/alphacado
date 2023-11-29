import { Header } from '@/components/header'
import { Web3Provider } from '@/context/web3_provider'
import type { Metadata } from 'next'
import Image from 'next/image'


export const metadata: Metadata = {
  title: 'Alphacado',
  description: 'Alphacado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Web3Provider>
      <div className='relative h-[1000px]'>
        {children}
        <div
          className="absolute bottom-[400px] -z-10"
          style={{
            width: '200px',
            height: '600px',
            zIndex: '-10',
            overflow: 'hidden',
          }}
        >
          <Image
            className='w-1'
            src="/ber3.png"
            alt="Background Decorator"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className="absolute bottom-[600px] right-0 -z-10"
          style={{
            width: '200px',
            height: '600px',
            zIndex: '-10',
            overflow: 'hidden',
          }}
        >
          <Image
            className='w-1'
            src="/ber4.png"
            alt="Background Decorator"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className="absolute bottom-0 right-[60%] left-[40%] -z-10"
          style={{
            width: '600px',
            height: '200px',
            zIndex: '-10',
            overflow: 'hidden',
          }}
        >
          <Image
            className='w-1'
            src="/ber5.png"
            alt="Background Decorator"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </Web3Provider>
  )
}

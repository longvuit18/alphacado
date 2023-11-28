import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer'

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

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
    <html lang="en">
      <body className={kanit.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}

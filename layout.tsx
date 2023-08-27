import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navg from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '0xB | Main Website',
  description: 'I spent 4 days for this 😭',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col gap-12 bg-zinc-950 lg:overflow-hidden sm:overflow-x-hidden justify-center align-middle`} >
        <Navg/>
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Sidebar from '@/app/components/Sidebar'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Rod - Freelance Web Developer',
  description: 'Portfolio of John Rodney Bargayo, a freelance web developer specializing in WordPress, Wix, Shopify, Framer, Beaver Builder, and Divi.',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.className} antialiased bg-slate-900 m-0 p-0`}>
        <Sidebar />
        <main className="transition-all duration-300">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}

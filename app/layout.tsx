import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components'
import './globals.scss'
import './demo.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web animations',
  description: 'Learn how to animate on the web',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

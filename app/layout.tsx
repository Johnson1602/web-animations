import type { Metadata } from 'next'
import { Header } from '@/components'
import './globals.scss'

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

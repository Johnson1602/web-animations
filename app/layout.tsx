import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import Head from 'next/head'

// Inside your component:
<Head>
  <title>ATC24 | US Airforce</title>
  <meta name="description" content="Experience authentic military aviation roleplay..." />
</Head>

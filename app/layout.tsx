import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loopstudios landing page',
  description: 'THE LEADER IN INTTERACTIVE VR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&family=Montserrat&display=swap" rel="stylesheet" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}

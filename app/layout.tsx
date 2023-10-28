import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'DevFusion',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#282b30] '>
        {children}
      </body>
    </html>
  )
}
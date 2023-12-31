import { Footer } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'
import { Rubik } from 'next/font/google'
 
const rubik = Rubik({
  weight: '400',
  subsets: ['latin'],
})
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'weather',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}
      <Footer/>
      </body>
    </html>
  )
}

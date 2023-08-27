'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <html lang="en">
        <body className={inter.className}>
          <div className="bg-white flex flex-col min-h-screen">
              <Header/>

              <div className={`flex-grow px-6 ${pathname === '/' ? 'items-center' : ''} flex`}>
                  {children}
              </div>

              <div className="mt-auto">
                  <Footer isHomePage={pathname === '/'} />
              </div>
          </div>
        </body>
    </html>
  )
}

import React, { ComponentProps, FC } from 'react'
import { Inter } from 'next/font/google'
import cn from 'clsx'

import Navbar from './Navbar'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

const Layout: FC<ComponentProps<'main'>> = ({ children }) => {
  return (
    <main className={cn(inter.className, 'bg-coral-50')}>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout

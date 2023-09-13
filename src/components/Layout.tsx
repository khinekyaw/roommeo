import React, { ReactNode } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

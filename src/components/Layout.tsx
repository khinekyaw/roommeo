import React, { ReactNode } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import { useTranslations } from 'next-intl'

const Layout = ({ children }: { children: ReactNode }) => {
  const t = useTranslations('navigation')

  return (
    <>
      <Navbar
        home={t('home')}
        rooms={t('rooms')}
        login={t('login')}
        signUp={t('register')}
      />
      <main className='bg-coral-50'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

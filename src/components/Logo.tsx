import Image from 'next/image'
import React from 'react'

import LogoImage from '@/assets/images/logo.svg'

const Logo = () => {
  return (
    <div className='flex gap-1 items-end'>
      <Image src={LogoImage} alt='Logo' className='w-8' />
      <div className='text-coral-500 text-lg font-bold'>Roomero</div>
    </div>
  )
}

export default Logo

import Image from 'next/image'
import React from 'react'

import LogoImage from '@/assets/images/logo.svg'

const Logo = () => {
  return (
    <div className='flex gap-1 items-end'>
      <Image src={LogoImage} alt='Logo' className='w-6' />
      <span className='text-coral-400 font-bold'>Roomeroo</span>
    </div>
  )
}

export default Logo

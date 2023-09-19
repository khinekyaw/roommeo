import React from 'react'
import HomeFilterBox from './HomeFilterBox'
import Image from 'next/image'

import Section from './Section'

import HomeBannerImage from '@/assets/images/banner_house.png'

const Banner = () => {
  return (
    <Section>
      <div className='flex pt-14 pb-14 gap-[5%]'>
        <div className='flex-1'>
          <h1 className='text-5xl/normal font-bold mb-4'>
            Find a perfect property Where you'll love to live
          </h1>
          <p className='text-lg text-gray-500 mb-10'>
            We helps businesses customize, automate and scale up their ad
            production and delivery.
          </p>
          <HomeFilterBox />
        </div>
        <div className='flex-1'>
          <Image src={HomeBannerImage} className='w-full' alt='Home' />
        </div>
      </div>
    </Section>
  )
}

export default Banner

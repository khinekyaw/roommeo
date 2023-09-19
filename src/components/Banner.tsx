import React from 'react'
import HomeFilterBox from './HomeFilterBox'
import Image from 'next/image'

import Section from './Section'

import HomeBannerImage from '@/assets/images/banner_house.png'

const Banner = () => {
  return (
    <Section>
      <div className='flex pt-14 pb-14 gap-[5%] lg:flex-row flex-col'>
        <div className='flex-1 lg:mb-0 mb-5'>
          <h1 className='text-3xl/normal lg:text-5xl/normal font-bold mb-4'>
            Find a perfect property Where you&apos;ll love to live
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

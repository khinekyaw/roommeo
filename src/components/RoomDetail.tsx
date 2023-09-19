import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card'
import { Image as NextUiImage } from '@nextui-org/image'
import { Link as NextUiLink } from '@nextui-org/link'
import { Divider } from '@nextui-org/divider'

const RoomDetail = () => {
  return (
    <Card
      className='border border-gray-200 p-3 lg:p-5'
      classNames={{
        header: 'pb-0',
      }}
      shadow='none'
    >
      <CardHeader className='mb-5'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-xl lg:text-3xl/normal mb-3'>
            Trovilla Plan in Sereno Canyon - Estate Collection by Toll Brothers
          </h1>
          <h2 className='font-semibold text-lg'>
            2861 62nd Ave, Oakland, CA 94605
          </h2>
        </div>
      </CardHeader>
      <CardFooter>
        <div>
          <div>
            A slider is great way to display a slideshow featuring images or
            videos, usually on your homepage.Adding sliders to your site is no
            longer difficult. You don’t have to know coding anymore. Just use a
            slider widget and it will automatically insert the slider on your
            web page.So, the Elementor slider would be a great tool to work with
            when building a WordPress site.
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default RoomDetail

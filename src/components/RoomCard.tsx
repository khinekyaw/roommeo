import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next-intl/link'

import { Image as NextUiImage } from '@nextui-org/image'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter } from '@nextui-org/card'

import { MdLocationPin } from 'react-icons/md'
import {
  PiShowerFill,
  PiBedFill,
  PiHouseFill,
  PiGenderIntersexBold,
} from 'react-icons/pi'
import { numberWithCommas } from '@/lib/utils'

export interface RoomCardProps {
  id: string
  slug: string
  title: string
  location: string
  price: number
  image: string
}

const RoomCard: FC<RoomCardProps> = ({
  slug,
  title,
  location,
  price,
  image,
}) => {
  return (
    <Card shadow='none' className='border-1 border-gray-200'>
      <CardBody className='overflow-visible p-0 w-full aspect-[2/1.4]'>
        <NextUiImage
          as={Image}
          radius='none'
          removeWrapper={true}
          width={200}
          height={200}
          alt={title}
          className='w-full object-cover h-full'
          src={image}
          priority
        />
      </CardBody>
      <CardFooter className='p-5'>
        <div className='flex flex-col gap-5 w-full'>
          <div className='w-full flex items-center gap-x-2'>
            <MdLocationPin className='text-2xl' />
            <p className='font-semibold'>{location}</p>
          </div>
          <div className='grid gap-4 grid-cols-2 grid-rows-2 text-gray-700'>
            <div className='flex items-center gap-2'>
              <span className='text-lg'>
                <PiHouseFill />
              </span>
              <p>House</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-lg'>
                <PiGenderIntersexBold />
              </span>
              <p>Any</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-lg'>
                <PiShowerFill />
              </span>
              <p>2 Bath</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-lg'>
                <PiBedFill />
              </span>
              <p>1 Bed Room</p>
            </div>
          </div>
          <div className='flex w-full justify-between items-center'>
            <Link href={`/rooms/${slug}`}>
              <Button color='secondary'>View Detail</Button>
            </Link>
            <p className='text-lg lg:text-xl font-bold'>
              Ks{numberWithCommas(price)}
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default RoomCard

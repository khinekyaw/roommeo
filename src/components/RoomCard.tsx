import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter } from '@nextui-org/card'

import { MdLocationPin } from 'react-icons/md'

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
        <Image
          width={200}
          height={200}
          alt={title}
          className='w-full object-cover h-full'
          src={image}
          priority
        />
      </CardBody>
      <CardFooter className='p-5'>
        <div className='w-full'>
          <div className='mb-4'>{title}</div>
          <div className='w-full flex items-center gap-x-2 mb-6'>
            <MdLocationPin className='text-2xl' />
            <p>{location}</p>
          </div>
          <div className='flex w-full justify-between items-center'>
            <Button as={Link} href={`/rooms/${slug}`} color='secondary'>
              View Detail
            </Button>
            <p className='text-xl font-bold'>Ks{price}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default RoomCard

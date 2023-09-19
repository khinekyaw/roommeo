import React from 'react'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

import RoomCard, { RoomCardProps } from './RoomCard'
import { IoArrowForward } from 'react-icons/io5'

import { getAll } from '@/lib/fetch/rooms'
import Section from './Section'

const FeaturedRooms = async () => {
  const rooms: RoomCardProps[] = await getAll()

  return (
    <Section>
      <div className='pt-16 mb-20'>
        <div className='flex justify-between mb-8'>
          <h5 className='font-bold text-xl lg:text-3xl'>Featured Rooms</h5>
          <Button
            as={Link}
            variant='light'
            color='primary'
            endContent={<IoArrowForward />}
            href='/rooms?filter=featured'
          >
            View All
          </Button>
        </div>
        <div className='grid lg:grid-cols-3 gap-6'>
          {rooms.slice(0, 3).map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default FeaturedRooms

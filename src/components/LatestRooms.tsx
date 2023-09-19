import React from 'react'
import Link from 'next/link'

import RoomCard, { RoomCardProps } from './RoomCard'
import { getAll } from '@/lib/fetch/rooms'
import { Button } from '@nextui-org/button'
import { IoArrowForward } from 'react-icons/io5'

const LatestRooms = async () => {
  const rooms: RoomCardProps[] = await getAll()

  return (
    <div>
      <div className='flex justify-between'>
        <h5 className='font-bold text-lg lg:text-2xl mb-8'>
          Latest Room Listings
        </h5>
        <Button
          as={Link}
          variant='light'
          color='primary'
          endContent={<IoArrowForward />}
          href='/rooms?filter=latest'
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
  )
}

export default LatestRooms

import React from 'react'

import RoomCard, { RoomCardProps } from './RoomCard'

import { getRooms } from '@/lib/fetch/rooms'
import LoosePagination from './LoosePagination'

const RoomList = async ({ searchParams }: { searchParams: any }) => {
  const rooms: RoomCardProps[] = await getRooms(searchParams)

  return (
    <>
      <div className='grid lg:grid-cols-3 gap-6 mb-12'>
        {rooms.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
      <LoosePagination />
    </>
  )
}

export default RoomList

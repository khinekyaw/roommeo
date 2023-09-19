import React from 'react'

import RoomCard, { RoomCardProps } from './RoomCard'

import { getAll } from '@/lib/fetch/rooms'
import { buildQueryString } from '@/lib/utils'

const RoomList = async ({ searchParams }: { searchParams: any }) => {
  const rooms: RoomCardProps[] = await getAll(buildQueryString(searchParams))

  return (
    <div className='grid lg:grid-cols-3 gap-6'>
      {rooms.map((room) => (
        <RoomCard key={room.id} {...room} />
      ))}
    </div>
  )
}

export default RoomList

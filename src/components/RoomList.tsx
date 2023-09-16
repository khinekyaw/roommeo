import React from 'react'

import RoomCard, { RoomCardProps } from './RoomCard'

import { getAll } from '@/lib/fetch/rooms'

const RoomList = async (props: any) => {
  const rooms: RoomCardProps[] = await getAll()

  return (
    <div className='grid grid-cols-3 gap-6'>
      {rooms.map((room) => (
        <RoomCard key={room.id} {...room} />
      ))}
    </div>
  )
}

export default RoomList

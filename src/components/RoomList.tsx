import React from 'react'

import RoomCard, { RoomCardProps } from './RoomCard'

import { getAll } from '@/lib/fetch/rooms'

const RoomList = async (props: any) =>
  // { rooms }: { rooms: RoomCardProps[] }
  {
    const rooms: RoomCardProps[] = await getAll()
    console.log('Refatch Roomlist:', props)

    return (
      <div className='grid grid-cols-3 gap-6'>
        {rooms.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
    )
  }

export default RoomList

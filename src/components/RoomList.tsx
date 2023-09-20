import React from 'react'

import RoomCard, { RoomCardProps } from './RoomCard'
import { Pagination } from '@nextui-org/pagination'

import { getAll } from '@/lib/fetch/rooms'
import { buildQueryString } from '@/lib/utils'

const RoomList = async ({ searchParams }: { searchParams: any }) => {
  const rooms: RoomCardProps[] = await getAll(buildQueryString(searchParams))

  return (
    <>
      <div className='grid lg:grid-cols-3 gap-6 mb-12'>
        {rooms.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
      <Pagination
        variant='bordered'
        color='secondary'
        showControls
        total={10}
        initialPage={1}
      />
    </>
  )
}

export default RoomList

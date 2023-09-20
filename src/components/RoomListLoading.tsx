import React from 'react'
import RoomCardSkeleton from './RoomCardSkeleton'

const RoomListLoading = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-6'>
      {Array.from(Array(6).keys()).map((id) => (
        <RoomCardSkeleton key={id} />
      ))}
    </div>
  )
}

export default RoomListLoading

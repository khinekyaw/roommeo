import React from 'react'

import { Pagination } from '@nextui-org/pagination'

import RoomFilter from '@/components/RoomFilter'
import Section from '@/components/Section'
import RoomCard, { RoomCardProps } from '@/components/RoomCard'

const data: RoomCardProps[] = [
  {
    id: '1',
    slug: 'room-1',
    title: 'A room near downtown',
    location: '123/abc Hlaing, Yangon',
    price: 200000,
    image: '/images/1.webp',
  },
  {
    id: '2',
    slug: 'room-2',
    title: 'A room near downtown',
    location: '123/abc Hlaing, Yangon',
    price: 200000,
    image: '/images/2.webp',
  },
  {
    id: '3',
    slug: 'room-3',
    title: 'A room near downtown',
    location: '123/abc Hlaing, Yangon',
    price: 200000,
    image: '/images/3.webp',
  },
]

const Rooms = () => {
  return (
    <Section>
      <div className='pt-12 pb-12 min-h-screen'>
        <h1 className='font-bold text-4xl mb-4'>Find a Room</h1>

        <div className='mb-10'>
          <RoomFilter />
        </div>

        <div className='grid grid-cols-3 gap-6 mb-12'>
          {data.map((room) => (
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
      </div>
    </Section>
  )
}

export default Rooms

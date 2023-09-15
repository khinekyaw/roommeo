import React, { Suspense } from 'react'

import { Pagination } from '@nextui-org/pagination'

import RoomFilter from '@/components/RoomFilter'
import Section from '@/components/Section'

import RoomList from '@/components/RoomList'

const Rooms = () => {
  return (
    <Section>
      <div className='pt-12 pb-12 min-h-screen'>
        <h1 className='font-bold text-4xl mb-4'>Find a Room</h1>

        <div className='mb-10'>
          <RoomFilter />
        </div>

        <div className='mb-12'>
          <Suspense fallback={<p>Loading...</p>}>
            <RoomList />
          </Suspense>
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

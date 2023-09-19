import React, { Suspense } from 'react'

import { Pagination } from '@nextui-org/pagination'

import RoomFilter from '@/components/RoomFilter'
import Section from '@/components/Section'

import RoomList from '@/components/RoomList'

const Rooms = ({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) => {
  return (
    <Section>
      <div className='pt-12 pb-12 min-h-screen'>
        <h1 className='font-bold text-2xl lg:text-4xl mb-7'>Find Rooms</h1>

        <div className='mb-12'>
          <RoomFilter searchParams={searchParams} />
        </div>

        <div className='mb-12'>
          <Suspense fallback={<p>Loading...</p>}>
            <RoomList searchParams={searchParams} />
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

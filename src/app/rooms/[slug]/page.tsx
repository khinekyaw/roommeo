import React from 'react'

import Section from '@/components/Section'
import GalleryPreview from '@/components/GalleryPreview'
import RoomSidebar from '@/components/RoomSidebar'
import RoomDetail from '@/components/RoomDetail'
import Amenities from '@/components/Amenities'
import LatestRooms from '@/components/LatestRooms'

interface Props {
  params: { slug: string }
}

const RoomDetailPage = ({ params: { slug } }: Props) => {
  return (
    <Section>
      <div className='py-8'>
        <div className='mb-8'>
          <GalleryPreview />
        </div>
        <div className='flex gap-7 mb-12'>
          <div className='flex-1 flex flex-col gap-7'>
            <RoomDetail />
            <Amenities />
          </div>
          <aside className='min-w-[15rem] flex-[0.5]'>
            <RoomSidebar />
          </aside>
        </div>
        <LatestRooms />
      </div>
    </Section>
  )
}

export default RoomDetailPage

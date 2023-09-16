import React, { FC } from 'react'

import Section from '@/components/Section'
import GalleryPreview from '@/components/GalleryPreview'
import PhotoView from '@/components/PhotoView'

interface RoomDetailProps {
  params: { slug: string }
}

const RoomDetail: FC<RoomDetailProps> = ({ params: { slug } }) => {
  return (
    <Section>
      <div className='py-8'>
        <GalleryPreview />
      </div>
      <div>RoomDetail - {slug}</div>
    </Section>
  )
}

export default RoomDetail

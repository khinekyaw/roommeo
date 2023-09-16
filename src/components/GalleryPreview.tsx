import Image from 'next/image'
import React from 'react'
import { Image as NextUiImage } from '@nextui-org/image'

import cn from 'clsx'
import PhotoGrid, { Photo } from './PhotoGrid'

const photos: Photo[] = [
  {
    id: '1',
    src: '/images/1.webp',
  },
  {
    id: '2',
    src: '/images/2.webp',
  },
  {
    id: '3',
    src: '/images/3.webp',
  },
]

const GalleryPreview = () => {
  const photoLength = photos.length

  return (
    <div className='w-full aspect-[2.4/1] relative'>
      <div className='relative grid gap-5 w-full h-full grid-cols-12 grid-rows-2'>
        {photos.slice(0, 3).map((photo, index) => (
          <div
            key={photo.id}
            className={cn(
              index === 0 ? 'row-span-full' : 'col-span-4',
              photoLength === 1 && index === 0 ? 'col-span-full' : 'col-span-8',
              photoLength === 2 && index > 0 && 'row-span-full'
            )}
          >
            <NextUiImage
              radius='lg'
              as={Image}
              src={photo.src}
              alt=''
              width={1000}
              height={800}
              removeWrapper={true}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
      {photoLength > 1 ? (
        <div className='absolute right-3 bottom-3 z-10'>
          <PhotoGrid photos={photos} />
        </div>
      ) : null}
    </div>
  )
}

export default GalleryPreview

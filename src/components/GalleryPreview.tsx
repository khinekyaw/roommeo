import Image from 'next/image'
import React from 'react'
import { Image as NextUiImage } from '@nextui-org/image'

import cn from 'clsx'
import Gallery, { Photo } from './Gallery'

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
  {
    id: '4',
    src: '/images/4.webp',
  },
  {
    id: '5',
    src: '/images/1.webp',
  },
  {
    id: '6',
    src: '/images/2.webp',
  },
]

const GalleryPreview = () => {
  const photoLength = photos.length

  return (
    <div className='w-full aspect-square lg:aspect-[2.4/1] relative'>
      <div className='relative grid gap-3 lg:gap-5 w-full h-full grid-cols-12 grid-rows-2'>
        {photos.slice(0, 3).map((photo, index) => (
          <div
            key={photo.id}
            className={cn(
              index === 0
                ? photoLength > 1
                  ? 'lg:row-span-full row-span-1 lg:col-span-8 col-span-12'
                  : 'row-span-full lg:col-span-12'
                : null,
              index > 0 && 'lg:col-span-4 col-span-6 row-span-1',
              index > 0 && photoLength === 2 && 'lg:row-span-full'
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
          <Gallery photos={photos} />
        </div>
      ) : null}
    </div>
  )
}

export default GalleryPreview

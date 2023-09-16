'use client'
import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { IoClose } from 'react-icons/io5'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { GALLERY } from '@/lib/constants'

export interface Photo {
  id: string
  src: string
}

const PhotoView = ({ photos }: { photos: Photo[] }) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const modal = searchParams.get('modal') || ''
  const id = searchParams.get('modalitem') || ''
  const modelPath = `${pathname}?modal=${GALLERY}`

  const onClose = () => {
    router.push(modelPath)
  }

  return (
    <Lightbox
      index={parseInt(id)}
      open={Boolean(modal && id)}
      close={onClose}
      slides={photos}
      className='z-[990]'
      toolbar={{
        buttons: [
          <Button
            key='close-btn'
            isIconOnly
            variant='solid'
            color='secondary'
            aria-label='Close photo'
            className='text-2xl'
            onPress={onClose}
          >
            <IoClose />
          </Button>,
        ],
      }}
      on={{
        view: ({ index }) => {
          // console.log(index)
          router.replace(`${modelPath}&modalitem=${index}`)
        },
      }}
    />
  )
}

export default PhotoView

'use client'
import React from 'react'
import { Button } from '@nextui-org/button'
import { IoClose } from 'react-icons/io5'
import { useQueryState } from 'next-usequerystate'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export interface Photo {
  id: string
  src: string
}

const PhotoView = ({ photos }: { photos: Photo[] }) => {
  const [modal, setModal] = useQueryState('modal')
  const [modalItem, setModalItem] = useQueryState('modalitem')

  return (
    <Lightbox
      index={modalItem ? parseInt(modalItem) : 0}
      open={Boolean(modal && modalItem)}
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
            className='text-xl'
            onPress={() => setModalItem(null)}
          >
            <IoClose />
          </Button>,
        ],
      }}
      on={{
        view: ({ index }) => {
          setModalItem(`${index}`)
        },
      }}
    />
  )
}

export default PhotoView

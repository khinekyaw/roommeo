'use client'
import React, { useEffect } from 'react'
import { Button } from '@nextui-org/button'

import { Modal, ModalContent, ModalBody } from '@nextui-org/modal'
import { useQueryState } from 'next-usequerystate'
import PhotoAlbum from 'react-photo-album'
import { TbGridDots } from 'react-icons/tb'

import NextJsImage from './next/NextJsImage'
import { GALLERY } from '@/lib/constants'
import Section from './Section'
import PhotoView from './PhotoView'
import { setScroll } from '@/lib/utils'

export interface Photo {
  id: string
  src: string
}

const Gallery = ({ photos }: { photos: Photo[] }) => {
  const [modal, setModal] = useQueryState('modal')
  const [modalItem, setModalItem] = useQueryState('modalitem')

  useEffect(() => {
    setScroll(modal ? 'hidden' : 'unset')
  }, [modal])

  const alblumPhotos = photos.map((photo) => ({
    ...photo,
    width: 400,
    height: 300,
  }))

  return (
    <div>
      <Button
        variant='faded'
        size='sm'
        onPress={() => setModal(GALLERY)}
        startContent={<TbGridDots />}
      >
        Show all photos
      </Button>

      <Modal
        size='full'
        scrollBehavior='inside'
        isOpen={modal === GALLERY}
        isDismissable={false}
        onClose={() => {
          setModal(null)
        }}
      >
        <ModalContent className='min-h-screen'>
          {(onClose) => (
            <>
              <ModalBody className='py-20'>
                <Section>
                  <PhotoAlbum
                    layout='rows'
                    photos={alblumPhotos}
                    renderPhoto={NextJsImage}
                    defaultContainerWidth={1200}
                    sizes={{ size: 'calc(100vw - 240px)' }}
                    onClick={({ index }) => setModalItem(`${index}`)}
                  />
                </Section>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <PhotoView photos={photos} />
    </div>
  )
}

export default Gallery

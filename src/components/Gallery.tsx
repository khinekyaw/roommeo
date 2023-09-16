'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@nextui-org/button'

import PhotoAlbum from 'react-photo-album'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal'
import { TbGridDots } from 'react-icons/tb'

import NextJsImage from './next/NextJsImage'
import { GALLERY } from '@/lib/constants'
import Section from './Section'
import PhotoView from './PhotoView'

export interface Photo {
  id: string
  src: string
}

const Gallery = ({ photos }: { photos: Photo[] }) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const modal = searchParams.get('modal')
  const modalPath = `${pathname}?modal=${GALLERY}`

  const alblumPhotos = photos.map((photo) => ({
    ...photo,
    width: 400,
    height: 300,
  }))

  return (
    <div>
      <Button
        as={Link}
        variant='faded'
        size='sm'
        href={modalPath}
        startContent={<TbGridDots />}
      >
        Show all photos
      </Button>

      <Modal
        size='full'
        isOpen={modal === GALLERY}
        isDismissable={false}
        onClose={() => {
          // console.log('close whole model')
          router.push(`${pathname}`)
        }}
      >
        <ModalContent>
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
                    onClick={({ index }) =>
                      router.push(`${modalPath}&modalitem=${index}`)
                    }
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

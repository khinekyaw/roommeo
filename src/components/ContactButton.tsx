'use client'
import React from 'react'

import { Button } from '@nextui-org/button'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal'

const ContactButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button onPress={onOpen} color='secondary'>
        Contact Now
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Contact</ModalHeader>
              <ModalBody>
                <h3 className='font-bold'>Email</h3>
                <a className='mb-4' href='mailto:info@roommeo.com'>
                  info@roommeo.com
                </a>
                <h3 className='font-bold'>Phone</h3>
                <a href='tel:+95-987654321'>+95-987654321</a>
              </ModalBody>
              <ModalFooter>
                <Button color='secondary' onPress={onClose}>
                  Close
                </Button>
                {/* <Button color='primary' onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ContactButton

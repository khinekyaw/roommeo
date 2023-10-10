import React from 'react'

import { Card } from '@nextui-org/card'

import ContactButton from './ContactButton'

const RoomSidebar = () => {
  return (
    <Card className='border border-gray-200 p-5' shadow='none'>
      <div className='mb-5'>
        <h3 className='font-bold text-2xl'>Ks 200,000</h3>
        <span>per month</span>
      </div>
      <ContactButton />
    </Card>
  )
}

export default RoomSidebar

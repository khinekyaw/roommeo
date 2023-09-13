import React from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'

const RoomFilter = () => {
  return (
    <div className='flex justify-center items-center gap-x-4 max-w-sm'>
      <Input
        size='sm'
        variant='bordered'
        type='text'
        label='Enter your address'
      />
      <Button color='secondary'>Search</Button>
    </div>
  )
}

export default RoomFilter

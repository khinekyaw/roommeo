'use client'
import React, { useState } from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation'

const RoomFilter = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleFilter = () => {
    router.push(`/rooms?search=${search}`)
  }

  return (
    <div className='flex justify-center items-center gap-x-4 max-w-sm'>
      <Input
        size='sm'
        variant='bordered'
        type='text'
        label='Enter your address'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button color='secondary' onClick={handleFilter}>
        Search
      </Button>
    </div>
  )
}

export default RoomFilter

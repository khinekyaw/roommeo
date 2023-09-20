import React from 'react'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Skeleton } from '@nextui-org/skeleton'

const RoomCardSkeleton = () => {
  return (
    <Card shadow='none' className='border-1 border-gray-200'>
      <CardBody className='overflow-visible p-0 w-full aspect-[2/1.4]'>
        <Skeleton className='w-full h-full' />
      </CardBody>
      <CardFooter className='p-5'>
        <div className='flex flex-col gap-5 w-full'>
          <div className='w-full flex items-center gap-x-2'>
            <Skeleton />
          </div>
          <div className='grid gap-4 grid-cols-2 grid-rows-2 text-gray-700'>
            <Skeleton className='w-full h-5 rounded-full' />

            <Skeleton className='w-full h-5 rounded-full' />

            <Skeleton className='w-full h-5 rounded-full' />

            <Skeleton className='w-full h-5 rounded-full' />
          </div>
          <div className='flex w-full justify-between items-center'>
            <Skeleton className='w-full h-5 rounded-full' />
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default RoomCardSkeleton

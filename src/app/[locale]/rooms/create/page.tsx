import React from 'react'
import { Input, Textarea } from '@nextui-org/input'
import { Card, CardHeader, CardFooter, CardBody } from '@nextui-org/card'
import { Button } from '@nextui-org/button'

import Section from '@/components/Section'
import ImageSelector from '@/components/ImageSelector'

const RoomCreatePage = () => {
  return (
    <Section>
      <div className='py-10'>
        <Card className='p-3 border' shadow='none'>
          <CardHeader className='px-5'>
            <h1 className='font-bold text-2xl'>List your room</h1>
          </CardHeader>
          <CardBody>
            <div className='mb-5'>
              <ImageSelector />
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex gap-5'>
                <Input
                  variant='bordered'
                  type='text'
                  label='Title'
                  className='bg-white'
                />
                <Input
                  variant='bordered'
                  type='text'
                  label='Price'
                  className='bg-white'
                />
              </div>
              <div>
                <Textarea
                  variant='bordered'
                  label='Description'
                  labelPlacement='outside'
                  placeholder='Enter your description'
                  className='max-w-xs'
                />
              </div>
            </div>
          </CardBody>
          <CardFooter className='px-5'>
            <Button color='secondary'>List Now</Button>
          </CardFooter>
        </Card>
      </div>
    </Section>
  )
}

export default RoomCreatePage

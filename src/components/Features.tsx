import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { IoSearchOutline, IoEye } from 'react-icons/io5'

import Section from './Section'

const Features = () => {
  return (
    <div className='bg-white w-full py-12'>
      <Section>
        <div className='grid grid-rows-2 grid-cols-12 gap-5'>
          <Card
            shadow='none'
            className='row-span-full col-span-6 p-8 bg-coral-200'
          >
            <CardBody>
              <h2 className='font-bold text-4xl/normal mb-3'>
                Simple & easy way to find your dream Appointment
              </h2>
              <p className='text-lg'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </CardBody>
            <CardFooter className='px-5'>
              <Button size='lg' color='secondary'>
                Get Started
              </Button>
            </CardFooter>
          </Card>

          <Card
            shadow='none'
            className='p-2 bg-coral-100 row-span-1 col-span-3'
          >
            <CardBody>
              <div className='text-5xl text-coral-400 mb-2'>
                <IoSearchOutline />
              </div>
              <h2 className='font-bold text-2xl mb-3'>Search your location</h2>
            </CardBody>
          </Card>
          <Card
            shadow='none'
            className='p-2 bg-coral-100 row-span-1 col-span-3'
          >
            <CardBody>
              <div className='text-5xl text-coral-400 mb-2'>
                <IoEye />
              </div>
              <h2 className='font-bold text-2xl mb-3'>Visit Appointment</h2>
            </CardBody>
          </Card>
          <Card
            shadow='none'
            className='p-2 bg-coral-100 row-span-1 col-span-3'
          >
            <CardBody>
              <div className='text-5xl text-coral-400 mb-2'>
                <IoSearchOutline />
              </div>
              <h2 className='font-bold text-2xl mb-3'>Get your dream room</h2>
            </CardBody>
          </Card>
          <Card
            shadow='none'
            className='p-2 bg-coral-100 row-span-1 col-span-3'
          >
            <CardBody>
              <div className='text-5xl text-coral-400 mb-2'>
                <IoSearchOutline />
              </div>
              <h2 className='font-bold text-2xl mb-3'>
                Enjoy your Appointment
              </h2>
            </CardBody>
          </Card>
        </div>
      </Section>
    </div>
  )
}

export default Features

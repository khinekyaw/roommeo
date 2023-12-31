import React from 'react'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import {
  IoSearchOutline,
  IoEye,
  IoWalletOutline,
  IoHappyOutline,
} from 'react-icons/io5'

import Section from './Section'

const Features = () => {
  return (
    <div className='bg-white w-full py-10 lg:py-16'>
      <Section>
        <div className='grid lg:grid-rows-2 lg:grid-cols-12 gap-5'>
          <Card
            shadow='none'
            className='row-span-full lg:col-span-6 p-3 lg:p-8 bg-coral-200'
          >
            <CardBody>
              <h2 className='font-bold text-3xl/normal lg:text-4xl/normal mb-3'>
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
            className='p-2 bg-coral-100 lg:row-span-1 lg:col-span-3'
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
            className='p-2 bg-coral-100 lg:row-span-1 lg:col-span-3'
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
            className='p-2 bg-coral-100 lg:row-span-1 lg:col-span-3'
          >
            <CardBody>
              <div className='text-5xl text-coral-400 mb-2'>
                <IoWalletOutline />
              </div>
              <h2 className='font-bold text-2xl mb-3'>Get your dream room</h2>
            </CardBody>
          </Card>
          <Card
            shadow='none'
            className='p-2 bg-coral-100 lg:row-span-1 lg:col-span-3'
          >
            <CardBody>
              <div className='text-5xl text-coral-400 mb-2'>
                <IoHappyOutline />
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

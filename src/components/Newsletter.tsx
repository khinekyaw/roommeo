import React from 'react'

import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { Card, CardBody } from '@nextui-org/card'

import Section from './Section'

const Newsletter = () => {
  return (
    <div className='bg-[#161616] py-20'>
      <Section>
        <div className='flex justify-center'>
          <Card className='lg:p-5 bg-white/60 w-full max-w-3xl'>
            <CardBody className='flex items-center'>
              <div className='max-w-lg flex flex-col items-center'>
                <h3 className='text-3xl font-bold text-center mb-5'>
                  For Recent Update, News.
                </h3>
                <p className='text-center mb-8'>
                  We helps businesses customize, automate and scale up their ad
                  production and delivery.
                </p>
                <div className='flex flex-col lg:flex-row gap-2'>
                  <Input size='lg' placeholder='Enter your email' />
                  <Button size='lg' color='secondary'>
                    Subscribe
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>
    </div>
  )
}

export default Newsletter

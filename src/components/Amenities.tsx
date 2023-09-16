import React from 'react'

import { Card, CardHeader } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import Icon from './Icon'

const amenitites: AmenitiesProps[] = [
  {
    id: '1',
    name: 'wifi',
    title: 'Wifi',
  },
  {
    id: '2',
    name: 'kitchen',
    title: 'Kitchen',
  },
  {
    id: '3',
    name: 'wifi',
    title: 'Wifi',
  },
  {
    id: '4',
    name: 'kitchen',
    title: 'Kitchen',
  },
  {
    id: '5',
    name: 'car-parking',
    title: 'Free parking on premises',
  },
]

export interface AmenitiesProps {
  id: string
  name: string
  title: string
}

const Amenities = () => {
  return (
    <Card className='border border-gray-200 p-5' shadow='none'>
      <CardHeader>
        <div>
          <h4 className='font-bold text-2xl mb-5'>Amenities</h4>
          <div className='flex gap-3 flex-wrap'>
            {amenitites.map((amenity) => (
              <Button
                variant='bordered'
                color='secondary'
                key={amenity.id}
                startContent={<Icon />}
              >
                {amenity.title}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

export default Amenities

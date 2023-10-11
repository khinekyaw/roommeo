'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

import { Card, CardBody } from '@nextui-org/card'
import { Select, SelectItem } from '@nextui-org/select'
import { Button } from '@nextui-org/button'
import { CITIES, PRICES } from '@/lib/data/inputs'

const HomeFilterBox = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <Card shadow='sm' className='max-w-[26rem]'>
      <CardBody className='flex gap-5 p-6'>
        <Select
          size='sm'
          variant='bordered'
          label='City'
          color='secondary'
          {...register('city')}
        >
          {CITIES.map((city) => (
            <SelectItem key={city.value} value={city.value}>
              {city.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          size='sm'
          variant='bordered'
          label='Township'
          color='secondary'
          {...register('city')}
        >
          {CITIES.map((city) => (
            <SelectItem key={city.value} value={city.value}>
              {city.label}
            </SelectItem>
          ))}
        </Select>
        <div className='flex gap-5'>
          <Select
            size='sm'
            variant='bordered'
            label='Price (From)'
            color='secondary'
            {...register('city')}
          >
            {PRICES.map((price) => (
              <SelectItem key={price.value} value={price.value}>
                {price.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            size='sm'
            variant='bordered'
            label='Price (To)'
            color='secondary'
            {...register('city')}
          >
            {PRICES.map((price) => (
              <SelectItem key={price.value} value={price.value}>
                {price.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <Button size='lg' color='secondary'>
          Search
        </Button>
      </CardBody>
    </Card>
  )
}

export default HomeFilterBox

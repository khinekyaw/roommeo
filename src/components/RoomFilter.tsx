'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Select, SelectItem } from '@nextui-org/select'
import { useForm } from 'react-hook-form'

import { IoSearch } from 'react-icons/io5'
import { buildQueryString } from '@/lib/utils'
import _ from 'lodash'

const cities = [
  {
    value: 'yangon',
    label: 'Yangon',
  },
  {
    value: 'mandalay',
    label: 'Mandalay',
  },
  {
    value: 'bago',
    label: 'Bago',
  },
]

const prices = [
  {
    value: '100000',
    label: '1Lakhs',
  },
  {
    value: '200000',
    label: '2Lakhs',
  },
  {
    value: '300000',
    label: '3Lakhs',
  },
]

const properties = [
  {
    value: 'apartment',
    label: 'Apartment',
  },
  {
    value: 'condo',
    label: 'Condo',
  },
  {
    value: 'house',
    label: 'House',
  },
]

const RoomFilter = ({ searchParams }: { searchParams: any }) => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [loading, setLoading] = useState(false)

  const onSubmit = (data: any) => {
    if (
      !_.isEqual(
        _.omitBy(data, (value, key) => !value),
        searchParams
      )
    ) {
      setLoading(true)
      router.push(`/rooms?${buildQueryString(data)}`)
    }
  }

  useEffect(() => {
    // console.log('Effect')
    setLoading(false)
    return () => {
      setLoading(false)
    }
  }, [searchParams])

  return (
    <form className='flex gap-x-4' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex gap-2 flex-1 flex-wrap'>
        <Input
          size='sm'
          variant='bordered'
          type='text'
          label='Title or street'
          className='max-w-[9rem] bg-white'
          color='secondary'
          {...register('search')}
        />
        <Select
          size='sm'
          variant='bordered'
          label='City'
          className='bg-white max-w-[9rem]'
          color='secondary'
          {...register('city')}
        >
          {cities.map((city) => (
            <SelectItem key={city.value} value={city.value}>
              {city.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          size='sm'
          variant='bordered'
          label='Township'
          className='bg-white max-w-[9rem]'
          color='secondary'
          {...register('township')}
        >
          {cities.map((city) => (
            <SelectItem key={city.value} value={city.value}>
              {city.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          size='sm'
          variant='bordered'
          label='Property type'
          className='bg-white max-w-[9rem]'
          color='secondary'
          {...register('property_type')}
        >
          {properties.map((property) => (
            <SelectItem key={property.value} value={property.value}>
              {property.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          size='sm'
          variant='bordered'
          label='Price (From)'
          className='bg-white max-w-[8rem]'
          color='secondary'
          {...register('price_from')}
        >
          {prices.map((price) => (
            <SelectItem key={price.value} value={price.value}>
              {price.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          size='sm'
          variant='bordered'
          label='Price (To)'
          className='bg-white max-w-[8rem]'
          color='secondary'
          {...register('price_to')}
        >
          {prices.map((price) => (
            <SelectItem key={price.value} value={price.value}>
              {price.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div>
        <Button
          startContent={loading ? null : <IoSearch />}
          color='secondary'
          size='lg'
          type='submit'
          isLoading={loading}
        >
          Search
        </Button>
      </div>
    </form>
  )
}

export default RoomFilter

'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Select, SelectItem } from '@nextui-org/select'
import { useForm } from 'react-hook-form'
import { IoSearch } from 'react-icons/io5'
import _ from 'lodash'

import { buildQueryString } from '@/lib/utils'
import { CITIES, PRICES, PROPERTY_TYPES } from '@/data/inputs'

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
    setLoading(false)
    return () => {
      setLoading(false)
    }
  }, [searchParams])

  return (
    <form
      className='flex lg:flex-row flex-col gap-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-row gap-2 flex-1 flex-wrap'>
        <Input
          size='sm'
          variant='bordered'
          type='text'
          label='Title or street'
          className='lg:max-w-[9rem] bg-white'
          color='secondary'
          {...register('search')}
        />
        <Select
          size='sm'
          variant='bordered'
          label='City'
          className='bg-white lg:max-w-[9rem]'
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
          className='bg-white lg:max-w-[9rem]'
          color='secondary'
          {...register('township')}
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
          label='Property type'
          className='bg-white lg:max-w-[9rem]'
          color='secondary'
          {...register('property_type')}
        >
          {PROPERTY_TYPES.map((property) => (
            <SelectItem key={property.value} value={property.value}>
              {property.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          size='sm'
          variant='bordered'
          label='Price (From)'
          className='bg-white lg:max-w-[8rem] flex-1 lg:flex-auto'
          color='secondary'
          {...register('price_from')}
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
          className='bg-white lg:max-w-[8rem] flex-1 lg:flex-auto'
          color='secondary'
          {...register('price_to')}
        >
          {PRICES.map((price) => (
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

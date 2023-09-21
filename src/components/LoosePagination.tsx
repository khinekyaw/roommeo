'use client'
import React from 'react'
import { Pagination } from '@nextui-org/pagination'
import { useRouter } from 'next/navigation'

const LoosePagination = () => {
  const router = useRouter()

  return (
    <Pagination
      variant='bordered'
      color='secondary'
      showControls
      total={10}
      initialPage={1}
      onChange={(currentPage) => router.push(`/rooms?page=${currentPage}`)}
    />
  )
}

export default LoosePagination

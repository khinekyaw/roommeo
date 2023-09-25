'use client'
import React from 'react'
import { Pagination } from '@nextui-org/pagination'
import { useRouter, useSearchParams } from 'next/navigation'

const LoosePagination = () => {
  const router = useRouter()
  const search = useSearchParams()

  const currentPage = parseInt(search.get('page') || '1')

  return (
    <Pagination
      variant='bordered'
      color='secondary'
      showControls
      total={10}
      initialPage={1}
      page={currentPage}
      onChange={(currentPage) => router.push(`/rooms?page=${currentPage}`)}
    />
  )
}

export default LoosePagination

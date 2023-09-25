import { NextRequest, NextResponse } from 'next/server'

import { wait } from '@/lib/utils'

const rooms = [
  {
    id: '1',
    slug: 'room-1',
    title: 'Room to share',
    location: '123/abc Hlaing, Yangon',
    price: 200000,
    image: '/images/1.webp',
  },
  {
    id: '2',
    slug: 'room-2',
    title: 'A room near downtown',
    location: '123/abc Hlaing, Yangon',
    price: 300000,
    image: '/images/2.webp',
  },
  {
    id: '3',
    slug: 'room-3',
    title: 'A room near downtown',
    location: '123/abc Hlaing, Yangon',
    price: 200000,
    image: '/images/3.webp',
  },
  {
    id: '4',
    slug: 'room-4',
    title: 'A room near downtown',
    location: '123/abc Hlaing, Yangon',
    price: 200000,
    image: '/images/4.webp',
  },
  {
    id: '5',
    slug: 'room-3',
    title: 'A room near downtown',
    location: '123/abc Hlaing, Yangon',
    price: 200000,
    image: '/images/1.webp',
  },
  {
    id: '6',
    slug: 'room-3',
    title: 'A room near downtown',
    location: '123/abc Hlaing, Yangon',
    price: 200000,
    image: '/images/2.webp',
  },
  {
    id: '7',
    slug: 'room-1',
    title: 'Room to share',
    location: '123/abc Hlaing, Yangon',
    price: 200000,
    image: '/images/1.webp',
  },
  {
    id: '8',
    slug: 'room-2',
    title: 'A room near downtown',
    location: '123/abc Hlaing, Yangon',
    price: 300000,
    image: '/images/2.webp',
  },
  {
    id: '9',
    slug: 'room-3',
    title: 'A room near downtown',
    location: '123/abc Hlaing, Yangon',
    price: 200000,
    image: '/images/3.webp',
  },
]

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get('search')

  // await wait(2000)
  return NextResponse.json(search ? rooms.slice(0, 2).reverse() : rooms)
}

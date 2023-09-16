import { NextRequest, NextResponse } from 'next/server'

export function GET(request: NextRequest) {
  return NextResponse.json({
    id: '1',
    slug: 'room-1',
    title: 'Room to share',
    location: '123/abc Hlaing, Yangon',
    price: 200000,
    image: '/images/1.webp',
  })
}

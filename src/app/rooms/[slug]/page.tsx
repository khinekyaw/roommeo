import React, { FC } from 'react'

import Section from '@/components/Section'

interface RoomDetailProps {
  params: { slug: string }
}

const RoomDetail: FC<RoomDetailProps> = ({ params: { slug } }) => {
  return <Section>RoomDetail - {slug}</Section>
}

export default RoomDetail

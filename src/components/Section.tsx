import React from 'react'

const Section = ({ children }: { children: React.ReactNode }) => {
  return <div className='w-full max-w-6xl mx-auto px-10'>{children}</div>
}

export default Section

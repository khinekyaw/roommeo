import React from 'react'

import Section from './Section'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='bg-white w-full py-24'>
      <Section>
        <div className='flex w-full gap-8'>
          <div className='flex-[2]'>
            <Logo />
            <p>
              59 Bervely Hill Ave, Brooklyn Town, New York, NY 5630, CA, US
              +(123) 456-7890 info@mail.com
            </p>
          </div>
          <div className='flex-1'>
            <h4 className='font-bold text-lg'>Title</h4>
            <ul>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
          <div className='flex-1'>
            <h4 className='font-bold text-lg'>Title</h4>
          </div>
          <div className='flex-1'>
            <h4 className='font-bold text-lg'>Title</h4>
          </div>
        </div>
      </Section>
    </footer>
  )
}

export default Footer

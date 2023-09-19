import React from 'react'

import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io5'

import Section from './Section'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='bg-white w-full pt-32'>
      <Section>
        <div className='flex w-full gap-8 mb-10'>
          <div className='flex-[1.6] font-semibold'>
            <div className='mb-8'>
              <Logo />
            </div>
            <p className='mb-5'>59 Bervely Hill Ave, Brooklyn Town,</p>
            <p>New York, NY 5630, CA, US</p>
            <p className='mb-5'>+(123) 456-7890</p>
            <p className='mb-10'>info@roomero.com</p>
            <div className='flex gap-3 text-3xl text-coral-500'>
              <IoLogoFacebook />
              <IoLogoTwitter />
              <IoLogoInstagram />
              <IoLogoLinkedin />
            </div>
          </div>
          <div className='flex-1'>
            <h4 className='font-semibold text-lg mb-4'>Features</h4>
            <ul className='flex flex-col gap-3'>
              <li>Home v1</li>
              <li>Home v2</li>
              <li>Contact</li>
              <li>About us</li>
            </ul>
          </div>
          <div className='flex-1'>
            <h4 className='font-semibold text-lg mb-4'>Information</h4>
            <ul className='flex flex-col gap-3'>
              <li>Listing v1</li>
              <li>Listing v2</li>
              <li>Property Details</li>
              <li>Agent List</li>
              <li>Agent Profile</li>
            </ul>
          </div>
          <div className='flex-1'>
            <h4 className='font-semibold text-lg mb-4'>Documentation</h4>
            <ul className='flex flex-col gap-3'>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>License</li>
            </ul>
          </div>
          <div className='flex-1'>
            <h4 className='font-semibold text-lg mb-4'>Others</h4>
            <ul className='flex flex-col gap-3'>
              <li>Log in</li>
              <li>New Password</li>
              <li>Reset Password</li>
              <li>Create Account</li>
            </ul>
          </div>
        </div>

        <div className='py-16 font-semibold'>© 2023. All rights reserved.</div>
      </Section>
    </footer>
  )
}

export default Footer

import React from 'react'
import Link from 'next/link'
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'

import NavLink from './NavLink'

export default function Navbar() {
  return (
    <NextNavbar
      classNames={{
        wrapper: 'max-w-6xl px-10',
      }}
    >
      <NavbarBrand>
        <Link href='/' className='font-bold'>
          <span className='text-gray-900'>ROOM</span>
          Lef
        </Link>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/rooms'>Rooms</NavLink>
        <NavLink href='/about-us'>About Us</NavLink>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Button as={Link} href='#' color='secondary' variant='faded'>
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href='#' color='secondary'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextNavbar>
  )
}

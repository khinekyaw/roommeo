'use client'
import React from 'react'
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <NextNavbar
      classNames={{
        wrapper: 'max-w-6xl px-10',
      }}
    >
      <NavbarBrand>
        <Link href='/' className='font-bold'>
          <span className='text-gray-900'>ROOM</span>
          Live
        </Link>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem isActive={pathname === '/'}>
          <Link color='foreground' href='/'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/rooms'}>
          <Link color='foreground' href='/rooms'>
            Rooms
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/about-us'}>
          <Link color='foreground' href='/about-us'>
            About Us
          </Link>
        </NavbarItem>
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

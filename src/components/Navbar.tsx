'use client'
import React from 'react'
import Link from 'next/link'
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'

import NavLink from './NavLink'
import Logo from './Logo'
import LangSwitcher from './LangSwitcher'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <NextNavbar
      isBlurred={false}
      // isBordered={true}
      classNames={{
        wrapper: 'max-w-6xl px-10',
        content: 'flex-1',
      }}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className='sm:hidden'
      />
      <NavbarBrand>
        <Link href='/' className='font-bold'>
          <Logo />
        </Link>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/rooms'>Rooms</NavLink>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <LangSwitcher />
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <Button as={Link} href='/login' color='secondary' variant='faded'>
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href='/register' color='secondary'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarItem>
          <Link href='/'>Home</Link>
        </NavbarItem>
        <NavbarMenuItem>
          <Link href='/rooms'>Rooms</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextNavbar>
  )
}

'use client'
import React, { useState } from 'react'
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
// import { ThemeSwitcher } from './ThemeSwitcher'

interface NavbarProps {
  home: string
  rooms: string
  login: string
  signUp: string
}

export default function Navbar({ home, rooms, login, signUp }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <NextNavbar
      isBlurred={false}
      classNames={{
        wrapper: 'max-w-6xl px-10',
        content: 'flex-1',
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
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
        <NavLink href='/'>{home}</NavLink>
        <NavLink href='/rooms'>{rooms}</NavLink>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <LangSwitcher />
          {/* <ThemeSwitcher /> */}
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <Button as={Link} href='/login' color='secondary' variant='faded'>
            {login}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href='/register' color='secondary'>
            {signUp}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href='/' onClick={() => setIsMenuOpen(false)}>
            {home}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className='mb-5'>
          <Link href='/rooms' onClick={() => setIsMenuOpen(false)}>
            {rooms}
          </Link>
        </NavbarMenuItem>
        <Button as={Link} href='/login' color='secondary' variant='faded'>
          {login}
        </Button>
        <LangSwitcher />
      </NavbarMenu>
    </NextNavbar>
  )
}

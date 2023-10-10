'use client'
import React, { ReactNode } from 'react'
import Link from 'next/link'
import { NavbarItem } from '@nextui-org/navbar'

import { usePathname } from '@/navigation'

export interface NavLinkProps {
  children: ReactNode
  href: string
}

const NavLink = ({ children, href }: NavLinkProps) => {
  const pathname = usePathname()

  return (
    <NavbarItem isActive={pathname === href}>
      <Link color='foreground' href={href}>
        {children}
      </Link>
    </NavbarItem>
  )
}

export default NavLink

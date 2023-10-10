// app/providers.tsx
'use client'
import { SessionProvider } from 'next-auth/react'
import { NextUIProvider } from '@nextui-org/react'
// import { ThemeProvider as NextThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <NextUIProvider>
        {/* <NextThemeProvider attribute='class' defaultTheme='dark'> */}
        {children}
        {/* </NextThemeProvider> */}
      </NextUIProvider>
    </SessionProvider>
  )
}

import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { NextIntlClientProvider } from 'next-intl'

export default function App({ Component, pageProps }) {
  return (
    <NextIntlClientProvider messages={pageProps.messages}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextIntlClientProvider>
  )
}

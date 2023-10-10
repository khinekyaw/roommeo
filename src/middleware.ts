import createMiddleware from 'next-intl/middleware'
import { pathnames, locales } from './navigation'

export default createMiddleware({
  defaultLocale: 'en_US',
  locales,
  pathnames,
})

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}

import { DefaultSession, Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface User {
    accessToken: string | undefined
  }
}

declare module 'next-auth' {
  interface Session {
    accessToken: string | undefined
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string | undefined
  }
}

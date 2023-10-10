import NextAuth from 'next-auth'

import { authOptions } from './auth'
// import GoogleProvider from 'next-auth/providers/google'
// import axios from 'axios'

// interface DRFResponse {
//   access: string
// }

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

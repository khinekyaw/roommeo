import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import axios from 'axios'

interface DRFResponse {
  access: string
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  // callbacks: {
  //   async signIn({ user, account, profile }) {
  //     if (account?.provider === 'google') {
  //       const { access_token, id_token } = account

  //       try {
  //         const res = await axios.post<DRFResponse>(
  //           'http://127.0.0.1:8000/api/social/login/google/',
  //           {
  //             access_token,
  //             id_token,
  //           }
  //         )

  //         const { access } = res.data
  //         user.accessToken = access

  //         return true
  //       } catch (error) {
  //         return false
  //       }
  //     }

  //     return false
  //   },
  //   async session({ session, user, token }) {
  //     session.accessToken = token.accessToken
  //     return session
  //   },
  //   async jwt({ token, user, account, profile }) {
  //     if (user) {
  //       token.accessToken = user.accessToken
  //     }
  //     return token
  //   },
  // },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

// moved this file because of
// https://github.com/vercel/next.js/issues/50870

import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

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

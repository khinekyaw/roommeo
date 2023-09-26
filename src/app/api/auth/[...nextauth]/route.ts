import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      console.log('jwt-callback:', token, account)
      return token
    },
    async session({ session, token, user }) {
      console.log('session-callback:', session, token, user)
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

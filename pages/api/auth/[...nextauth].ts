import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      credentials: {
        email: { label: 'Username', type: 'text', placeholder: 'sjobs' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials

        const userData = await fetch(
          `${process.env.API_BASE_URL}/users/${email}`
        )

        const user = await userData.json()

        if (user) {
          if (user.password === password) {
            return user
          } else {
            throw new Error('Invalid password')
          }
        } else {
          return null
        }
      }
    })
  ]
}

export default NextAuth(authOptions)

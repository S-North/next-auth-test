import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // how do I get more of the token info into the session prop? https://next-auth.js.org/configuration/callbacks#session-callback
      // https://github.com/nextauthjs/next-auth/discussions/788
      session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60

      },
      callbacks: {
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token and user id from a provider.
          session.accessToken = token.accessToken
          session.user.sub = 'I added this'
          
          return session
        }
      }
    })
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET
}

export default NextAuth(authOptions)
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your-cool-username"
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your-awesome-password"
        }
      },
      async authorize(credentials) {
        const user = { id: "1", name: "Albert", password: "nextauth" }

        if(credentials?.username === user.name && credentials?.password === user.password){
          return user
        } else {
          return null
        }
      }
    }),
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
  ],
  // pages: {
  //   signIn: '/sigin',
  // },
}
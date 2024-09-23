import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'


const handler = NextAuth({
    providers: [
        // OAuth authentication providers...
    GithubProvider({
        clientId: process.env.GITCGHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),
    ]
})

export {handler as Get , handler as Post};
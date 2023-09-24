import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
/* import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client'; */

//Callback URL:   http://localhost:3000/api/auth/callback/google
//http://localhost:3000/api/auth/callback/github

//const prisma = new PrismaClient();

const handler = NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
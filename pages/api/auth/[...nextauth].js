import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import User from '../../../models/userModel'

import { dbConnect } from '../../../utils/dbConnect'
import { verifyPassword } from '../../../utils/auth'

const options = {
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        try {
          await dbConnect()

          const findUser = await User.findOne({
            email: credentials.email,
          });
          if (!findUser) throw new Error("No user found");

          const isPasswordValid = await verifyPassword(
            credentials.password,
            findUser.password
          );
          if (!isPasswordValid) throw new Error("Password is not valid");

          return { email: credentials.email, name: findUser.name, isAdmin: findUser.isAdmin };

        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  debug: true,
};

export default (req, res) => NextAuth(req, res, options);

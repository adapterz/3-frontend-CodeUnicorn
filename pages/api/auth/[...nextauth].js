import nextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Naver from "next-auth/providers/naver";

export default nextAuth({
  providers: [
    Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    }),
    Naver({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_NAVER_SECRET,
    }),
  ],
  secret: "mKJcxWuF+QtkfRJVG0+AWvQuXYR08NbIkAMYEjvd3XY=",
  session: {
    maxAge: 24 * 60 * 60,
  },
});

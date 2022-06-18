import nextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Naver from "next-auth/providers/naver";

export default nextAuth({
  providers: [
    Google({
      // clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      // clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
      clientId: "baCMqWMvrFjgtBv6EINk",
      clientSecret: "QPnkIqPDka",
    }),
    Naver({
      // clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      // clientSecret: process.env.NEXT_PUBLIC_NAVER_SECRET,
      clientId:
        "747350971501-27cdrcom8h5vual6idia9cl0u0jblb0v.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: "mKJcxWuF+QtkfRJVG0+AWvQuXYR08NbIkAMYEjvd3XY=",
  session: {
    maxAge: 24 * 60 * 60,
  },
});

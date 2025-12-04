import { Strategy } from "passport-google-oauth20";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../constant/app.const.js";
import passport from "passport";
import prisma from "../prisma/connect.prisma.js";

export function initStrategyGoogleOauth20() {
  passport.use(
    new Strategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5001/api/auth/google/callback",
      },
      async function (accessToken, refreshToken, profile, cb) {
        const email = profile.emails[0].value;
        const fullname = profile.displayName;
        const avatar = profile.photos[0].value;

        let userExist = await prisma.users.findUnique({
          where: {
            email: email,
          },
        });
        // nếu userExist có dữ liệu(tồn tại)=> (người dùng cũ)cho đi tiếp thành công
        //nếu userExist k có dữ liệu=> create người dùng mới

        if (!userExist) {
          userExist = await prisma.users.create({
            data: {
              email: email,
              fullname: fullname,
              avatar: avatar,
            },
          });
        }
        //   console.log({ accessToken, refreshToken, profile, cb ,userExist});

        //thành công

        return cb(null, userExist);
      }
    )
  );
}

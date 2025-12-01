import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../common/constant/app.const.js";
const tokenService = {
  // Các hàm liên quan đến token
  createToken: (userId) => {
    const accessToken = jwt.sign({ userId: userId }, ACCESS_TOKEN_SECRET, { expiresIn: "5s" });
    const refreshToken = jwt.sign({ userId: userId }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  },

  verifyAccessToken: (accessToken, option) => {
    const decodeAcessToken = jwt.verify(accessToken, ACCESS_TOKEN_SECRET, option);
    return decodeAcessToken;
  },

  verifyRefreshToken: (refreshToken) => {
    const decodedRefreshToken = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
    return decodedRefreshToken;
  },
};
export default tokenService;

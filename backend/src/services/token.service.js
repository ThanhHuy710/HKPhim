import jwt from "jsonwebtoken";
const tokenService = {
  // Các hàm liên quan đến token
  createToken: (userId) => {
      const accessToken  = jwt.sign({ userId: userId }, "ACCESS_TOKEN_SECRET", { expiresIn: "1d" });

    return {
      accessToken: accessToken,
      refreshToken: "refreshToken",
    };
  },
};
export default tokenService;

import tokenService from "../../services/token.service.js";
import { UnauthorizedException } from "../helper/exception.helper.js";
import prisma from "../prisma/connect.prisma.js";

const protect = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    throw new UnauthorizedException("Khong co authorization ");
  }
  //split de lay Bearer va token
  const [type, accessToken] = authorization.split(" ");
  if (type !== "Bearer") {
    throw new UnauthorizedException("Khong dung dinh dang Bearer");
  }

  if (!accessToken) {
    throw new UnauthorizedException("accessToken khong hop le");
  }
  // xac minh token co hop le khong
  const { userId } = tokenService.verifyAccessToken(accessToken);

  const userExist = await prisma.users.findUnique({
    where: { id: userId },
  });

  if (!userExist) {
    throw new UnauthorizedException("Người dùng không tồn tại");
  }

  req.user = userExist;

  // console.log({authorization,type,accessToken,userExist})

  next();
};

export default protect;

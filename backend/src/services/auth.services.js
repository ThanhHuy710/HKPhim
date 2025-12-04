import { BadRequestException } from "../common/helper/exception.helper.js";
import prisma from "../common/prisma/connect.prisma.js";
import bcrypt from "bcrypt";
import tokenService from "./token.service.js";

export const authService = {
  register: async function (req) {
    const { fullname, email, password } = req.body;

    // Dùng findFirst vì email không phải unique constraint trong schema
    const userExist = await prisma.users.findFirst({
      where: { email: email },
    });

    if (userExist) {
      throw new BadRequestException("Người dùng đã tồn tại vui lòng đăng nhập");
    }

    // hash: băm (không thể dịch ngược)
    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = await prisma.users.create({
      data: {
        email: email,
        password: hashPassword,
        fullname: fullname,
      },
    });

    // console.log({ fullname, email, password, userExist });

    return true;
  },
  login: async function (req) {
    const { email, password } = req.body;

    const userExist = await prisma.users.findFirst({
      where: { email: email },
    });

    if (!userExist) {
      throw new BadRequestException(
        "Người dùng không tồn tại vui lòng đăng ký"
      );
    }
    // Kiểm tra mật khẩu
    const isPasswordValid = bcrypt.compareSync(password, userExist.password);
    if (!isPasswordValid) {
      throw new BadRequestException("Mật khẩu không đúng, vui lòng thử lại");
    }

    const tokens = tokenService.createToken(userExist.id);

    console.log({ email, password, userExist });

    return tokens;
  },

  getInfo: async function (req) {
    return "get info";
  },

  //CRUD
  create: async function (req) {
    return `This action create`;
  },

  findAll: async function (req) {
    return `This action returns all module`;
  },

  findOne: async function (req) {
    return `This action returns a id: ${req.params.id} module`;
  },

  update: async function (req) {
    return `This action updates a id: ${req.params.id} module`;
  },

  remove: async function (req) {
    return `This action removes a id: ${req.params.id} module`;
  },
};

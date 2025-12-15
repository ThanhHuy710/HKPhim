import { PrismaClient } from "../common/prisma/generated/prisma/index.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const usersService = {
  findAll: async function (req) {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;

    return await prisma.users.findMany({
      take: limit,
      skip: offset,
      orderBy: { id: "asc" },
      include: {
        cart: true,
        favorites: true,
        feedbacks: true,
        invoices: true,
        plans: true,
        views: true,
      },
    });
  },

  //CRUD
  create: async function (req) {
    return await prisma.users.create({
      data: req.body,
    });
  },

  findOne: async function (req) {
    const id = Number(req.params.id);
    return await prisma.users.findUnique({
      where: { id },
      include: {
        plans: true,
        cart: true,
        favorites: true,
        feedbacks: true,
        invoices: true,
        views: true,
      },
    });
  },

  update: async function (req) {
    const id = Number(req.params.id);
    
    // Get current user to check if birthday already exists
    const currentUser = await prisma.users.findUnique({
      where: { id },
      select: { birthday: true }
    });
    
    // Chỉ cho phép update các trường cụ thể (theo schema)
    const allowedFields = ['username', 'email', 'fullname', 'avatar', 'role', 'phonenumber', 'city', 'gender', 'interest', 'plan_id', 'birthday'];
    const updateData = {};
    
    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        // Prevent birthday change if it's already set (for child protection)
        if (field === 'birthday') {
          if (currentUser.birthday) {
            // Birthday already exists, don't allow change
            console.log('Birthday change blocked - already set for user protection');
            return;
          }
          // First time setting birthday - validate and convert
          if (req.body[field]) {
            updateData[field] = new Date(req.body[field]);
          }
        } else {
          updateData[field] = req.body[field];
        }
      }
    });
    
    return await prisma.users.update({
      where: { id },
      data: updateData,
    });
  },

  updatePassword: async function (req) {
    const id = Number(req.params.id);
    const { oldPassword, newPassword } = req.body;
    
    // Lấy thông tin user hiện tại
    const user = await prisma.users.findUnique({
      where: { id }
    });

    if (!user) {
      throw new Error("Không tìm thấy người dùng");
    }

    // Kiểm tra mật khẩu cũ bằng bcrypt
    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
    
    if (!isPasswordValid) {
      throw new Error("Mật khẩu cũ không chính xác");
    }

    // Kiểm tra mật khẩu mới không được trống
    if (!newPassword || newPassword.trim() === "") {
      throw new Error("Mật khẩu mới không được để trống");
    }
    
    // Hash mật khẩu mới
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    return await prisma.users.update({
      where: { id },
      data: { password: hashedPassword },
    });
  },

  remove: async function (req) {
    const id = Number(req.params.id);
    return await prisma.users.delete({
      where: { id },
    });
  },
};

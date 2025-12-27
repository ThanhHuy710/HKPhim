import { PrismaClient } from "../common/prisma/generated/prisma/index.js";

const prisma = new PrismaClient();

export const invoicesService = {
  findAll: async function (req) {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;

    return await prisma.invoices.findMany({
      take: limit,
      skip: offset,
      orderBy: { id: "asc" },
      include: {
        users: true,
        plans: true,
      },
    });
  },

  create: async function (req) {
    const { user_id, plan_id, ...otherData } = req.body;

    // Nếu có user_id và plan_id, tính toán start_date và end_date cộng dồn
    if (user_id && plan_id) {
      // Lấy plan để biết duration_days
      const plan = await prisma.plans.findUnique({
        where: { id: plan_id },
      });

      if (!plan) {
        throw new Error('Plan not found');
      }

      // Start từ now, end = now + duration_days (mỗi gói riêng biệt)
      const startDate = new Date();
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + plan.duration_days);

      // Cập nhật plan_id của user
      await prisma.users.update({
        where: { id: user_id },
        data: { plan_id: plan_id },
      });

      // Tạo invoice với dates tính toán
      return await prisma.invoices.create({
        data: {
          ...otherData,
          user_id,
          plan_id,
          start_date: startDate,
          end_date: endDate,
        },
      });
    } else {
      // Nếu không có user_id và plan_id, tạo bình thường
      return await prisma.invoices.create({
        data: req.body,
      });
    }
  },

  findOne: async function (req) {
    const id = Number(req.params.id);
    return await prisma.invoices.findUnique({
      where: { id },
      include: {
        users: true,
        plans: true,
      },
    });
  },

  update: async function (req) {
    const id = Number(req.params.id);
    return await prisma.invoices.update({
      where: { id },
      data: req.body,
    });
  },

  remove: async function (req) {
    const id = Number(req.params.id);
    return await prisma.invoices.delete({
      where: { id },
    });
  },
};

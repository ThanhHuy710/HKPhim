import { PrismaClient } from "../common/prisma/generated/prisma/index.js";

const prisma = new PrismaClient();

export const cartService = {
  findAll: async function (req) {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;

    return await prisma.cart.findMany({
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
    return await prisma.cart.create({
      data: req.body,
    });
  },

  findOne: async function (req) {
    const id = Number(req.params.id);
    return await prisma.cart.findUnique({
      where: { id },
      include: {
        users: true,
        plans: true,
      },
    });
  },

  update: async function (req) {
    const id = Number(req.params.id);
    return await prisma.cart.update({
      where: { id },
      data: req.body,
    });
  },

  remove: async function (req) {
    const id = Number(req.params.id);
    return await prisma.cart.delete({
      where: { id },
    });
  },
};

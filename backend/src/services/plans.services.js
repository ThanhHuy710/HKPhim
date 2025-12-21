import { PrismaClient } from "../common/prisma/generated/prisma/index.js";

const prisma = new PrismaClient();

export const plansService = {
  findAll: async function (req) {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;

    return await prisma.plans.findMany({
      take: limit,
      skip: offset,
      orderBy: { id: "asc" },
      include: {
        cart: true,
        users: true,
        invoices: true,
      },
    });
  },

  create: async function (req) {
    return await prisma.plans.create({
      data: req.body,
    });
  },

  findOne: async function (req) {
    const id = Number(req.params.id);
    return await prisma.plans.findUnique({
      where: { id },
      include: {
        cart: true,
        users: true,
        invoices: true,
      },
    });
  },

  update: async function (req) {
    const id = Number(req.params.id);
    return await prisma.plans.update({
      where: { id },
      data: req.body,
    });
  },

  remove: async function (req) {
    const id = Number(req.params.id);
    return await prisma.plans.delete({
      where: { id },
    });
  },
};

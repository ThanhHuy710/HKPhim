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
    return await prisma.invoices.create({
      data: req.body,
    });
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

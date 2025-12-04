import { PrismaClient } from "../common/prisma/generated/prisma/index.js";

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
    return await prisma.users.update({
      where: { id },
      data: req.body,
    });
  },

  remove: async function (req) {
    const id = Number(req.params.id);
    return await prisma.users.delete({
      where: { id },
    });
  },
};

import { PrismaClient } from "../common/prisma/generated/prisma/index.js";

const prisma = new PrismaClient();

export const viewsService = {
  findAll: async function (req) {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;

    return await prisma.views.findMany({
      take: limit,
      skip: offset,
      orderBy: { id: "asc" },
      include: {
        films: true,
        episodes: true,
        users: true,
      },
    });
  },

  create: async function (req) {
    return await prisma.views.create({
      data: req.body,
    });
  },

  findOne: async function (req) {
    const id = Number(req.params.id);
    return await prisma.views.findUnique({
      where: { id },
      include: {
        films: true,
        episodes: true,
        users: true,
      },
    });
  },

  update: async function (req) {
    const id = Number(req.params.id);
    return await prisma.views.update({
      where: { id },
      data: req.body,
    });
  },

  remove: async function (req) {
    const id = Number(req.params.id);
    return await prisma.views.delete({
      where: { id },
    });
  },
};

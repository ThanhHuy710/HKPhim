import { PrismaClient } from "../common/prisma/generated/prisma/index.js";

const prisma = new PrismaClient();

export const feedbacksService = {
  findAll: async function (req) {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;

    return await prisma.feedbacks.findMany({
      take: limit,
      skip: offset,
      orderBy: { id: "asc" },
      include: {
        films: true,
        users: true
      }
    });
  },

  create: async function (req) {
    return await prisma.feedbacks.create({
      data: req.body
    });
  },

  findOne: async function (req) {
    const id = Number(req.params.id);
    return await prisma.feedbacks.findUnique({
      where: { id },
      include: {
        films: true,
        users: true
      }
    });
  },

  update: async function (req) {
    const id = Number(req.params.id);
    return await prisma.feedbacks.update({
      where: { id },
      data: req.body
    });
  },

  remove: async function (req) {
    const id = Number(req.params.id);
    return await prisma.feedbacks.delete({
      where: { id }
    });
  }
};

import { PrismaClient } from "../common/prisma/generated/prisma/index.js";

const prisma = new PrismaClient();

export const feedbacksService = {
  findAll: async function (req) {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;
    const user_id = req.query.user_id ? Number(req.query.user_id) : undefined;
    const type = req.query.type;

    const where = {};
    if (user_id) where.user_id = user_id;
    
    // Type filter: comment có rating null, review có rating không null
    if (type === "comment") {
      where.rating = null;
    } else if (type === "review") {
      where.rating = { not: null };
    }

    return await prisma.feedbacks.findMany({
      where,
      take: limit,
      skip: offset,
      orderBy: { id: "desc" },
      include: {
        films: true,
        users: true,
      },
    });
  },

  create: async function (req) {
    return await prisma.feedbacks.create({
      data: req.body,
    });
  },

  findOne: async function (req) {
    const id = Number(req.params.id);
    return await prisma.feedbacks.findUnique({
      where: { id },
      include: {
        films: true,
        users: true,
      },
    });
  },

  update: async function (req) {
    const id = Number(req.params.id);
    return await prisma.feedbacks.update({
      where: { id },
      data: req.body,
    });
  },

  remove: async function (req) {
    const id = Number(req.params.id);
    return await prisma.feedbacks.delete({
      where: { id },
    });
  },
};

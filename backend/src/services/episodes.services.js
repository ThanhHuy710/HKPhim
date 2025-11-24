import { PrismaClient } from "../common/prisma/generated/prisma/index.js";

const prisma = new PrismaClient();

export const episodesService = {
  findAll: async function (req) {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;

    return await prisma.episodes.findMany({
      take: limit,
      skip: offset,
      orderBy: { id: "asc" },
      include: {
        films: true,
        video_files: true,
        views: true
      }
    });
  },

  create: async function (req) {
    return await prisma.episodes.create({
      data: req.body
    });
  },

  findOne: async function (req) {
    const id = Number(req.params.id);
    return await prisma.episodes.findUnique({
      where: { id },
      include: {
        films: true,
        video_files: true,
        views: true
      }
    });
  },

  update: async function (req) {
    const id = Number(req.params.id);
    return await prisma.episodes.update({
      where: { id },
      data: req.body
    });
  },

  remove: async function (req) {
    const id = Number(req.params.id);
    return await prisma.episodes.delete({
      where: { id }
    });
  }
};

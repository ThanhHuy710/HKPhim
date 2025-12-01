import { PrismaClient } from "../common/prisma/generated/prisma/index.js";

const prisma = new PrismaClient();

export const videoFilesService = {
  findAll: async function (req) {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;

    return await prisma.video_files.findMany({
      take: limit,
      skip: offset,
      orderBy: { id: "asc" },
      include: {
        episodes: true,
      },
    });
  },

  create: async function (req) {
    return await prisma.video_files.create({
      data: req.body,
    });
  },

  findOne: async function (req) {
    const id = Number(req.params.id);
    return await prisma.video_files.findUnique({
      where: { id },
      include: {
        episodes: true,
      },
    });
  },

  update: async function (req) {
    const id = Number(req.params.id);
    return await prisma.video_files.update({
      where: { id },
      data: req.body,
    });
  },

  remove: async function (req) {
    const id = Number(req.params.id);
    return await prisma.video_files.delete({
      where: { id },
    });
  },
};

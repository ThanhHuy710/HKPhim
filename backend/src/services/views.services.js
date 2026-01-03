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
    const { film_id, episode_id, user_id, progress } = req.body;
    return await prisma.views.upsert({
      where: {
        film_id_episode_id_user_id: {
          film_id: Number(film_id),
          episode_id: Number(episode_id),
          user_id: Number(user_id),
        },
      },
      update: {
        progress: Number(progress),
        viewed_at: new Date(),
      },
      create: {
        film_id: Number(film_id),
        episode_id: Number(episode_id),
        user_id: Number(user_id),
        progress: Number(progress),
      },
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
  //findByUserId
  findByUserId: async function (req) {
    const { userId } = req.params;
    return await prisma.views.findMany({
      where: { user_id: Number(userId) },
      include: { films: true },
    });
  },
};

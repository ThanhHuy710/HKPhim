import { PrismaClient } from "../common/prisma/generated/prisma/index.js";

const prisma = new PrismaClient();

export const favoritesService = {
  findAll: async function (req) {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;

    return await prisma.favorites.findMany({
      take: limit,
      skip: offset,
      orderBy: { id: "asc" },
      include: {
        films: true,
        users: true,
      },
    });
  },

  create: async function (req) {
    return await prisma.favorites.create({
      data: req.body,
    });
  },

  findOne: async function (req) {
    const id = Number(req.params.id);
    return await prisma.favorites.findUnique({
      where: { id },
      include: {
        films: true,
        users: true,
      },
    });
  },

  update: async function (req) {
    const id = Number(req.params.id);
    return await prisma.favorites.update({
      where: { id },
      data: req.body,
    });
  },

  remove: async function (req) {
    const id = Number(req.params.id);
    return await prisma.favorites.delete({
      where: { id },
    });
  },
  //findbyFilmIdAndUserId
  findbyFilmIdAndUserId: async function (req) {
  const { filmId, userId } = req.params;
  return await prisma.favorites.findFirst({
    where: {
      film_id: Number(filmId),
      user_id: Number(userId),
    },
  });
},
  //findByUserId
  findByUserId: async function (req) {
  const { userId } = req.params;
  return await prisma.favorites.findMany({
    where: { user_id: Number(userId) },
    include: { films: true },
  });
}

};

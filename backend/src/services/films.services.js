import { PrismaClient } from "../common/prisma/generated/prisma/index.js";

const prisma = new PrismaClient();

export const filmsService = {
  findAll: async function (req) {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;

    const films = await prisma.films.findMany({
      take: limit,
      skip: offset,
      orderBy: {
        id: "asc",
      },
      include: {
        film_genres: {
          include: {
            genres: true,
          },
        },
        episodes: true,
        favorites: true,
        feedbacks: true,
        views: true,
      },
    });

    return films;
  },

  // CRUD
  create: async function (req) {
    return await prisma.films.create({
      data: req.body,
    });
  },

  findOne: async function (req) {
    const id = Number(req.params.id);
    return await prisma.films.findUnique({
      where: { id },
      include: {
        film_genres: { include: { genres: true } },
        episodes: true,
        favorites: true,
        feedbacks: true,
        views: true,
      },
    });
  },

  update: async function (req) {
    const id = Number(req.params.id);
    return await prisma.films.update({
      where: { id },
      data: req.body,
    });
  },

  remove: async function (req) {
    const id = Number(req.params.id);
    return await prisma.films.delete({
      where: { id },
    });
  },
};

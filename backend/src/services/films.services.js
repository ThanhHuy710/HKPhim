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

  async findById(id) {
    return await prisma.films.findUnique({
      where: { id: Number(id) },
      select: { id: true, title: true, original_name: true, season: true },
    });
  },
  //lọc theo tiêu chí
  findByFilter: async function ({ filter = {}, limit = 50, offset = 0 }) {
    return await prisma.films.findMany({
      where: filter,
      orderBy: { id: "asc" },
      take: limit,
      skip: offset,
      include: {
        film_genres: { include: { genres: true } },
        episodes: true,
      },
    });
  },
  //phim bộ phim lẻ
  async findSingleMovies(limit = 50, offset = 0) {
    return this.findByFilter({ filter: { is_series: false }, limit, offset });
  },

  async findSeries(limit = 50, offset = 0) {
    return this.findByFilter({ filter: { is_series: true }, limit, offset });
  },
  //Lọc theo thể loại
  async findByGenre(genreName, limit = 50, offset = 0) {
    return prisma.films.findMany({
      where: {
        film_genres: { some: { genres: { name: genreName } } },
      },
      take: limit,
      skip: offset,
      include: { film_genres: { include: { genres: true } }, episodes: true },
    });
  },
  //lọc theo tên
  async findByTitle(title, limit = 50, offset = 0) {
    return this.findByFilter({
      filter: { title: { contains: title, mode: "insensitive" } },
      limit,
      offset,
    });
  },
  //theo năm phát hành
  async findByYear(year, limit = 50, offset = 0) {
    return this.findByFilter({ filter: { year: Number(year) }, limit, offset });
  },
  //lọc theo nhiều tiêu chí
  async findByCriteria({
    country,
    type,
    rating,
    genre,
    version,
    year,
    limit = 50,
    offset = 0,
  }) {
    const filter = {};

    if (country) filter.country = country;
    if (type) filter.type = type;
    if (rating) filter.rating = rating;
    if (version) filter.version = version;
    if (year) filter.year = Number(year);
    if (genre) {
      filter.film_genres = { some: { genres: { name: genre } } };
    }

    return this.findByFilter({ filter, limit, offset });
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

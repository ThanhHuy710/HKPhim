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
  async findByFilter({ filter = {}, limit = 50, offset = 0 }) {
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
      filter: { title: { contains: title} },
      limit,
      offset,
    });
  },
  //lọc theo diễn viên
  async findByActor(actor, limit = 50, offset = 0) {
    return this.findByFilter({
      filter: { actor: { contains: actor} },
      limit,
      offset,
    });
  },
  //theo năm phát hành
  async findByYear(year, limit = 50, offset = 0) {
    return this.findByFilter({ filter: { year: Number(year) }, limit, offset });
  },
  //theo quốc gia
  async findByCountry(country, limit = 50, offset = 0) {
    return this.findByFilter({ 
      filter: { country: { contains: country } },
       limit,
      offset 
      });
  },
  //lọc theo nhiều tiêu chí
  async findByCriteria({
  country,
  type,
  rating,
  genre,
  version,
  year,
  age_rating,
  limit = 50,
  offset = 0,
}) {
  const filter = {};

  // Quốc gia: có thể nhiều giá trị, cách nhau bằng dấu phẩy
  if (country) {
    const countries = country.split(",").map((c) => c.trim());
    filter.country = { in: countries };
  }

  if (type) filter.type = type;
  if (rating) filter.rating = rating;
  if (version) filter.version = version;
  if (year) filter.year = Number(year);

  // Thêm age_rating
  if (age_rating) filter.age_rating = age_rating;

  if (genre) {
    filter.film_genres = { some: { genres: { name: genre } } };
  }

  return this.findByFilter({ filter, limit, offset });
},
 async updateAverageRating(filmId) {
    // Lấy tất cả rating của phim
    const feedbacks = await prisma.feedbacks.findMany({
      where: { film_id: filmId },
      select: { rating: true },
    });

    if (feedbacks.length === 0) return null;

    // Tính trung bình
    const total = feedbacks.reduce((sum, fb) => sum + Number(fb.rating), 0);
    const average = (total / feedbacks.length).toFixed(1); // làm tròn 1 số thập phân

    // Cập nhật vào bảng films
    return await prisma.films.update({
      where: { id: filmId },
      data: { average_rating: average },
    });
  },
  async listByFavorites() {
  return await prisma.films.findMany({
    include: {
      _count: {
        select: { favorites: true }, // đếm số favorites liên quan
      },
    },
    orderBy: {
      favorites: { _count: "desc" }, // sắp xếp từ nhiều đến ít
    },
  });
},
async listByViews() {
  return await prisma.films.findMany({
    orderBy: { view_count: "desc" },
    take: 20, // giới hạn số phim nếu muốn
  });
},
async listByRating() {
  return await prisma.films.findMany({
    orderBy: { average_rating: "desc" },
    take: 20,
  });
},
async listRecommended(userId) {
  //lấy random
  return await prisma.films.findMany({
    orderBy: { id: "desc" },
    take: 20,
  });
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

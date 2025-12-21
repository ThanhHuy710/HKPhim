import {
  responseSuccess,
  responseError,
} from "../common/helper/function.helper.js";
import { filmsService } from "../services/films.services.js";

export const filmsController = {
  async findSeasons(req, res, next) {
    try {
      const filmId = Number(req.params.id);
      if (!filmId) {
        return res.status(400).json(responseError("Invalid film id", 400));
      }

      const film = await filmsService.findById(filmId);
      if (!film) {
        return res.status(404).json(responseError("Film not found", 404));
      }

      const key = film.original_name ?? film.title;
      if (!key) {
        return res.status(200).json(responseSuccess([], "No grouping key"));
      }

      const limit = parseInt(req.query.limit) || 50;
      const offset = parseInt(req.query.offset) || 0;

      const seasons = await filmsService.findByFilter({
        filter: { original_name: key },
        limit,
        offset,
      });

      const exists = req.params.season
        ? seasons.some((s) => Number(s.season) === Number(req.params.season))
        : true;

      const response = responseSuccess(
        seasons,
        exists ? "OK" : `Season #${req.params.season} not found`
      );
      return res.status(response.statusCode).json(response);
    } catch (err) {
      return res.status(500).json(responseError(err.message, 500, err.stack));
    }
  },
  //lọc theo nhiều tiêu chí
   async getByCriteria(req, res, next) {
  try {
    const {
      country,
      is_series,   // giữ lại cái này
      genre,
      version,
      year,
      age_rating,
      limit,
      offset,
    } = req.query;

    console.log(req.query);

    const result = await filmsService.findByCriteria({
      country,
      is_series,
      genre,
      version,
      year,
      age_rating,
      limit: parseInt(limit) || 50,
      offset: parseInt(offset) || 0,
    });

    const response = responseSuccess(
      result,
      "Get films by criteria successfully"
    );
    res.status(response.statusCode).json(response);
  } catch (err) {
    const response = responseError(err.message, 500, err.stack);
    res.status(response.statusCode).json(response);
  }
},
  //theo phim lẻ
  async findSingleMovies(req, res, next) {
    try {
      const limit = parseInt(req.query.limit) || 50;
      const offset = parseInt(req.query.offset) || 0;

      const result = await filmsService.findSingleMovies(limit, offset);
      const response = responseSuccess(result, "Get single movies successfully");
      res.status(response.statusCode).json(response);
    } catch (err) {
      const response = responseError(err.message, 500, err.stack);
      res.status(response.statusCode).json(response);
    }
  },
  //theo phim bộ
  async findSeries(req, res, next) {
    try {
      const limit = parseInt(req.query.limit) || 50;
      const offset = parseInt(req.query.offset) || 0;

      const result = await filmsService.findSeries(limit, offset);
      const response = responseSuccess(result, "Get series movies successfully");
      res.status(response.statusCode).json(response);
    } catch (err) {
      const response = responseError(err.message, 500, err.stack);
      res.status(response.statusCode).json(response);
    }
  },
  //theo findByGenre
  async findByGenre(req, res, next) {
    try {
      const genreName = req.params.genre;
      const limit = parseInt(req.query.limit) || 50;
      const offset = parseInt(req.query.offset) || 0;
      const result = await filmsService.findByGenre(genreName, limit, offset);
      const response = responseSuccess(result, "Get movies by genre successfully");
      res.status(response.statusCode).json(response);
    } catch (err) {
      const response = responseError(err.message, 500, err.stack);
      res.status(response.statusCode).json(response);
    }
  },
  //theo quốc gia
  async findByCountry(req, res, next) {
    try {
      const countryName = req.params.country;
      const limit = parseInt(req.query.limit) || 50;
      const offset = parseInt(req.query.offset) || 0;
      const result = await filmsService.findByFilter({
        filter: { country: countryName },
        limit,
        offset,
      });
      const response = responseSuccess(result, "Get movies by country successfully");
      res.status(response.statusCode).json(response);
    } catch (err) {
      const response = responseError(err.message, 500, err.stack);
      res.status(response.statusCode).json(response);
    }
  },
  //theo tên
  async findByTitle(req, res, next) {
     try {
      const title = req.params.title;
      const limit = parseInt(req.query.limit) || 50;
      const offset = parseInt(req.query.offset) || 0;
      const result = await filmsService.findByTitle(title, limit, offset);
      const response = responseSuccess(result, "Get movies by title successfully");
      res.status(response.statusCode).json(response);
    } catch (err) {
      const response = responseError(err.message, 500, err.stack);
      res.status(response.statusCode).json(response);
    }
  },
  //theo diễn viên
  async findByActor(req, res, next) {
     try {
      const actor = req.params.actor;
      const limit = parseInt(req.query.limit) || 50;
      const offset = parseInt(req.query.offset) || 0;
      const result = await filmsService.findByActor(actor, limit, offset);
      const response = responseSuccess(result, "Get Actor by title successfully");
      res.status(response.statusCode).json(response);
    } catch (err) {
      const response = responseError(err.message, 500, err.stack);
      res.status(response.statusCode).json(response);
    }
  },
  //theo đạo diễn
  async findByDirector(req, res, next) {
     try {
      const director = req.params.director;
      const limit = parseInt(req.query.limit) || 50;
      const offset = parseInt(req.query.offset) || 0;
      const result = await filmsService.findByDirector(director, limit, offset);
      const response = responseSuccess(result, "Get Director by title successfully");
      res.status(response.statusCode).json(response);
    } catch (err) {
      const response = responseError(err.message, 500, err.stack);
      res.status(response.statusCode).json(response);
    }
  },
  //lấy danh sách diễn viên khi tìm kiếm
  async findActors(req, res, next) {
    try {
      const keyword = req.params.actor; // lấy từ URL /films/actors/:actor
      const limit = parseInt(req.query.limit) || 50;
      const offset = parseInt(req.query.offset) || 0;

      // lấy danh sách phim có chứa keyword trong actor
      const films = await filmsService.findByActor(keyword, limit, offset);

      // tách chuỗi actor thành mảng, lọc theo keyword
      const actors = films
        .flatMap(f => f.actor.split(","))   // tách thành mảng
        .map(a => a.trim())                 // bỏ khoảng trắng
        .filter(a => a.toLowerCase().includes(keyword.toLowerCase()));

      // loại bỏ trùng lặp
      const uniqueActors = [...new Set(actors)];

      const response = responseSuccess(uniqueActors, "Get actors successfully");
      res.status(response.statusCode).json(response);
    } catch (err) {
      const response = responseError(err.message, 500, err.stack);
      res.status(response.statusCode).json(response);
    }
  },
  //lấy danh sách đạo diễn khi tìm kiếm
  async findDirectors(req, res, next) {
    try {
      const keyword = req.params.director; // lấy từ URL /films/directors/:director
      const limit = parseInt(req.query.limit) || 50;
      const offset = parseInt(req.query.offset) || 0;

      // lấy danh sách phim có chứa keyword trong director
      const films = await filmsService.findByDirector(keyword, limit, offset);

      // tách chuỗi director thành mảng, lọc theo keyword
      const directors = films
        .flatMap(f => f.directeur.split(","))   // tách thành mảng
        .map(d => d.trim())                 // bỏ khoảng trắng
        .filter(d => d.toLowerCase().includes(keyword.toLowerCase()));

      // loại bỏ trùng lặp
      const uniqueDirectors = [...new Set(directors)];

      const response = responseSuccess(uniqueDirectors, "Get directors successfully");
      res.status(response.statusCode).json(response);
    } catch (err) {
      const response = responseError(err.message, 500, err.stack);
      res.status(response.statusCode).json(response);
    }
  },
  //theo năm phát hành
  async findByYear(req, res, next) {
    try {
      const year = req.params.year;
      const limit = parseInt(req.query.limit) || 50;
      const offset = parseInt(req.query.offset) || 0;
      const result = await filmsService.findByYear(year, limit, offset);
      const response = responseSuccess(result, "Get movies by year successfully");
      res.status(response.statusCode).json(response);
    } catch (err) {
      const response = responseError(err.message, 500, err.stack);
      res.status(response.statusCode).json(response);
    }
  },
  //theo quốc gia
    async findByCountry(req, res, next) {
  try {
    const country = req.params.country; 
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;

    const result = await filmsService.findByCountry(country, limit, offset);

    const response = responseSuccess(result, "Get movies by country successfully");
    res.status(response.statusCode).json(response);
  } catch (err) {
    const response = responseError(err.message, 500, err.stack);
    res.status(response.statusCode).json(response);
  }
},
  listByViews: async (req, res) => {
  const result = await filmsService.listByViews();
  res.json(responseSuccess(result, "List films by views"));
},

listByRating: async (req, res) => {
  const result = await filmsService.listByRating();
  res.json(responseSuccess(result, "List films by rating"));
},

listRecommended: async (req, res) => {
  const result = await filmsService.listRecommended(req.user?.id);
  res.json(responseSuccess(result, "List recommended films"));
},

listByFavorites: async (req, res) => {
  const result = await filmsService.listByFavorites();
  res.json(responseSuccess(result, "List films by favorites"));
},

  
  // CRUD
  create: async function (req, res, next) {
    const result = await filmsService.create(req);
    const response = responseSuccess(result, `Create films successfully`);
    res.status(response.statusCode).json(response);
  },

  findAll: async function (req, res, next) {
    const result = await filmsService.findAll(req);
    const response = responseSuccess(result, `Get all films successfully`);
    res.status(response.statusCode).json(response);
  },

  findOne: async function (req, res, next) {
    const result = await filmsService.findOne(req);
    const response = responseSuccess(
      result,
      `Get films #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  update: async function (req, res, next) {
    const result = await filmsService.update(req);
    const response = responseSuccess(
      result,
      `Update films #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  remove: async function (req, res, next) {
    const result = await filmsService.remove(req);
    const response = responseSuccess(
      result,
      `Remove films #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  }
};

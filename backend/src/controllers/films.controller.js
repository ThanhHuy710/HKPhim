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
      const { country, type, rating, genre, version, year, limit, offset } =
        req.query;

      const result = await filmsService.findByCriteria({
        country,
        type,
        rating,
        genre,
        version,
        year,
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

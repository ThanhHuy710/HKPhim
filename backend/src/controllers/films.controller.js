import { responseSuccess } from "../common/helper/function.helper.js";
import { filmsService } from "../services/films.services.js";

export const filmsController = {
  //find list season
  // filmsController.js
  findSeasons: async function (req, res, next) {
    try {
      const filmId = Number(req.params.id);
      const requestedSeason = req.params.season
        ? Number(req.params.season)
        : null;
      if (!filmId)
        return res
          .status(400)
          .json({ success: false, message: "Invalid film id" });

      const film = await filmsService.findById(filmId);
      if (!film)
        return res
          .status(404)
          .json({ success: false, message: "Film not found" });

      const key = film.original_name;
      if (!key)
        return res
          .status(200)
          .json({ success: true, data: [], message: "No grouping key" });

      const seasons = await filmsService.findAll({
        filter: { original_name: key },
        orderBy: { season: "asc" },
      });

      const exists =
        requestedSeason !== null
          ? seasons.some((s) => Number(s.season) === requestedSeason)
          : true;

      return res.status(200).json({
        success: true,
        data: seasons,
        currentSeason:
          exists && requestedSeason !== null ? requestedSeason : null,
        message: exists ? "OK" : `Season #${requestedSeason} not found`,
      });
    } catch (err) {
      next(err);
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
  },
};

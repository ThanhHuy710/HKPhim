import { responseSuccess } from "../common/helper/function.helper.js";
import { favoritesService } from "../services/favorites.services.js";

export const favoritesController = {
  // CRUD
  create: async function (req, res, next) {
    const result = await favoritesService.create(req);
    const response = responseSuccess(result, `Create favorites successfully`);
    res.status(response.statusCode).json(response);
  },

  findAll: async function (req, res, next) {
    const result = await favoritesService.findAll(req);
    const response = responseSuccess(result, `Get all favorites successfully`);
    res.status(response.statusCode).json(response);
  },

  findOne: async function (req, res, next) {
    const result = await favoritesService.findOne(req);
    const response = responseSuccess(result, `Get favorites #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  update: async function (req, res, next) {
    const result = await favoritesService.update(req);
    const response = responseSuccess(result, `Update favorites #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  remove: async function (req, res, next) {
    const result = await favoritesService.remove(req);
    const response = responseSuccess(result, `Remove favorites #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },
};

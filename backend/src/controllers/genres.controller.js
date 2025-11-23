import { responseSuccess } from "../common/helper/function.helper.js";
import { genresService } from "../services/genres.services.js";

export const genresController = {

   
   // CRUD
    create: async function (req, res, next) {
      const result = await genresService.create(req);
      const response = responseSuccess(result, `Create genres successfully`);
      res.status(response.statusCode).json(response);
   },

   findAll: async function (req, res, next) {
      const result = await genresService.findAll(req);
      const response = responseSuccess(result, `Get all genres successfully`);
      res.status(response.statusCode).json(response);
   },

   findOne: async function (req, res, next) {
      const result = await genresService.findOne(req);
      const response = responseSuccess(result, `Get genres #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   update: async function (req, res, next) {
      const result = await genresService.update(req);
      const response = responseSuccess(result, `Update genres #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   remove: async function (req, res, next) {
      const result = await genresService.remove(req);
      const response = responseSuccess(result, `Remove genres #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   }
};
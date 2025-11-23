import { responseSuccess } from "../common/helper/function.helper.js";
import { filmsService } from "../services/films.services.js";

export const filmsController = {

   
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
      const response = responseSuccess(result, `Get films #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   update: async function (req, res, next) {
      const result = await filmsService.update(req);
      const response = responseSuccess(result, `Update films #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   remove: async function (req, res, next) {
      const result = await filmsService.remove(req);
      const response = responseSuccess(result, `Remove films #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   }
};
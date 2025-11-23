import { responseSuccess } from "../common/helper/function.helper.js";
import { episodesService } from "../services/episodes.services.js";

export const episodesController = {

   
   // CRUD
    create: async function (req, res, next) {
      const result = await episodesService.create(req);
      const response = responseSuccess(result, `Create episodes successfully`);
      res.status(response.statusCode).json(response);
   },

   findAll: async function (req, res, next) {
      const result = await episodesService.findAll(req);
      const response = responseSuccess(result, `Get all episodes successfully`);
      res.status(response.statusCode).json(response);
   },

   findOne: async function (req, res, next) {
      const result = await episodesService.findOne(req);
      const response = responseSuccess(result, `Get episodes #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   update: async function (req, res, next) {
      const result = await episodesService.update(req);
      const response = responseSuccess(result, `Update episodes #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   remove: async function (req, res, next) {
      const result = await episodesService.remove(req);
      const response = responseSuccess(result, `Remove episodes #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   }
};
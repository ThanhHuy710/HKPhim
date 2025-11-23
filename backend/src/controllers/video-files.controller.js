import { responseSuccess } from "../common/helper/function.helper.js";
import { video_filesService } from "../services/video_files.services.js";

export const video_filesController = {

   
   // CRUD
    create: async function (req, res, next) {
      const result = await video_filesService.create(req);
      const response = responseSuccess(result, `Create video_files successfully`);
      res.status(response.statusCode).json(response);
   },

   findAll: async function (req, res, next) {
      const result = await video_filesService.findAll(req);
      const response = responseSuccess(result, `Get all video_files successfully`);
      res.status(response.statusCode).json(response);
   },

   findOne: async function (req, res, next) {
      const result = await video_filesService.findOne(req);
      const response = responseSuccess(result, `Get video_files #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   update: async function (req, res, next) {
      const result = await video_filesService.update(req);
      const response = responseSuccess(result, `Update video_files #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   remove: async function (req, res, next) {
      const result = await video_filesService.remove(req);
      const response = responseSuccess(result, `Remove video_files #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   }
};
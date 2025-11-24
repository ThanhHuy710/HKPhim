import { responseSuccess } from "../common/helper/function.helper.js";
import { videoFilesService } from "../services/video_files.services.js";

export const videoFilesController = {

   // CRUD
   create: async function (req, res, next) {
      const result = await videoFilesService.create(req);
      const response = responseSuccess(result, `Create video file successfully`);
      res.status(response.statusCode).json(response);
   },

   findAll: async function (req, res, next) {
      const result = await videoFilesService.findAll(req);
      const response = responseSuccess(result, `Get all video files successfully`);
      res.status(response.statusCode).json(response);
   },

   findOne: async function (req, res, next) {
      const result = await videoFilesService.findOne(req);
      const response = responseSuccess(result, `Get video file #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   update: async function (req, res, next) {
      const result = await videoFilesService.update(req);
      const response = responseSuccess(result, `Update video file #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   remove: async function (req, res, next) {
      const result = await videoFilesService.remove(req);
      const response = responseSuccess(result, `Remove video file #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   }
};
import { responseSuccess } from "../common/helper/function.helper.js";
import { viewsService } from "../services/views.services.js";

export const viewsController = {
  // CRUD
  create: async function (req, res, next) {
    const result = await viewsService.create(req);
    const response = responseSuccess(result, `Create views successfully`);
    res.status(response.statusCode).json(response);
  },

  findAll: async function (req, res, next) {
    const result = await viewsService.findAll(req);
    const response = responseSuccess(result, `Get all views successfully`);
    res.status(response.statusCode).json(response);
  },

  findOne: async function (req, res, next) {
    const result = await viewsService.findOne(req);
    const response = responseSuccess(result, `Get views #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  update: async function (req, res, next) {
    const result = await viewsService.update(req);
    const response = responseSuccess(result, `Update views #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  remove: async function (req, res, next) {
    const result = await viewsService.remove(req);
    const response = responseSuccess(result, `Remove views #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },
    findByUserId: async function (req, res, next) {
      try {
        const views = await viewsService.findByUserId(req);
        // chỉ lấy danh sách phim từ views
        const films = views.map((v) => v.films);
        const response = responseSuccess(films, "Get views successfully");
        res.status(response.statusCode).json(response);
      } catch (error) {
        next(error);
      }
    },
};

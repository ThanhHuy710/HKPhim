import { responseSuccess } from "../common/helper/function.helper.js";
import { feedbacksService } from "../services/feedbacks.services.js";

export const feedbacksController = {
  // CRUD
  create: async function (req, res, next) {
    const result = await feedbacksService.create(req);
    const response = responseSuccess(result, `Create feedbacks successfully`);
    res.status(response.statusCode).json(response);
  },

  findAll: async function (req, res, next) {
    const result = await feedbacksService.findAll(req);
    const response = responseSuccess(result, `Get all feedbacks successfully`);
    res.status(response.statusCode).json(response);
  },

  findOne: async function (req, res, next) {
    const result = await feedbacksService.findOne(req);
    const response = responseSuccess(result, `Get feedbacks #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  update: async function (req, res, next) {
    const result = await feedbacksService.update(req);
    const response = responseSuccess(result, `Update feedbacks #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  remove: async function (req, res, next) {
    const result = await feedbacksService.remove(req);
    const response = responseSuccess(result, `Remove feedbacks #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },
};

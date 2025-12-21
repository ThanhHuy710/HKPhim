import { responseSuccess } from "../common/helper/function.helper.js";
import { plansService } from "../services/plans.services.js";

export const plansController = {
  create: async (req, res, next) => {
    const result = await plansService.create(req);
    const response = responseSuccess(result, `Create plan successfully`);
    res.status(response.statusCode).json(response);
  },

  findAll: async (req, res, next) => {
    const result = await plansService.findAll(req);
    const response = responseSuccess(result, `Get all plans successfully`);
    res.status(response.statusCode).json(response);
  },

  findOne: async (req, res, next) => {
    const result = await plansService.findOne(req);
    const response = responseSuccess(result, `Get plan #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  update: async (req, res, next) => {
    const result = await plansService.update(req);
    const response = responseSuccess(result, `Update plan #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  remove: async (req, res, next) => {
    const result = await plansService.remove(req);
    const response = responseSuccess(result, `Remove plan #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },
};

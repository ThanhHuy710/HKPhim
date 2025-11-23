import { responseSuccess } from "../common/helper/function.helper.js";
import { cartService } from "../services/cart.services.js";

export const cartController = {

   
   // CRUD
    create: async function (req, res, next) {
      const result = await cartService.create(req);
      const response = responseSuccess(result, `Create cart successfully`);
      res.status(response.statusCode).json(response);
   },

   findAll: async function (req, res, next) {
      const result = await cartService.findAll(req);
      const response = responseSuccess(result, `Get all cart successfully`);
      res.status(response.statusCode).json(response);
   },

   findOne: async function (req, res, next) {
      const result = await cartService.findOne(req);
      const response = responseSuccess(result, `Get cart #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   update: async function (req, res, next) {
      const result = await cartService.update(req);
      const response = responseSuccess(result, `Update cart #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   remove: async function (req, res, next) {
      const result = await cartService.remove(req);
      const response = responseSuccess(result, `Remove cart #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   }
};
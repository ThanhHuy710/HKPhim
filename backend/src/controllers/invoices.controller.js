import { responseSuccess } from "../common/helper/function.helper.js";
import { invoicesService } from "../services/invoices.services.js";

export const invoicesController = {

   
   // CRUD
    create: async function (req, res, next) {
      const result = await invoicesService.create(req);
      const response = responseSuccess(result, `Create invoices successfully`);
      res.status(response.statusCode).json(response);
   },

   findAll: async function (req, res, next) {
      const result = await invoicesService.findAll(req);
      const response = responseSuccess(result, `Get all invoices successfully`);
      res.status(response.statusCode).json(response);
   },

   findOne: async function (req, res, next) {
      const result = await invoicesService.findOne(req);
      const response = responseSuccess(result, `Get invoices #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   update: async function (req, res, next) {
      const result = await invoicesService.update(req);
      const response = responseSuccess(result, `Update invoices #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   remove: async function (req, res, next) {
      const result = await invoicesService.remove(req);
      const response = responseSuccess(result, `Remove invoices #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   }
};
import { responseSuccess } from "../common/helper/function.helper.js";
import { usersService } from "../services/users.services.js";

export const usersController = {
  create: async (req, res, next) => {
    const result = await usersService.create(req);
    const response = responseSuccess(result, `Create user successfully`);
    res.status(response.statusCode).json(response);
  },

  findAll: async (req, res, next) => {
    const result = await usersService.findAll(req);
    const response = responseSuccess(result, `Get all users successfully`);
    res.status(response.statusCode).json(response);
  },

  findOne: async (req, res, next) => {
    const result = await usersService.findOne(req);
    const response = responseSuccess(result, `Get user #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },

  update: async (req, res, next) => {
    try {
      const result = await usersService.update(req);
      const response = responseSuccess(result, `Update user #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      console.error("Update user error:", error);
      res.status(500).json({ 
        success: false, 
        message: error.message || "Lỗi khi cập nhật người dùng",
        error: error.toString()
      });
    }
  },

  updatePassword: async (req, res, next) => {
    try {
      const result = await usersService.updatePassword(req);
      const response = responseSuccess(result, `Update password successfully`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      console.error("Update password error:", error);
      res.status(500).json({ 
        success: false, 
        message: error.message || "Lỗi khi đổi mật khẩu",
        error: error.toString()
      });
    }
  },

  remove: async (req, res, next) => {
    const result = await usersService.remove(req);
    const response = responseSuccess(result, `Remove user #${req.params.id} successfully`);
    res.status(response.statusCode).json(response);
  },
};

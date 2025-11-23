import express from 'express';
import { authController } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.get('/', authController.findAll);

// Tạo route CRUD
authRouter.post('/', authController.create);
authRouter.get('/', authController.findAll);
authRouter.get('/:id', authController.findOne);
authRouter.patch('/:id', authController.update);
authRouter.delete('/:id', authController.remove);

export default authRouter;


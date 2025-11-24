import express from 'express';
import { usersController } from '../controllers/users.controller.js';

const usersRouter = express.Router();


// Tạo route CRUD
usersRouter.post('/', usersController.create);
usersRouter.get('/', usersController.findAll);
usersRouter.get('/:id', usersController.findOne);
usersRouter.patch('/:id', usersController.update);
usersRouter.delete('/:id', usersController.remove);

export default usersRouter;


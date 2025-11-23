import express from 'express';
import { viewsController } from '../controllers/views.controller.js';

const viewsRouter = express.Router();

viewsRouter.get('/', viewsController.findAll);

// Tạo route CRUD
viewsRouter.post('/', viewsController.create);
viewsRouter.get('/', viewsController.findAll);
viewsRouter.get('/:id', viewsController.findOne);
viewsRouter.patch('/:id', viewsController.update);
viewsRouter.delete('/:id', viewsController.remove);

export default viewsRouter;


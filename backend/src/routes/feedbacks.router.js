import express from 'express';
import { feedbacksController } from '../controllers/feedbacks.controller.js';

const feedbacksRouter = express.Router();

feedbacksRouter.get('/', feedbacksController.findAll);

// Tạo route CRUD
feedbacksRouter.post('/', feedbacksController.create);
feedbacksRouter.get('/', feedbacksController.findAll);
feedbacksRouter.get('/:id', feedbacksController.findOne);
feedbacksRouter.patch('/:id', feedbacksController.update);
feedbacksRouter.delete('/:id', feedbacksController.remove);

export default feedbacksRouter;


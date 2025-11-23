import express from 'express';
import { episodesController } from '../controllers/episodes.controller.js';

const episodesRouter = express.Router();

episodesRouter.get('/', episodesController.findAll);

// Tạo route CRUD
episodesRouter.post('/', episodesController.create);
episodesRouter.get('/', episodesController.findAll);
episodesRouter.get('/:id', episodesController.findOne);
episodesRouter.patch('/:id', episodesController.update);
episodesRouter.delete('/:id', episodesController.remove);

export default episodesRouter;


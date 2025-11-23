import express from 'express';
import { favoritesController } from '../controllers/favorites.controller.js';

const favoritesRouter = express.Router();

favoritesRouter.get('/', favoritesController.findAll);

// Tạo route CRUD
favoritesRouter.post('/', favoritesController.create);
favoritesRouter.get('/', favoritesController.findAll);
favoritesRouter.get('/:id', favoritesController.findOne);
favoritesRouter.patch('/:id', favoritesController.update);
favoritesRouter.delete('/:id', favoritesController.remove);

export default favoritesRouter;


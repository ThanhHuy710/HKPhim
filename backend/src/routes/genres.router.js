import express from 'express';
import { genresController } from '../controllers/genres.controller.js';

const genresRouter = express.Router();

genresRouter.get('/', genresController.findAll);

// Tạo route CRUD
genresRouter.post('/', genresController.create);
genresRouter.get('/', genresController.findAll);
genresRouter.get('/:id', genresController.findOne);
genresRouter.patch('/:id', genresController.update);
genresRouter.delete('/:id', genresController.remove);

export default genresRouter;


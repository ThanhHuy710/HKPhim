import express from 'express';
import { videoFilesController } from '../controllers/video-files.controller.js';

const videoFilesRouter = express.Router();


// Tạo route CRUD
videoFilesRouter.post('/', videoFilesController.create);
videoFilesRouter.get('/', videoFilesController.findAll);
videoFilesRouter.get('/:id', videoFilesController.findOne);
videoFilesRouter.patch('/:id', videoFilesController.update);
videoFilesRouter.delete('/:id', videoFilesController.remove);

export default videoFilesRouter;


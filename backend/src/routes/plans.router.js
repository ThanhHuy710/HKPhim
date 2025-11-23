import express from 'express';
import { plansController } from '../controllers/plans.controller.js';

const plansRouter = express.Router();

plansRouter.get('/', plansController.findAll);

// Tạo route CRUD
plansRouter.post('/', plansController.create);
plansRouter.get('/', plansController.findAll);
plansRouter.get('/:id', plansController.findOne);
plansRouter.patch('/:id', plansController.update);
plansRouter.delete('/:id', plansController.remove);

export default plansRouter;


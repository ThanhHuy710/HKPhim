import express from 'express';
import { invoicesController } from '../controllers/invoices.controller.js';

const invoicesRouter = express.Router();


// Tạo route CRUD
invoicesRouter.post('/', invoicesController.create);
invoicesRouter.get('/', invoicesController.findAll);
invoicesRouter.get('/:id', invoicesController.findOne);
invoicesRouter.patch('/:id', invoicesController.update);
invoicesRouter.delete('/:id', invoicesController.remove);

export default invoicesRouter;


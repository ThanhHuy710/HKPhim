import express from 'express';
import filmsRouter from './films.router.js';


const rootRouter=express.Router();

rootRouter.use('/films', filmsRouter);
export default rootRouter;
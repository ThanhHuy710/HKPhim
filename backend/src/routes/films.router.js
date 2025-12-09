import express from "express";
import { filmsController } from "../controllers/films.controller.js";

const filmsRouter = express.Router();

filmsRouter.get("/:id/seasons", filmsController.findSeasons);
filmsRouter.get("/criteria", filmsController.getByCriteria);
filmsRouter.get("/single-movies",filmsController.findSingleMovies);
filmsRouter.get("/series", filmsController.findSeries);
filmsRouter.get("/genre/:genre", filmsController.findByGenre);
filmsRouter.get("/title/:title", filmsController.findByTitle);
filmsRouter.get("/year/:year", filmsController.findByYear);
filmsRouter.get("/country/:country", filmsController.findByCountry);

// Tạo route CRUD
filmsRouter.post("/", filmsController.create);
filmsRouter.get("/", filmsController.findAll);
filmsRouter.get("/:id", filmsController.findOne);
filmsRouter.patch("/:id", filmsController.update);
filmsRouter.delete("/:id", filmsController.remove);

export default filmsRouter;

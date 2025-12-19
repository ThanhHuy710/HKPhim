import express from "express";
import { filmsController } from "../controllers/films.controller.js";

const filmsRouter = express.Router();

// Các route cụ thể trước
filmsRouter.get("/criteria", filmsController.getByCriteria);
filmsRouter.get("/single-movies", filmsController.findSingleMovies);
filmsRouter.get("/series", filmsController.findSeries);
filmsRouter.get("/genre/:genre", filmsController.findByGenre);
filmsRouter.get("/country/:country", filmsController.findByCountry);
filmsRouter.get("/title/:title", filmsController.findByTitle);
filmsRouter.get("/actor/:actor", filmsController.findByActor);      // danh sách phim theo actor
filmsRouter.get("/actors/:actor", filmsController.findActors);      // danh sách diễn viên theo keyword
filmsRouter.get("/year/:year", filmsController.findByYear);
filmsRouter.get("/views", filmsController.listByViews);
filmsRouter.get("/rating", filmsController.listByRating);
filmsRouter.get("/recommended", filmsController.listRecommended);
filmsRouter.get("/favorites", filmsController.listByFavorites);

// Route động đặt sau cùng
filmsRouter.get("/:id/seasons", filmsController.findSeasons);
filmsRouter.get("/:id", filmsController.findOne);

// CRUD
filmsRouter.post("/", filmsController.create);
filmsRouter.get("/", filmsController.findAll);
filmsRouter.patch("/:id", filmsController.update);
filmsRouter.delete("/:id", filmsController.remove);

export default filmsRouter;

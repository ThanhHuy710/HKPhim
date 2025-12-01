import express from "express";
import { filmsController } from "../controllers/films.controller.js";

const filmsRouter = express.Router();

// Tạo route CRUD
filmsRouter.post("/", filmsController.create);
filmsRouter.get("/", filmsController.findAll);
filmsRouter.get("/:id", filmsController.findOne);
filmsRouter.patch("/:id", filmsController.update);
filmsRouter.delete("/:id", filmsController.remove);

export default filmsRouter;

import express from "express";
import { favoritesController } from "../controllers/favorites.controller.js";

const favoritesRouter = express.Router();

// Tạo route CRUD
favoritesRouter.post("/", favoritesController.create);
favoritesRouter.get("/", favoritesController.findAll);
favoritesRouter.get("/:id", favoritesController.findOne);
favoritesRouter.patch("/:id", favoritesController.update);
favoritesRouter.delete("/:id", favoritesController.remove);
favoritesRouter.get("/user/:userId", favoritesController.findByUserId);
favoritesRouter.get("/:filmId/:userId", favoritesController.findbyFilmIdAndUserId);
export default favoritesRouter;

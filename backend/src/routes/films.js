import express from "express";
import { listFilms } from "../controllers/filmsController.js";
const router = express.Router();
router.get("/", listFilms);
export default router;

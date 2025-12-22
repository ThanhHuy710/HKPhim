import express from "express";
import { PrismaClient } from "../common/prisma/generated/prisma/index.js";

const filmGenresRouter = express.Router();
const prisma = new PrismaClient();

// Create film_genre relationship
filmGenresRouter.post("/", async (req, res) => {
  try {
    const { film_id, genres_id } = req.body;
    const result = await prisma.film_genres.create({
      data: { film_id, genres_id },
    });
    res.status(201).json({
      statusCode: 201,
      message: "Created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    });
  }
});

// Delete all genres for a film
filmGenresRouter.delete("/film/:filmId", async (req, res) => {
  try {
    const filmId = parseInt(req.params.filmId);
    await prisma.film_genres.deleteMany({
      where: { film_id: filmId },
    });
    res.status(200).json({
      statusCode: 200,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    });
  }
});

export default filmGenresRouter;

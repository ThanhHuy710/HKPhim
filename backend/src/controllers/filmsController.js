import FilmRepository from "../repositories/FilmRepository.js";
import FilmService from "../services/FilmService.js"; 

const filmRepo = new FilmRepository();
const filmService = new FilmService ? new FilmService(filmRepo) : null;

export const listFilms = async (req, res) => {
  try {
    const films = filmService ? await filmService.list(req.query) : await filmRepo.findAll(req.query);
    res.status(200).json({ films });
  } catch (err) {
    console.error(err);
    res.status(err.status || 500).json({ message: err.message || "Server error" });
  }
};

export const getFilm = async (req, res) => {
  try {
    const film = filmService ? await filmService.get(req.params.id) : await filmRepo.findById(req.params.id);
    if (!film) return res.status(404).json({ message: "Film not found" });
    res.json({ film });
  } catch (err) {
    console.error(err);
    res.status(err.status || 500).json({ message: err.message || "Server error" });
  }
};

export const createFilm = async (req, res) => {
  try {
    const film = filmService ? await filmService.create(req.body) : await filmRepo.create(req.body);
    res.status(201).json({ film });
  } catch (err) {
    console.error(err);
    res.status(err.status || 500).json({ message: err.message || "Server error" });
  }
};

export const incrementView = async (req, res) => {
  try {
    const result = await filmRepo.incrementViewCountTransactional(req.params.id);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || "Server error" });
  }
};

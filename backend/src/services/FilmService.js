export default class FilmService {
  constructor(filmRepo) {
    this.repo = filmRepo;
  }

  async list(query) {
    const limit = Math.min(Number(query.limit || 50), 200);
    const offset = Number(query.offset || 0);
    return this.repo.findAll({ limit, offset });
  }

  async get(id) {
    const film = await this.repo.findById(id);
    if (!film) throw { status: 404, message: "Film not found" };
    return film;
  }

  async create(payload) {
    if (!payload.title) throw { status: 400, message: "title required" };
    return this.repo.create(payload);
  }
}

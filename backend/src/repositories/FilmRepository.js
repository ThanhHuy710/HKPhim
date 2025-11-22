import Film from "../models/Film.js";
import { connectDB } from "../config/db.js";

export default class FilmRepository {
  constructor() {
    this.db = connectDB(); // trả về pool
  }

  async findAll({ limit = 50, offset = 0 } = {}) {
    const sql = `SELECT * FROM films ORDER BY created_at DESC LIMIT ? OFFSET ?`;
    const [rows] = await this.db.execute(sql, [Number(limit), Number(offset)]);
    return rows.map(row => new Film(row));
  }

  async findById(id) {
    const sql = `SELECT * FROM films WHERE id = ? LIMIT 1`;
    const [rows] = await this.db.execute(sql, [Number(id)]);
    if (!rows[0]) return null;
    return new Film(rows[0]);
  }

  async create(data) {
    const sql = `INSERT INTO films
      (title, poster_url, description, year, country, duration, poster_video_url, actor, is_series, directeur, age_rating, view_count, average_rating)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [
      data.title ?? null,
      data.poster_url ?? null,
      data.description ?? null,
      data.year ?? null,
      data.country ?? null,
      data.duration ?? null,
      data.poster_video_url ?? null,
      data.actor ?? null,
      data.is_series ? 1 : 0,
      data.directeur ?? null,
      data.age_rating ?? null,
      data.view_count ?? 0,
      data.average_rating ?? 0.0
    ];
    const [result] = await this.db.execute(sql, params);
    return this.findById(result.insertId);
  }

  async update(id, data) {
    const fields = [];
    const params = [];
    for (const [k, v] of Object.entries(data)) {
      fields.push(`${k} = ?`);
      params.push(v);
    }
    if (fields.length === 0) return this.findById(id);
    params.push(Number(id));
    const sql = `UPDATE films SET ${fields.join(", ")} WHERE id = ?`;
    await this.db.execute(sql, params);
    return this.findById(id);
  }

  async delete(id) {
    const film = await this.findById(id);
    if (!film) return null;
    await this.db.execute(`DELETE FROM films WHERE id = ?`, [Number(id)]);
    return film;
  }

  // Ví dụ transaction: tăng view_count an toàn
  async incrementViewCountTransactional(id) {
    const conn = await this.db.getConnection();
    try {
      await conn.beginTransaction();
      const [rows] = await conn.execute(`SELECT view_count FROM films WHERE id = ? FOR UPDATE`, [Number(id)]);
      if (!rows[0]) throw new Error("Not found");
      const newCount = (rows[0].view_count || 0) + 1;
      await conn.execute(`UPDATE films SET view_count = ? WHERE id = ?`, [newCount, Number(id)]);
      await conn.commit();
      return { id: Number(id), view_count: newCount };
    } catch (err) {
      await conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  }
}

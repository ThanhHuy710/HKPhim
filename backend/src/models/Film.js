// src/models/Film.js
export default class Film {
  constructor({
    id, title, poster_url, description, year,
    country, duration, poster_video_url, actor,
    is_series, directeur, age_rating, created_at,
    updated_at, view_count, average_rating
  }) {
    this.id = Number(id);
    this.title = title ?? null;
    this.poster_url = poster_url ?? null;
    this.description = description ?? null;
    this.year = year != null ? Number(year) : null;
    this.country = country ?? null;
    this.duration = duration ?? null;
    this.poster_video_url = poster_video_url ?? null;
    this.actor = actor ?? null;
    this.is_series = Boolean(is_series);
    this.directeur = directeur ?? null;
    this.age_rating = age_rating ?? null;
    this.created_at = created_at ? new Date(created_at) : null;
    this.updated_at = updated_at ? new Date(updated_at) : null;
    this.view_count = Number(view_count || 0);
    this.average_rating = Number(average_rating || 0);
  }

  get shortTitle() {
    return this.title ? this.title.split(":")[0] : "";
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      poster_url: this.poster_url,
      description: this.description,
      year: this.year,
      country: this.country,
      duration: this.duration,
      poster_video_url: this.poster_video_url,
      actor: this.actor,
      is_series: this.is_series,
      directeur: this.directeur,
      age_rating: this.age_rating,
      created_at: this.created_at,
      updated_at: this.updated_at,
      view_count: this.view_count,
      average_rating: this.average_rating
    };
  }
}

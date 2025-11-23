import { useState, useEffect } from "react";
import api from "../lib/axios";
import { toast } from "sonner";

export function useFilms(filters = {}) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const res = await api.get("/tasks", { params: filters });
        setFilms(res.data.films || []);
        setError(null);
      } catch (err) {
        setError(err.message);
        toast.error("Không thể tải danh sách phim");
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, [JSON.stringify(filters)]);

  return { films, loading, error };
}

export function useFilmDetail(id) {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchFilm = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/tasks/${id}`);
        setFilm(res.data.film);
        setError(null);
      } catch (err) {
        setError(err.message);
        toast.error("Không thể tải thông tin phim");
      } finally {
        setLoading(false);
      }
    };

    fetchFilm();
  }, [id]);

  return { film, loading, error };
}

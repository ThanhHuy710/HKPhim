import { useState, useEffect } from "react";
import { toast } from "sonner";
import api from "../lib/axios";
import Layout from "../components/layout/Layout";
import MovieCard from "../components/MovieCard";
import { useParams, useSearchParams } from "react-router";

export default function ListPage() {
  const { type } = useParams();              // lấy param từ path
  const [searchParams] = useSearchParams();  // lấy query string
  const name = searchParams.get("name");
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchFilm = async () => {
      try {
        if(name){
          const res = await api.get(`/films/${type}/${name}`);
          setFilm(res.data.data || null);
        } else {
        const res = await api.get(`/films/${type}`);
        setFilm(res.data.data || null);
        }
      } catch (error) {
        console.error("Lỗi:", error);
        toast.error("Không thể tải phim");
      } finally {
        setLoading(false);
      }
    };
  useEffect(() => {
    fetchFilm();
  }, [type, name]);
  return (
    <Layout>
      <div className="py-4 mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
          Kết quả cho:
          {type == "single-movies"
            ? " Phim lẻ"
            : type == "series"
            ? " Phim bộ"
            : type == "genre" && name
            ? ` Thể loại "${name}"`
            : type == "country" && name
            ? ` Quốc gia "${name}"`
            : ""}
        </h2>
        {film && (
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {loading ? (
              <div className="loading">Đang tìm kiếm...</div>
            ) : film.length > 0 ? (
              film.map((film) => (
                <div key={film.id}>
                  <MovieCard film={film} />
                </div>
              ))
            ) : (
              <p className="no-results">Không tìm thấy kết quả nào</p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}

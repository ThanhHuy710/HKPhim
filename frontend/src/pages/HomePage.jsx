import { useEffect, useState } from "react";
import api from "../lib/axios";
import { toast } from "sonner";
import Layout from "../components/layout/Layout";
import Banner from "../components/Banner";
import MovieRow from "../components/MovieRow";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    try {
      const res = await api.get("/films");
      setFilms(res.data.data || []);
    } catch (error) {
      console.error("Lỗi:", error);
      toast.error("Không thể tải phim");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="loading-page">Đang tải...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Banner />
      
      <div className="movie-sections">
        {/* //viewcount */}
        <MovieRow 
          title="Phim Hot" 
          films={films}
          viewAllLink="/phim-hot"
        />
        {/* //average rating */}
        <MovieRow 
          title="Đánh giá cao" 
          films={films}
          viewAllLink="/danh-gia-cao"
        />
        {/* //recommended */}
        <MovieRow 
          title="Dành cho bạn" 
          films={films}
          viewAllLink="/danh-cho-ban"
        />
        {/* //favourite */}
        <MovieRow 
          title="Top yêu thích" 
          films={films}
          viewAllLink="/top-yeu-thich"
        />
      </div>
    </Layout>
  );
}


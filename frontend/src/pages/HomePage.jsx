import { useEffect, useState } from "react";
import api from "../lib/axios";
import { toast } from "sonner";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/HeroSection";
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
      <HeroSection />
      
      <div className="movie-sections">
        <MovieRow 
          title="Phim Hot" 
          films={films.slice(0, 10)}
          viewAllLink="/phim-hot"
        />
        
        <MovieRow 
          title="Phổ Biến" 
          films={films.slice(10, 20)}
          viewAllLink="/phim-pho-bien"
        />
        
        <MovieRow 
          title="Mới Cập Nhật" 
          films={films.slice(20, 30)}
          viewAllLink="/moi-cap-nhat"
        />
      </div>
    </Layout>
  );
}


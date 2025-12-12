import { useEffect, useState } from "react";
import api from "../lib/axios";
import { toast } from "sonner";
import Layout from "../components/layout/Layout";
import Banner from "../components/Banner";
import BannerAfterLogin from "../components/BannerAfterLogin";
import MovieRow from "../components/MovieRow";
import RequireBirthdayModal from "../components/RequireBirthdayModal";
import { useAuth } from "../contexts/AuthContext";

export default function HomePage() {
  const { user, updateUser } = useAuth();
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBirthdayModal, setShowBirthdayModal] = useState(false);

  useEffect(() => {
    fetchFilms();
  }, []);

  useEffect(() => {
    // Kiểm tra nếu user đã đăng nhập và chưa có ngày sinh
    if (user && !user.birthday) {
      setShowBirthdayModal(true);
    } else {
      setShowBirthdayModal(false);
    }
  }, [user]);

  const handleBirthdayUpdate = (updatedUser) => {
    updateUser(updatedUser);
    setShowBirthdayModal(false);
  };

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
      {showBirthdayModal && (
        <RequireBirthdayModal user={user} onUpdate={handleBirthdayUpdate} />
      )}
      
      {user ? <BannerAfterLogin /> : <Banner />}
      
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


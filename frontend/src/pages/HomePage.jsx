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
  const [hotFilms, setHotFilms] = useState([]);
  const [ratingFilms, setRatingFilms] = useState([]);
  const [recommendedFilms, setRecommendedFilms] = useState([]);
  const [favoriteFilms, setFavoriteFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBirthdayModal, setShowBirthdayModal] = useState(false);

  useEffect(() => {
    fetchAllFilms();
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

  const fetchAllFilms = async () => {
    try {
      const [hotRes, ratingRes, recommendedRes, favoriteRes] = await Promise.all([
        api.get("/films/views"),
        api.get("/films/rating"),
        api.get("/films/recommended"),
        api.get("/films/favorites"),
      ]);

      setHotFilms(hotRes.data.data || []);
      setRatingFilms(ratingRes.data.data || []);
      setRecommendedFilms(recommendedRes.data.data || []);
      setFavoriteFilms(favoriteRes.data.data || []);
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
        <MovieRow 
          title="Phim Hot" 
          films={hotFilms}
          viewAllLink="views"
        />

        <MovieRow 
          title="Đánh giá cao" 
          films={ratingFilms}
          viewAllLink="rating"
        />

        <MovieRow 
          title="Dành cho bạn" 
          films={recommendedFilms}
          viewAllLink="recommended"
        />

        <MovieRow 
          title="Top yêu thích" 
          films={favoriteFilms}
          viewAllLink="favorites"
        />
      </div>
    </Layout>
  );
}

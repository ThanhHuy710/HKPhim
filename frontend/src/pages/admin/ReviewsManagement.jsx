import { useEffect, useState } from "react";
import { Star, TrendingUp, RefreshCw, Trophy } from "lucide-react";
import api from "../../lib/axios";

export default function ReviewsManagement() {
  const [reviews, setReviews] = useState([]);
  const [topRatedFilms, setTopRatedFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalReviews: 0,
    averageRating: 0,
    highestRatedFilm: null,
    totalFilmsRated: 0,
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const [reviewsRes, filmsRes] = await Promise.all([
        api.get("/feedbacks"),
        api.get("/films"),
      ]);

      const reviewsData = reviewsRes.data.data || [];
      const filmsData = filmsRes.data.data || [];
      const reviewsOnly = reviewsData.filter(review => review.rating); // Chỉ lấy những feedback có rating

      setReviews(reviewsOnly);

      // Calculate top rated films
      const filmRatings = {};
      reviewsOnly.forEach(review => {
        if (review.films?.id && review.rating) {
          if (!filmRatings[review.films.id]) {
            filmRatings[review.films.id] = {
              film: review.films,
              ratings: [],
              averageRating: 0,
            };
          }
          filmRatings[review.films.id].ratings.push(review.rating);
        }
      });

      // Calculate averages and sort
      const topFilms = Object.values(filmRatings)
        .map(item => ({
          ...item,
          averageRating: item.ratings.reduce((a, b) => a + b, 0) / item.ratings.length,
          totalReviews: item.ratings.length,
        }))
        .filter(item => item.totalReviews >= 1) // At least 1 review
        .sort((a, b) => b.averageRating - a.averageRating)
        .slice(0, 10);

      setTopRatedFilms(topFilms);

      // Calculate statistics
      const totalReviews = reviewsOnly.length;
      const averageRating = totalReviews > 0
        ? reviewsOnly.reduce((acc, r) => acc + (r.rating || 0), 0) / totalReviews
        : 0;

      setStats({
        totalReviews,
        averageRating: averageRating.toFixed(1),
        highestRatedFilm: topFilms[0] || null,
        totalFilmsRated: Object.keys(filmRatings).length,
      });
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ icon: Icon, label, value, color, subtitle }) => (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm mb-1">{label}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-gray-500 text-xs mt-1">{subtitle}</p>}
        </div>
        <div className={`p-4 rounded-xl ${color} shadow-md`}>
          <Icon size={32} className="text-white" />
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-yellow-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <Star className="text-yellow-500" />
          Quản lý đánh giá
        </h1>
        <button
          onClick={fetchReviews}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors shadow-md"
        >
          <RefreshCw size={16} />
          Làm mới
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Star}
          label="Tổng đánh giá"
          value={stats.totalReviews}
          color="bg-gradient-to-r from-yellow-500 to-orange-500"
        />
        <StatCard
          icon={TrendingUp}
          label="Đánh giá trung bình"
          value={stats.averageRating}
          color="bg-gradient-to-r from-blue-500 to-blue-600"
          subtitle="trên thang điểm 10"
        />
        <StatCard
          icon={Trophy}
          label="Phim được đánh giá cao nhất"
          value={stats.highestRatedFilm ? stats.highestRatedFilm.averageRating.toFixed(1) : "N/A"}
          color="bg-gradient-to-r from-green-500 to-green-600"
          subtitle={stats.highestRatedFilm ? stats.highestRatedFilm.film.title : ""}
        />
        <StatCard
          icon={Star}
          label="Phim có đánh giá"
          value={stats.totalFilmsRated}
          color="bg-gradient-to-r from-purple-500 to-purple-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* All Reviews */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-linear-to-r from-yellow-50 to-orange-50">
            <h2 className="text-xl font-bold text-gray-900">Tất cả đánh giá</h2>
          </div>
          <div className="overflow-x-auto max-h-96">
            <table className="w-full">
              <thead className="sticky top-0 bg-white">
                <tr className="text-left text-gray-600 text-sm border-b border-gray-200 bg-gray-50">
                  <th className="p-4 font-semibold">ID</th>
                  <th className="p-4 font-semibold">Phim</th>
                  <th className="p-4 font-semibold">Người dùng</th>
                  <th className="p-4 font-semibold">Đánh giá</th>
                  <th className="p-4 font-semibold">Ngày</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id} className="border-b border-gray-100 hover:bg-yellow-50 transition-colors">
                    <td className="p-4 text-gray-900 font-medium">{review.id}</td>
                    <td className="p-4 text-gray-900 max-w-xs truncate" title={review.films?.title}>
                      {review.films?.title || "N/A"}
                    </td>
                    <td className="p-4 text-gray-600">
                      {review.users?.fullname || review.users?.username || "Anonymous"}
                    </td>
                    <td className="p-4 text-yellow-600 flex items-center gap-1 font-semibold">
                      <div className="flex items-center gap-1">
                        {[...Array(10)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill={i < (review.rating || 0) ? "currentColor" : "none"}
                            className={i < (review.rating || 0) ? "text-yellow-400" : "text-gray-300"}
                          />
                        ))}
                        <span className="ml-2 text-sm font-medium text-gray-900">{review.rating || 0}/10</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600">
                      {new Date(review.created_at).toLocaleDateString('vi-VN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {reviews.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              <Star size={48} className="mx-auto mb-4 text-gray-300" />
              <p>Chưa có đánh giá nào</p>
            </div>
          )}
        </div>

        {/* Top Rated Films */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-linear-to-r from-green-50 to-emerald-50">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Trophy className="text-green-500" />
              Phim đánh giá cao nhất
            </h2>
          </div>
          <div className="overflow-x-auto max-h-96">
            <table className="w-full">
              <thead className="sticky top-0 bg-white">
                <tr className="text-left text-gray-600 text-sm border-b border-gray-200 bg-gray-50">
                  <th className="p-4 font-semibold">Xếp hạng</th>
                  <th className="p-4 font-semibold">Phim</th>
                  <th className="p-4 font-semibold">Đánh giá TB</th>
                  <th className="p-4 font-semibold">Số đánh giá</th>
                </tr>
              </thead>
              <tbody>
                {topRatedFilms.map((item, index) => (
                  <tr key={item.film.id} className="border-b border-gray-100 hover:bg-green-50 transition-colors">
                    <td className="p-4 text-gray-900 font-medium">
                      <div className="flex items-center gap-2">
                        {index === 0 && <Trophy size={16} className="text-yellow-500" />}
                        #{index + 1}
                      </div>
                    </td>
                    <td className="p-4 text-gray-900 max-w-xs truncate" title={item.film.title}>
                      {item.film.title}
                    </td>
                    <td className="p-4 text-yellow-600 flex items-center gap-1 font-semibold">
                      <div className="flex items-center gap-1">
                        {[...Array(10)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill={i < item.averageRating ? "currentColor" : "none"}
                            className={i < item.averageRating ? "text-yellow-400" : "text-gray-300"}
                          />
                        ))}
                        <span className="ml-2 text-sm font-medium text-gray-900">{item.averageRating.toFixed(1)}/10</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600">
                      {item.totalReviews} đánh giá
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {topRatedFilms.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              <Trophy size={48} className="mx-auto mb-4 text-gray-300" />
              <p>Chưa có phim nào được đánh giá</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
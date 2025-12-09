import { useEffect, useState } from "react";
import { Eye, Film, MessageSquare, Star, RefreshCw, User } from "lucide-react";
import api from "../../lib/axios";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    views: 0,
    films: 0,
    comments: 0,
    reviews: 0,
  });
  const [topFilms, setTopFilms] = useState([]);
  const [latestFilms, setLatestFilms] = useState([]);
  const [latestUsers, setLatestUsers] = useState([]);
  const [latestReviews, setLatestReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [filmsRes, usersRes, feedbacksRes] = await Promise.all([
        api.get("/films"),
        api.get("/users"),
        api.get("/feedbacks"),
      ]);

      const films = filmsRes.data.data || [];
      const users = usersRes.data.data || [];
      const feedbacks = feedbacksRes.data.data || [];
      
      setStats({
        views: films.reduce((acc, f) => acc + (f.view_count || 0), 0),
        films: films.length,
        comments: feedbacks.length,
        reviews: feedbacks.length,
      });

      // Top films by view count
      const sorted = [...films].sort((a, b) => (b.view_count || 0) - (a.view_count || 0));
      setTopFilms(sorted.slice(0, 5));
      
      // Latest films
      const latest = [...films].sort((a, b) => 
        new Date(b.created_at) - new Date(a.created_at)
      );
      setLatestFilms(latest.slice(0, 5));

      // Latest users
      const latestUsersData = [...users].sort((a, b) => 
        new Date(b.created_at) - new Date(a.created_at)
      );
      setLatestUsers(latestUsersData.slice(0, 5));

      // Latest reviews
      const latestReviewsData = [...feedbacks].sort((a, b) => 
        new Date(b.created_at) - new Date(a.created_at)
      );
      setLatestReviews(latestReviewsData.slice(0, 5));
      
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-1">{label}</p>
          <p className="text-3xl font-bold text-white">{value.toLocaleString()}</p>
        </div>
        <div className={`p-4 rounded-lg ${color}`}>
          <Icon size={32} />
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Tổng quan</h1>
        <button
          onClick={fetchData}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <RefreshCw size={16} />
          Làm mới
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Eye}
          label="Lượt xem trong tháng"
          value={stats.views}
          color="bg-pink-500/20 text-pink-500"
        />
        <StatCard
          icon={Film}
          label="Phim đã thêm trong tháng"
          value={stats.films}
          color="bg-purple-500/20 text-purple-500"
        />
        <StatCard
          icon={MessageSquare}
          label="Bình luận mới"
          value={stats.comments}
          color="bg-blue-500/20 text-blue-500"
        />
        <StatCard
          icon={Star}
          label="Đánh giá mới"
          value={stats.reviews}
          color="bg-yellow-500/20 text-yellow-500"
        />
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Top Films */}
        <div className="bg-gray-800 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Star className="text-pink-500" size={20} />
              Phim nổi bật
            </h2>
            <button className="text-sm text-gray-400 hover:text-white">
              Xem tất cả
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm border-b border-gray-700">
                  <th className="p-4">ID</th>
                  <th className="p-4">Tiêu đề</th>
                  <th className="p-4">Thể loại</th>
                  <th className="p-4">Đánh giá</th>
                </tr>
              </thead>
              <tbody>
                {topFilms.map((film) => (
                  <tr key={film.id} className="border-b border-gray-700 hover:bg-gray-750">
                    <td className="p-4 text-white">{film.id}</td>
                    <td className="p-4 text-white">{film.title}</td>
                    <td className="p-4 text-gray-400">
                      {film.film_genres?.[0]?.genres?.name || "N/A"}
                    </td>
                    <td className="p-4 text-pink-500 flex items-center gap-1">
                      <Star size={16} fill="currentColor" />
                      {film.average_rating || "0.0"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Latest Films */}
        <div className="bg-gray-800 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Film className="text-pink-500" size={20} />
              Phim mới nhất
            </h2>
            <button className="text-sm text-gray-400 hover:text-white">
              Xem tất cả
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm border-b border-gray-700">
                  <th className="p-4">ID</th>
                  <th className="p-4">Tên phim</th>
                  <th className="p-4">Thể loại</th>
                  <th className="p-4">Đánh giá</th>
                </tr>
              </thead>
              <tbody>
                {latestFilms.map((film) => (
                  <tr key={film.id} className="border-b border-gray-700 hover:bg-gray-750">
                    <td className="p-4 text-white">{film.id}</td>
                    <td className="p-4 text-white">{film.title}</td>
                    <td className="p-4 text-gray-400">
                      {film.film_genres?.[0]?.genres?.name || "N/A"}
                    </td>
                    <td className="p-4 text-pink-500 flex items-center gap-1">
                      <Star size={16} fill="currentColor" />
                      {film.average_rating || "0.0"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* New Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Latest Users */}
        <div className="bg-gray-800 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <User className="text-pink-500" size={20} />
              Người dùng mới nhất
            </h2>
            <button className="text-sm text-gray-400 hover:text-white">
              Xem tất cả
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm border-b border-gray-700">
                  <th className="p-4">Nhận dạng</th>
                  <th className="p-4">Họ và tên đầy đủ</th>
                  <th className="p-4">E-mail</th>
                  <th className="p-4">Tên người dùng</th>
                </tr>
              </thead>
              <tbody>
                {latestUsers.map((user) => (
                  <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-750">
                    <td className="p-4 text-white">{user.id}</td>
                    <td className="p-4 text-white">{user.fullname || "N/A"}</td>
                    <td className="p-4 text-gray-400">{user.email}</td>
                    <td className="p-4 text-gray-400">{user.username || "Tên người dùng"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Latest Reviews */}
        <div className="bg-gray-800 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Star className="text-pink-500" size={20} />
              Đánh giá mới nhất
            </h2>
            <button className="text-sm text-gray-400 hover:text-white">
              Xem tất cả
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm border-b border-gray-700">
                  <th className="p-4">Nhận dạng</th>
                  <th className="p-4">Mục</th>
                  <th className="p-4">Tác giả</th>
                  <th className="p-4">Đánh giá</th>
                </tr>
              </thead>
              <tbody>
                {latestReviews.map((review) => (
                  <tr key={review.id} className="border-b border-gray-700 hover:bg-gray-750">
                    <td className="p-4 text-white">{review.id}</td>
                    <td className="p-4 text-white">
                      {review.films?.title || review.comment?.substring(0, 30) || "N/A"}
                    </td>
                    <td className="p-4 text-gray-400">
                      {review.users?.fullname || "Anonymous"}
                    </td>
                    <td className="p-4 text-pink-500 flex items-center gap-1">
                      <Star size={16} fill="currentColor" />
                      {review.rating || "0.0"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

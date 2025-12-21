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

      // Phim hot nhất theo lượt xem
      const sorted = [...films].sort((a, b) => (b.view_count || 0) - (a.view_count || 0));
      setTopFilms(sorted.slice(0, 5));
      
      // Phim mới nhất
      const latest = [...films].sort((a, b) => 
        new Date(b.created_at) - new Date(a.created_at)
      );
      setLatestFilms(latest.slice(0, 5));

      // User mới nhất
      const latestUsersData = [...users].sort((a, b) => 
        new Date(b.created_at) - new Date(a.created_at)
      );
      setLatestUsers(latestUsersData.slice(0, 5));

      // Đánh giá mới nhất
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

  const StatCard = ({ icon:Icon,label, value, color }) => (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm mb-1">{label}</p>
          <p className="text-3xl font-bold text-gray-900">{value.toLocaleString()}</p>
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
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Tổng quan</h1>
        <button
          onClick={fetchData}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md"
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
          color="bg-gradient-to-r from-blue-500 to-blue-600"
        />
        <StatCard
          icon={Film}
          label="Phim đã thêm trong tháng"
          value={stats.films}
          color="bg-gradient-to-r from-green-500 to-green-600"
        />
        <StatCard
          icon={MessageSquare}
          label="Bình luận mới"
          value={stats.comments}
          color="bg-gradient-to-r from-purple-500 to-purple-600"
        />
        <StatCard
          icon={Star}
          label="Đánh giá mới"
          value={stats.reviews}
          color="bg-gradient-to-r from-yellow-500 to-orange-500"
        />
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Top Films */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-linear-to-r from-blue-50 to-indigo-50">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Star className="text-blue-500" size={20} />
              Phim nổi bật
            </h2>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              Xem tất cả
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600 text-sm border-b border-gray-200 bg-gray-50">
                  <th className="p-4 font-semibold">ID</th>
                  <th className="p-4 font-semibold">Tiêu đề</th>
                  <th className="p-4 font-semibold">Thể loại</th>
                  <th className="p-4 font-semibold">Đánh giá</th>
                </tr>
              </thead>
              <tbody>
                {topFilms.map((film) => (
                  <tr key={film.id} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="p-4 text-gray-900 font-medium">{film.id}</td>
                    <td className="p-4 text-gray-900">{film.title}</td>
                    <td className="p-4 text-gray-600">
                      {film.film_genres?.[0]?.genres?.name || "N/A"}
                    </td>
                    <td className="p-4 text-yellow-600 flex items-center gap-1 font-semibold">
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
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-linear-to-r from-green-50 to-emerald-50">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Film className="text-green-500" size={20} />
              Phim mới nhất
            </h2>
            <button className="text-sm text-green-600 hover:text-green-800 font-medium">
              Xem tất cả
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600 text-sm border-b border-gray-200 bg-gray-50">
                  <th className="p-4 font-semibold">ID</th>
                  <th className="p-4 font-semibold">Tên phim</th>
                  <th className="p-4 font-semibold">Thể loại</th>
                  <th className="p-4 font-semibold">Đánh giá</th>
                </tr>
              </thead>
              <tbody>
                {latestFilms.map((film) => (
                  <tr key={film.id} className="border-b border-gray-100 hover:bg-green-50 transition-colors">
                    <td className="p-4 text-gray-900 font-medium">{film.id}</td>
                    <td className="p-4 text-gray-900">{film.title}</td>
                    <td className="p-4 text-gray-600">
                      {film.film_genres?.[0]?.genres?.name || "N/A"}
                    </td>
                    <td className="p-4 text-yellow-600 flex items-center gap-1 font-semibold">
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
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-linear-to-r from-purple-50 to-pink-50">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <User className="text-purple-500" size={20} />
              Người dùng mới nhất
            </h2>
            <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">
              Xem tất cả
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600 text-sm border-b border-gray-200 bg-gray-50">
                  <th className="p-4 font-semibold">Nhận dạng</th>
                  <th className="p-4 font-semibold">Họ và tên đầy đủ</th>
                  <th className="p-4 font-semibold">E-mail</th>
                  <th className="p-4 font-semibold">Tên người dùng</th>
                </tr>
              </thead>
              <tbody>
                {latestUsers.map((user) => (
                  <tr key={user.id} className="border-b border-gray-100 hover:bg-purple-50 transition-colors">
                    <td className="p-4 text-gray-900 font-medium">{user.id}</td>
                    <td className="p-4 text-gray-900">{user.fullname || "N/A"}</td>
                    <td className="p-4 text-gray-600">{user.email}</td>
                    <td className="p-4 text-gray-600">{user.username || "Tên người dùng"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Latest Reviews */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-linear-to-r from-yellow-50 to-orange-50">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Star className="text-yellow-500" size={20} />
              Đánh giá mới nhất
            </h2>
            <button className="text-sm text-yellow-600 hover:text-yellow-800 font-medium">
              Xem tất cả
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600 text-sm border-b border-gray-200 bg-gray-50">
                  <th className="p-4 font-semibold">Nhận dạng</th>
                  <th className="p-4 font-semibold">Mục</th>
                  <th className="p-4 font-semibold">Tác giả</th>
                  <th className="p-4 font-semibold">Đánh giá</th>
                </tr>
              </thead>
              <tbody>
                {latestReviews.map((review) => (
                  <tr key={review.id} className="border-b border-gray-100 hover:bg-yellow-50 transition-colors">
                    <td className="p-4 text-gray-900 font-medium">{review.id}</td>
                    <td className="p-4 text-gray-900">
                      {review.films?.title || review.comment?.substring(0, 30) || "N/A"}
                    </td>
                    <td className="p-4 text-gray-600">
                      {review.users?.fullname || "Anonymous"}
                    </td>
                    <td className="p-4 text-yellow-600 flex items-center gap-1 font-semibold">
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

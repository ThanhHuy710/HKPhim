import { useEffect, useState } from "react";
import { FileText, RefreshCw, TrendingUp, Users, Film, DollarSign, BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import api from "../../lib/axios";

export default function ReportsManagement() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalFilms: 0,
    totalViews: 0,
    totalRevenue: 0,
    totalComments: 0,
    totalReviews: 0,
  });
  const [chartData, setChartData] = useState({
    userGrowth: [],
    filmGenres: [],
    revenueByMonth: [],
    viewsByFilm: [],
    ratingDistribution: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReportData();
  }, []);

  const fetchReportData = async () => {
    try {
      setLoading(true);
      const [filmsRes, usersRes, feedbacksRes, invoicesRes] = await Promise.all([
        api.get("/films"),
        api.get("/users"),
        api.get("/feedbacks"),
        api.get("/invoices"),
      ]);

      const films = filmsRes.data.data || [];
      const users = usersRes.data.data || [];
      const feedbacks = feedbacksRes.data.data || [];
      const invoices = invoicesRes.data.data || [];

      // Basic stats
      const totalViews = films.reduce((acc, f) => acc + (f.view_count || 0), 0);
      const totalRevenue = invoices
        .filter(invoice => invoice.status === 'paid' || invoice.status === 'completed')
        .reduce((acc, inv) => acc + (parseFloat(inv.total_price) || 0), 0);

      setStats({
        totalUsers: users.length,
        totalFilms: films.length,
        totalViews,
        totalRevenue,
        totalComments: feedbacks.filter(f => f.comment).length,
        totalReviews: feedbacks.filter(f => f.rating).length,
      });

      // User growth data - real data from database
      const userGrowthData = [];
      const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      const currentYear = new Date().getFullYear();

      months.forEach(month => {
        const monthUsers = users.filter(u => u.created_at?.startsWith(`${currentYear}-${month}`)).length;
        userGrowthData.push({
          month: `Tháng ${parseInt(month)}`,
          users: monthUsers,
        });
      });

      // Film genres distribution
      const genreCount = {};
      films.forEach(film => {
        film.film_genres?.forEach(fg => {
          const genreName = fg.genres?.name || 'Unknown';
          genreCount[genreName] = (genreCount[genreName] || 0) + 1;
        });
      });

      const filmGenresData = Object.entries(genreCount).map(([name, value]) => ({
        name,
        value,
      }));

      // Revenue by month - real data from database
      const revenueData = [];
      months.forEach(month => {
        const monthRevenue = invoices
          .filter(inv => inv.created_at?.startsWith(`${currentYear}-${month}`) &&
                        (inv.status === 'paid' || inv.status === 'completed'))
          .reduce((sum, inv) => sum + (parseFloat(inv.total_price) || 0), 0);
        revenueData.push({
          month: `Tháng ${parseInt(month)}`,
          revenue: monthRevenue,
        });
      });

      // Top films by views
      const viewsByFilmData = films
        .sort((a, b) => (b.view_count || 0) - (a.view_count || 0))
        .slice(0, 10)
        .map(film => ({
          name: film.title.length > 15 ? film.title.substring(0, 15) + '...' : film.title,
          views: film.view_count || 0,
          fullTitle: film.title, // Lưu tên đầy đủ cho tooltip
        }));

      // Rating distribution (1-10 stars)
      const ratingDistribution = [];
      for (let i = 1; i <= 10; i++) {
        const count = feedbacks.filter(f => f.rating === i).length;
        if (count > 0) {
          ratingDistribution.push({
            rating: `${i} sao`,
            count,
            percentage: ((count / feedbacks.filter(f => f.rating).length) * 100).toFixed(1)
          });
        }
      }

      setChartData({
        userGrowth: userGrowthData,
        filmGenres: filmGenresData,
        revenueByMonth: revenueData,
        viewsByFilm: viewsByFilmData,
        ratingDistribution,
      });
    } catch (error) {
      console.error("Error fetching report data:", error);
    } finally {
      setLoading(false);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const StatCard = ({ icon: Icon, label, value, color, format = 'number' }) => (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm mb-1">{label}</p>
          <p className="text-3xl font-bold text-gray-900">
            {format === 'currency' ? `${value.toLocaleString('vi-VN')} VND` : value.toLocaleString()}
          </p>
        </div>
        <div className={`p-4 rounded-xl ${color} shadow-md`}>
          <Icon size={32} className="text-white" />
        </div>
      </div>
    </div>
  );

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <FileText className="text-green-500" />
          Báo cáo thống kê
        </h1>
        <button
          onClick={fetchReportData}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md"
        >
          <RefreshCw size={16} />
          Làm mới
        </button>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={Users}
          label="Tổng người dùng"
          value={stats.totalUsers}
          color="bg-gradient-to-r from-blue-500 to-blue-600"
        />
        <StatCard
          icon={Film}
          label="Tổng phim"
          value={stats.totalFilms}
          color="bg-gradient-to-r from-purple-500 to-purple-600"
        />
        <StatCard
          icon={TrendingUp}
          label="Tổng lượt xem"
          value={stats.totalViews}
          color="bg-gradient-to-r from-green-500 to-green-600"
        />
        <StatCard
          icon={DollarSign}
          label="Tổng doanh thu"
          value={stats.totalRevenue}
          color="bg-gradient-to-r from-yellow-500 to-orange-500"
          format="currency"
        />
        <StatCard
          icon={BarChart3}
          label="Tổng bình luận"
          value={stats.totalComments}
          color="bg-gradient-to-r from-indigo-500 to-indigo-600"
        />
        <StatCard
          icon={BarChart3}
          label="Tổng đánh giá"
          value={stats.totalReviews}
          color="bg-gradient-to-r from-red-500 to-red-600"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* User Growth Chart */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Tăng trưởng người dùng</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData.userGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Rating Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Phân bố đánh giá (1-10 sao)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData.ratingDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="rating" />
              <YAxis />
              <Tooltip
                formatter={(value, name) => name === 'count' ? [value, 'Số đánh giá'] : [`${value}%`, 'Tỷ lệ']}
                labelFormatter={(label) => `Đánh giá: ${label}`}
              />
              <Bar dataKey="count" fill="#ff7300" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Film Genres Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Phân bố thể loại phim</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData.filmGenres}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={false}
              >
                {chartData.filmGenres.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value} phim`, name]} />
            </PieChart>
          </ResponsiveContainer>
          {/* Legend */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {chartData.filmGenres.slice(0, 8).map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <span className="text-sm text-gray-600 truncate">{entry.name} ({entry.value})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Doanh thu theo tháng</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData.revenueByMonth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(value) => [`${value.toLocaleString('vi-VN')} VND`, 'Doanh thu']} />
              <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Films by Views */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Phim có nhiều lượt xem nhất</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData.viewsByFilm}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={80}
                fontSize={12}
              />
              <YAxis fontSize={12} />
              <Tooltip
                formatter={(value) => [value.toLocaleString(), 'Lượt xem']}
                labelFormatter={(label, payload) => payload && payload[0] ? `Phim: ${payload[0].payload.fullTitle}` : `Phim: ${label}`}
              />
              <Bar dataKey="views" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-linear-to-r from-green-50 to-emerald-50">
          <h2 className="text-xl font-bold text-gray-900">Tóm tắt thống kê</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-600 text-sm border-b border-gray-200 bg-gray-50">
                <th className="p-4 font-semibold">Chỉ số</th>
                <th className="p-4 font-semibold">Giá trị</th>
                <th className="p-4 font-semibold">Mô tả</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-4 text-gray-900 font-medium">Tổng người dùng</td>
                <td className="p-4 text-gray-900">{stats.totalUsers.toLocaleString()}</td>
                <td className="p-4 text-gray-600">Số lượng người dùng đã đăng ký</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 text-gray-900 font-medium">Tổng phim</td>
                <td className="p-4 text-gray-900">{stats.totalFilms.toLocaleString()}</td>
                <td className="p-4 text-gray-600">Số lượng phim trong hệ thống</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 text-gray-900 font-medium">Tổng lượt xem</td>
                <td className="p-4 text-gray-900">{stats.totalViews.toLocaleString()}</td>
                <td className="p-4 text-gray-600">Tổng số lượt xem tất cả phim</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 text-gray-900 font-medium">Tổng doanh thu</td>
                <td className="p-4 text-gray-900">{stats.totalRevenue.toLocaleString('vi-VN')} VND</td>
                <td className="p-4 text-gray-600">Doanh thu từ các gói đăng ký</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-4 text-gray-900 font-medium">Tổng bình luận</td>
                <td className="p-4 text-gray-900">{stats.totalComments.toLocaleString()}</td>
                <td className="p-4 text-gray-600">Số lượng bình luận của người dùng</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-900 font-medium">Tổng đánh giá</td>
                <td className="p-4 text-gray-900">{stats.totalReviews.toLocaleString()}</td>
                <td className="p-4 text-gray-600">Số lượng đánh giá sao của phim</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
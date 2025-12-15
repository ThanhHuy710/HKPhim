import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Lock, Trash2, Eye, X } from "lucide-react";
import api from "../../lib/axios";
import { toast } from "sonner";

export default function UserDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewingFeedback, setViewingFeedback] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  
  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
    fullname: "",
    avatar: "",
    role: "user"
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  useEffect(() => {
    fetchUserData();
    fetchReviews();
  }, [id]);

  const fetchUserData = async () => {
    try {
      const res = await api.get(`/users/${id}`);
      const userData = res.data.data;
      setUser(userData);
      setProfileData({
        username: userData.username || "",
        email: userData.email || "",
        fullname: userData.fullname || "",
        avatar: userData.avatar || "",
        role: userData.role || "user"
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Không thể tải thông tin người dùng");
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      // Lấy tất cả feedbacks của user (bao gồm cả comment và review)
      const res = await api.get(`/feedbacks?user_id=${id}`);
      setReviews(res.data.data || []);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/users/${id}`, profileData);
      toast.success("Cập nhật thông tin thành công!");
      fetchUserData();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Cập nhật thất bại!");
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    
    // Kiểm tra form
    if (!formData.username || !formData.email) {
      toast.error("Vui lòng nhập mật khẩu cũ!");
      return;
    }
    if (!passwordData.newPassword) {
      toast.error("Vui lòng nhập mật khẩu mới!");
      return;
    }
    if (passwordData.newPassword.length < 6) {
      toast.error("Mật khẩu mới phải có ít nhất 6 ký tự!");
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("Mật khẩu xác nhận không khớp!");
      return;
    }
    
    try {
      await api.put(`/users/${id}/password`, {
        oldPassword: passwordData.oldPassword,
        newPassword: passwordData.newPassword
      });
      toast.success("Đổi mật khẩu thành công!");
      setPasswordData({ oldPassword: "", newPassword: "", confirmPassword: "" });
    } catch (error) {
      console.error("Error:", error);
      // Hiển thị thông báo lỗi chi tiết từ server
      const errorMessage = error.response?.data?.message || error.response?.data?.error || "Đổi mật khẩu thất bại!";
      toast.error(errorMessage);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    if (!confirm("Bạn có chắc muốn xóa đánh giá này?")) return;
    try {
      await api.delete(`/feedbacks/${reviewId}`);
      toast.success("Xóa đánh giá thành công");
      fetchReviews();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Xóa đánh giá thất bại");
    }
  };

  const handleViewFeedback = (feedback) => {
    setViewingFeedback(feedback);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setViewingFeedback(null);
  };

  // Tính năng lock/unlock tạm thời bỏ vì database chưa có trường is_active
  const handleLockUser = async () => {
    toast.info("Tính năng này đang được phát triển");
    return;
    /*
    try {
      await api.put(`/users/${id}`, { is_active: !user.is_active });
      toast.success(user.is_active ? "Khóa người dùng thành công" : "Mở khóa người dùng thành công");
      fetchUserData();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Thao tác thất bại");
    }
    */
  };

  const handleDeleteUser = async () => {
    if (!confirm("Bạn có chắc muốn xóa người dùng này?")) return;
    try {
      await api.delete(`/users/${id}`);
      toast.success("Xóa người dùng thành công");
      navigate("/admin/users");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Xóa người dùng thất bại");
    }
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Tạm thời chỉ hỗ trợ nhập URL, không upload file
      toast.info("Vui lòng nhập URL ảnh đại diện thay vì upload file");
      e.target.value = ""; // Reset input sau khi chọn file
      return;
      
      /* TODO: Implement file upload to server/cloudinary
      const formData = new FormData();
      formData.append('avatar', file);
      
      api.post('/upload/avatar', formData)
        .then(res => {
          setProfileData({ ...profileData, avatar: res.data.url });
          toast.success("Ảnh đã được tải lên!");
        })
        .catch(err => {
          toast.error("Upload ảnh thất bại!");
        });
      */
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-8">
        <div className="text-center text-gray-400">Không tìm thấy người dùng</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
              {user.avatar ? (
                <img src={user.avatar} alt={user.fullname} className="w-full h-full object-cover" />
              ) : (
                <span className="text-2xl text-gray-400">👤</span>
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                {user.fullname}
              </h1>
              <p className="text-gray-400">ID HKPhim: {user.id} | {user.email}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleLockUser}
              className="p-3 bg-green-500/20 text-green-500 rounded hover:bg-green-500/30 transition-colors"
              title="Khóa/Mở khóa người dùng"
            >
              <Lock size={20} />
            </button>
            <button
              onClick={handleDeleteUser}
              className="p-3 bg-red-500/20 text-red-500 rounded hover:bg-red-500/30 transition-colors"
              title="Xóa người dùng"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 mb-6 border-b border-gray-700">
        <button
          onClick={() => setActiveTab("profile")}
          className={`pb-4 px-2 font-medium transition-colors ${
            activeTab === "profile"
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          HỒ SƠ
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-4 px-2 font-medium transition-colors ${
            activeTab === "reviews"
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          ĐÁNH GIÁ
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "profile" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Details */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6">Chi tiết hồ sơ</h2>
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Tên người dùng</label>
                <input
                  type="text"
                  value={profileData.username}
                  onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Họ và tên</label>
                <input
                  type="text"
                  value={profileData.fullname}
                  onChange={(e) => setProfileData({ ...profileData, fullname: e.target.value })}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Ảnh đại diện</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={profileData.avatar}
                    onChange={(e) => setProfileData({ ...profileData, avatar: e.target.value })}
                    className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Nhập URL ảnh đại diện (ví dụ: https://example.com/avatar.jpg)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Gói cước</label>
                <input
                  type="text"
                  value={user.plans?.name || "Miễn phí"}
                  disabled
                  className="w-full bg-gray-700 text-gray-400 rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Quyền hạn</label>
                <select
                  value={profileData.role}
                  onChange={(e) => setProfileData({ ...profileData, role: e.target.value })}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="user">Người dùng</option>
                  <option value="admin">Quản trị viên</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-semibold py-3 rounded hover:bg-yellow-600 transition-colors"
              >
                LƯU THAY ĐỔI
              </button>
            </form>
          </div>

          {/* Change Password */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6">Đổi mật khẩu</h2>
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Mật khẩu cũ</label>
                <input
                  type="password"
                  value={passwordData.oldPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Mật khẩu mới</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Xác nhận mật khẩu mới</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-semibold py-3 rounded hover:bg-yellow-600 transition-colors mt-16"
              >
                ĐỔI MẬT KHẨU
              </button>
            </form>
          </div>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm uppercase tracking-wider bg-gray-750 border-b border-gray-700">
                  <th className="p-4">ID</th>
                  <th className="p-4">PHIM</th>
                  <th className="p-4">TÁC GIẢ</th>
                  <th className="p-4">NỘI DUNG</th>
                  <th className="p-4">ĐÁNH GIÁ</th>
                  <th className="p-4">NGÀY TẠO</th>
                  <th className="p-4 text-center">HÀNH ĐỘNG</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id} className="border-b border-gray-700 hover:bg-gray-750/50 transition-colors">
                    <td className="p-4 text-white">{review.id}</td>
                    <td className="p-4 text-white">{review.films?.title || "N/A"}</td>
                    <td className="p-4 text-gray-400">{review.users?.fullname || "Unknown"}</td>
                    <td className="p-4 text-gray-400">{review.comment?.substring(0, 50) || "Không có nội dung"}...</td>
                    <td className="p-4">
                      <span className="flex items-center gap-1 text-yellow-500">
                        ⭐ {review.rating || 0}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400">
                      {review.created_at ? new Date(review.created_at).toLocaleDateString('en-GB').split('/').join('.') : "N/A"}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => handleViewFeedback(review)}
                          className="p-2 bg-yellow-500/20 text-yellow-500 rounded hover:bg-yellow-500/30 transition-colors"
                          title="Xem chi tiết"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteReview(review.id)}
                          className="p-2 bg-red-500/20 text-red-500 rounded hover:bg-red-500/30 transition-colors"
                          title="Xóa"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {reviews.length === 0 && (
            <div className="p-8 text-center text-gray-400">
              Không có đánh giá nào
            </div>
          )}
        </div>
      )}

      {/* Modal xem chi tiết feedback */}
      {isViewModalOpen && viewingFeedback && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">
                {viewingFeedback.rating ? 'Chi tiết đánh giá' : 'Chi tiết bình luận'}
              </h2>
              <button onClick={closeViewModal} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">ID</label>
                    <div className="text-white">{viewingFeedback.id}</div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">Phim</label>
                    <div className="text-white">{viewingFeedback.films?.title || "N/A"}</div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">Tác giả</label>
                    <div className="text-white">{viewingFeedback.users?.fullname || "Unknown"}</div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">Email</label>
                    <div className="text-white">{viewingFeedback.users?.email || "N/A"}</div>
                  </div>
                  {viewingFeedback.rating && (
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">Đánh giá</label>
                      <div className="text-yellow-500 flex items-center gap-1">
                        ⭐ {viewingFeedback.rating}/10
                      </div>
                    </div>
                  )}
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">Ngày tạo</label>
                    <div className="text-white">
                      {viewingFeedback.created_at 
                        ? new Date(viewingFeedback.created_at).toLocaleString('vi-VN') 
                        : "N/A"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <label className="block text-gray-400 text-sm mb-2">
                  {viewingFeedback.rating ? 'Nội dung đánh giá' : 'Nội dung bình luận'}
                </label>
                <div className="text-white whitespace-pre-wrap">
                  {viewingFeedback.comment || "Không có nội dung"}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={closeViewModal}
                  className="flex-1 bg-gray-700 text-white py-2 rounded hover:bg-gray-600 transition-colors"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    closeViewModal();
                    handleDeleteReview(viewingFeedback.id);
                  }}
                  className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

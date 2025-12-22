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
  const [showDeleteReviewConfirm, setShowDeleteReviewConfirm] = useState(false);
  const [showDeleteUserConfirm, setShowDeleteUserConfirm] = useState(false);
  const [deleteReviewId, setDeleteReviewId] = useState(null);
  const [deleteUserId, setDeleteUserId] = useState(null);
  
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (!profileData.username || !profileData.email) {
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
    setShowDeleteReviewConfirm(true);
    setDeleteReviewId(reviewId);
  };

  const confirmDeleteReview = async () => {
    if (!deleteReviewId) return;
    try {
      await api.delete(`/feedbacks/${deleteReviewId}`);
      toast.success("Xóa đánh giá thành công");
      fetchReviews();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Xóa đánh giá thất bại");
    } finally {
      setShowDeleteReviewConfirm(false);
      setDeleteReviewId(null);
    }
  };

  const cancelDeleteReview = () => {
    setShowDeleteReviewConfirm(false);
    setDeleteReviewId(null);
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
    setShowDeleteUserConfirm(true);
    setDeleteUserId(id);
  };

  const confirmDeleteUser = async () => {
    if (!deleteUserId) return;
    try {
      await api.delete(`/users/${deleteUserId}`);
      toast.success("Xóa người dùng thành công");
      navigate("/admin/users");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Xóa người dùng thất bại");
    } finally {
      setShowDeleteUserConfirm(false);
      setDeleteUserId(null);
    }
  };

  const cancelDeleteUser = () => {
    setShowDeleteUserConfirm(false);
    setDeleteUserId(null);
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-8">
        <div className="text-center text-gray-500">Không tìm thấy người dùng</div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-linear-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center overflow-hidden shadow-md">
              {user.avatar ? (
                <img src={user.avatar} alt={user.fullname} className="w-full h-full object-cover" />
              ) : (
                <span className="text-2xl text-white font-bold">👤</span>
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {user.fullname}
              </h1>
              <p className="text-gray-600">ID HKPhim: {user.id} | {user.email}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleLockUser}
              className="p-3 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors shadow-sm"
              title="Khóa/Mở khóa người dùng"
            >
              <Lock size={20} />
            </button>
            <button
              onClick={handleDeleteUser}
              className="p-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors shadow-sm"
              title="Xóa người dùng"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 mb-6 border-b border-gray-200 bg-white rounded-t-lg p-4 shadow-sm">
        <button
          onClick={() => setActiveTab("profile")}
          className={`pb-4 px-2 font-medium transition-colors ${
            activeTab === "profile"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          HỒ SƠ
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-4 px-2 font-medium transition-colors ${
            activeTab === "reviews"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          ĐÁNH GIÁ
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "profile" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Details */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Chi tiết hồ sơ</h2>
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Tên người dùng</label>
                <input
                  type="text"
                  value={profileData.username}
                  onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Họ và tên</label>
                <input
                  type="text"
                  value={profileData.fullname}
                  onChange={(e) => setProfileData({ ...profileData, fullname: e.target.value })}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Ảnh đại diện</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={profileData.avatar}
                    onChange={(e) => setProfileData({ ...profileData, avatar: e.target.value })}
                    className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                    placeholder="Nhập URL ảnh đại diện (ví dụ: https://example.com/avatar.jpg)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Gói cước</label>
                <input
                  type="text"
                  value={user.plans?.name || "Miễn phí"}
                  disabled
                  className="w-full bg-gray-100 text-gray-500 rounded-lg px-4 py-3 border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Quyền hạn</label>
                <select
                  value={profileData.role}
                  onChange={(e) => setProfileData({ ...profileData, role: e.target.value })}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                >
                  <option value="user">Người dùng</option>
                  <option value="admin">Quản trị viên</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-md"
              >
                LƯU THAY ĐỔI
              </button>
            </form>
          </div>

          {/* Change Password */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Đổi mật khẩu</h2>
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Mật khẩu cũ</label>
                <input
                  type="password"
                  value={passwordData.oldPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Mật khẩu mới</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Xác nhận mật khẩu mới</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-md mt-16"
              >
                ĐỔI MẬT KHẨU
              </button>
            </form>
          </div>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600 text-sm uppercase tracking-wider bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-semibold">ID</th>
                  <th className="p-4 font-semibold">PHIM</th>
                  <th className="p-4 font-semibold">TÁC GIẢ</th>
                  <th className="p-4 font-semibold">NỘI DUNG</th>
                  <th className="p-4 font-semibold">ĐÁNH GIÁ</th>
                  <th className="p-4 font-semibold">NGÀY TẠO</th>
                  <th className="p-4 text-center font-semibold">HÀNH ĐỘNG</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="p-4 text-gray-900 font-medium">{review.id}</td>
                    <td className="p-4 text-gray-900">{review.films?.title || "N/A"}</td>
                    <td className="p-4 text-gray-600">{review.users?.fullname || "Unknown"}</td>
                    <td className="p-4 text-gray-600">{review.comment?.substring(0, 50) || "Không có nội dung"}...</td>
                    <td className="p-4">
                      <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                        ⭐ {review.rating || 0}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">
                      {review.created_at ? new Date(review.created_at).toLocaleDateString('en-GB').split('/').join('.') : "N/A"}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => handleViewFeedback(review)}
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                          title="Xem chi tiết"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteReview(review.id)}
                          className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
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
            <div className="p-8 text-center text-gray-500">
              Không có đánh giá nào
            </div>
          )}
        </div>
      )}

      {/* Modal xem chi tiết feedback */}
      {isViewModalOpen && viewingFeedback && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {viewingFeedback.rating ? 'Chi tiết đánh giá' : 'Chi tiết bình luận'}
              </h2>
              <button onClick={closeViewModal} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-600 text-sm mb-1 font-medium">ID</label>
                    <div className="text-gray-900 font-semibold">{viewingFeedback.id}</div>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-1 font-medium">Phim</label>
                    <div className="text-gray-900 font-semibold">{viewingFeedback.films?.title || "N/A"}</div>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-1 font-medium">Tác giả</label>
                    <div className="text-gray-900 font-semibold">{viewingFeedback.users?.fullname || "Unknown"}</div>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-1 font-medium">Email</label>
                    <div className="text-gray-900 font-semibold">{viewingFeedback.users?.email || "N/A"}</div>
                  </div>
                  {viewingFeedback.rating && (
                    <div>
                      <label className="block text-gray-600 text-sm mb-1 font-medium">Đánh giá</label>
                      <div className="text-yellow-500 flex items-center gap-1 font-semibold">
                        ⭐ {viewingFeedback.rating}/10
                      </div>
                    </div>
                  )}
                  <div>
                    <label className="block text-gray-600 text-sm mb-1 font-medium">Ngày tạo</label>
                    <div className="text-gray-900 font-semibold">
                      {viewingFeedback.created_at 
                        ? new Date(viewingFeedback.created_at).toLocaleString('vi-VN') 
                        : "N/A"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <label className="block text-gray-600 text-sm mb-2 font-medium">
                  {viewingFeedback.rating ? 'Nội dung đánh giá' : 'Nội dung bình luận'}
                </label>
                <div className="text-gray-900 whitespace-pre-wrap">
                  {viewingFeedback.comment || "Không có nội dung"}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={closeViewModal}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    closeViewModal();
                    handleDeleteReview(viewingFeedback.id);
                  }}
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors font-medium"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Review Confirmation Modal */}
      {showDeleteReviewConfirm && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-100 rounded-full mr-4">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Xác nhận xóa đánh giá</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Bạn có chắc chắn muốn xóa đánh giá này không? Hành động này không thể hoàn tác.
            </p>
            <div className="flex gap-3">
              <button
                onClick={cancelDeleteReview}
                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Hủy
              </button>
              <button
                onClick={confirmDeleteReview}
                className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete User Confirmation Modal */}
      {showDeleteUserConfirm && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-100 rounded-full mr-4">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Xác nhận xóa người dùng</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Bạn có chắc chắn muốn xóa người dùng này không? Hành động này không thể hoàn tác.
            </p>
            <div className="flex gap-3">
              <button
                onClick={cancelDeleteUser}
                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Xóa
              </button>
              <button
                onClick={confirmDeleteUser}
                className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

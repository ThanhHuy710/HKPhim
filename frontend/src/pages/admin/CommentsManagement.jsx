import { useEffect, useState } from "react";
import { MessageSquare, Trash2, Eye, AlertTriangle, RefreshCw, Star } from "lucide-react";
import api from "../../lib/axios";
import { toast } from "sonner";

export default function CommentsManagement() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [stats, setStats] = useState({
    totalComments: 0,
    inappropriateComments: 0,
    todayComments: 0,
  });

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await api.get("/feedbacks");
      const feedbacks = response.data.data || [];

      // Lấy tất cả feedbacks có comment (bao gồm cả có rating và không có rating)
      const commentsWithText = feedbacks.filter(f => f.comment);

      setComments(commentsWithText);

      // Calculate statistics
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      setStats({
        totalComments: commentsWithText.length,
        inappropriateComments: commentsWithText.filter(f => f.is_inappropriate).length,
        todayComments: commentsWithText.filter(f => new Date(f.created_at) >= today).length,
      });
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteComment = async (commentId) => {
    setShowDeleteConfirm(true);
    setDeleteId(commentId);
  };

  const confirmDelete = async () => {
    if (!deleteId) return;

    try {
      await api.delete(`/feedbacks/${deleteId}`);
      setComments(comments.filter(c => c.id !== deleteId));
      setStats(prev => ({
        ...prev,
        totalComments: prev.totalComments - 1,
        inappropriateComments: prev.inappropriateComments + 1 // Tăng số bình luận không phù hợp khi xóa
      }));
      toast.success("Xóa bình luận thành công");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Xóa bình luận thất bại");
    } finally {
      setShowDeleteConfirm(false);
      setDeleteId(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setDeleteId(null);
  };

  const markAsInappropriate = async (commentId) => {
    try {
      await api.patch(`/feedbacks/${commentId}`, { is_inappropriate: true });
      setComments(comments.map(c =>
        c.id === commentId ? { ...c, is_inappropriate: true } : c
      ));
      setStats(prev => ({ ...prev, inappropriateComments: prev.inappropriateComments + 1 }));
    } catch (error) {
      console.error("Error marking comment as inappropriate:", error);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const StatCard = ({ icon: Icon, label, value, color }) => (
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
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <MessageSquare className="text-blue-500" />
          Quản lý bình luận
        </h1>
        <button
          onClick={fetchComments}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md"
        >
          <RefreshCw size={16} />
          Làm mới
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={MessageSquare}
          label="Tổng bình luận"
          value={stats.totalComments}
          color="bg-gradient-to-r from-blue-500 to-blue-600"
        />
        <StatCard
          icon={AlertTriangle}
          label="Bình luận không phù hợp"
          value={stats.inappropriateComments}
          color="bg-gradient-to-r from-red-500 to-red-600"
        />
        <StatCard
          icon={Eye}
          label="Bình luận hôm nay"
          value={stats.todayComments}
          color="bg-gradient-to-r from-green-500 to-green-600"
        />
      </div>

      {/* Comments Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-linear-to-r from-blue-50 to-indigo-50">
          <h2 className="text-xl font-bold text-gray-900">Tất cả bình luận</h2>
          <p className="text-sm text-gray-600 mt-1">Quản lý và kiểm soát bình luận người dùng (bao gồm bình luận có kèm đánh giá)</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-600 text-sm border-b border-gray-200 bg-gray-50">
                <th className="p-4 font-semibold">ID</th>
                <th className="p-4 font-semibold">Nội dung</th>
                <th className="p-4 font-semibold">Người dùng</th>
                <th className="p-4 font-semibold">Phim</th>
                <th className="p-4 font-semibold">Đánh giá</th>
                <th className="p-4 font-semibold">Ngày tạo</th>
                <th className="p-4 font-semibold">Trạng thái</th>
                <th className="p-4 font-semibold">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr key={comment.id} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td className="p-4 text-gray-900 font-medium">{comment.id}</td>
                  <td className="p-4 text-gray-900 max-w-xs truncate" title={comment.comment}>
                    {comment.comment}
                  </td>
                  <td className="p-4 text-gray-600">
                    {comment.users?.fullname || comment.users?.username || "Anonymous"}
                  </td>
                  <td className="p-4 text-gray-600">
                    {comment.films?.title || "N/A"}
                  </td>
                  <td className="p-4 text-yellow-600 flex items-center gap-1 font-semibold">
                    <div className="flex items-center gap-1">
                      {[...Array(10)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          fill={i < (comment.rating || 0) ? "currentColor" : "none"}
                          className={i < (comment.rating || 0) ? "text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                      <span className="ml-1 text-sm text-gray-900">{comment.rating || 0}/10</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">
                    {new Date(comment.created_at).toLocaleDateString('vi-VN')}
                  </td>
                  <td className="p-4">
                    {comment.is_inappropriate ? (
                      <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                        <AlertTriangle size={12} className="mr-1" />
                        Không phù hợp
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        <Eye size={12} className="mr-1" />
                        Bình thường
                      </span>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {!comment.is_inappropriate && (
                        <button
                          onClick={() => markAsInappropriate(comment.id)}
                          className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                          title="Đánh dấu không phù hợp"
                        >
                          <AlertTriangle size={16} />
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteComment(comment.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Xóa bình luận"
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
        {comments.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            <MessageSquare size={48} className="mx-auto mb-4 text-gray-300" />
            <p>Chưa có bình luận nào</p>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-100 rounded-full mr-4">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Xác nhận xóa</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Bạn có chắc chắn muốn xóa bình luận này không? Hành động này không thể hoàn tác.
            </p>
            <div className="flex gap-3">
              <button
                onClick={cancelDelete}
                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Hủy
              </button>
              <button
                onClick={confirmDelete}
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
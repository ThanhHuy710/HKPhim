import { useEffect, useState } from "react";
import { Search, Edit, Trash2, UserCircle, X } from "lucide-react";
import api from "../../lib/axios";
import { toast } from "sonner";

export default function UsersManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullname: "",
    avatar: "",
    role: "user"
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      // Chỉ lấy user, không lấy admin
      const allUsers = res.data.data || [];
      const regularUsers = allUsers.filter(user => user.role !== 'admin');
      setUsers(regularUsers);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Không thể tải danh sách người dùng");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Bạn có chắc muốn xóa người dùng này?")) return;
    
    try {
      await api.delete(`/users/${id}`);
      toast.success("Xóa người dùng thành công");
      fetchUsers();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Không thể xóa người dùng");
    }
  };

  const openAddModal = () => {
    setEditingUser(null);
    setFormData({
      username: "",
      email: "",
      password: "",
      fullname: "",
      avatar: "",
      role: "user"
    });
    setIsModalOpen(true);
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setFormData({
      username: user.username || "",
      email: user.email || "",
      password: "",
      fullname: user.fullname || "",
      avatar: user.avatar || "",
      role: user.role || "user"
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        const updateData = { ...formData };
        if (!updateData.password) {
          delete updateData.password;
        }
        await api.put(`/users/${editingUser.id}`, updateData);
        toast.success("Cập nhật người dùng thành công!");
      } else {
        await api.post("/users", formData);
        toast.success("Thêm người dùng thành công!");
      }
      fetchUsers();
      closeModal();
    } catch (error) {
      console.error("Error saving user:", error);
      toast.error(editingUser ? "Cập nhật thất bại!" : "Thêm người dùng thất bại!");
    }
  };

  const filteredUsers = users.filter(user =>
    user.fullname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý người dùng</h1>
          <p className="text-gray-600 text-sm mt-1">Tổng cộng {users.length} người dùng</p>
        </div>
        <button
          onClick={openAddModal}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md font-semibold"
        >
          + Thêm người dùng
        </button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm người dùng..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none shadow-sm"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-600 text-sm uppercase tracking-wider bg-gray-50 border-b border-gray-200">
                <th className="p-4 font-semibold">Nhận dạng</th>
                <th className="p-4 font-semibold">Thông tin cơ bản</th>
                <th className="p-4 font-semibold">Tên người dùng</th>
                <th className="p-4 font-semibold">Gói cước</th>
                <th className="p-4 font-semibold">Bình luận</th>
                <th className="p-4 font-semibold">Đánh giá</th>
                <th className="p-4 font-semibold">Ngày tạo</th>
                <th className="p-4 text-center font-semibold">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td className="p-4 text-gray-900 font-medium">{user.id}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.fullname} className="w-10 h-10 rounded-full object-cover shadow-sm" />
                      ) : (
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <UserCircle size={24} className="text-gray-400" />
                        </div>
                      )}
                      <div>
                        <div className="text-gray-900 font-medium">{user.fullname || "Tên người dùng"}</div>
                        <div className="text-gray-500 text-sm">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{user.username || "Tên người dùng"}</td>
                  <td className="p-4 text-gray-600">{user.plans?.name || "Miễn phí"}</td>
                  <td className="p-4 text-gray-900 font-medium">
                    {user.feedbacks?.filter(f => !f.rating).length || 0}
                  </td>
                  <td className="p-4 text-gray-900 font-medium">
                    {user.feedbacks?.filter(f => f.rating).length || 0}
                  </td>
                  <td className="p-4 text-gray-600">
                    {user.created_at ? user.created_at.split('T')[0].split('-').reverse().join('.') : "N/A"}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => window.location.href = `/admin/users/${user.id}`}
                        className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                        title="Chỉnh sửa"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
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

        {filteredUsers.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            Không tìm thấy người dùng nào
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {editingUser ? "Chỉnh sửa người dùng" : "Thêm người dùng mới"}
              </h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Tên người dùng *</label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Mật khẩu {editingUser ? "(để trống nếu không đổi)" : "*"}
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                  required={!editingUser}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Họ tên *</label>
                <input
                  type="text"
                  value={formData.fullname}
                  onChange={(e) => setFormData({...formData, fullname: e.target.value})}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Avatar URL</label>
                <input
                  type="text"
                  value={formData.avatar}
                  onChange={(e) => setFormData({...formData, avatar: e.target.value})}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Vai trò *</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                  required
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold shadow-md"
                >
                  {editingUser ? "Cập nhật" : "Thêm mới"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

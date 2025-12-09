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
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Quản lý người dùng</h1>
          <p className="text-gray-400 text-sm mt-1">Tổng cộng {users.length}</p>
        </div>
        <button
          onClick={openAddModal}
          className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors"
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
            className="w-full pl-12 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-pink-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 text-sm uppercase tracking-wider bg-gray-750 border-b border-gray-700">
                <th className="p-4">Nhận dạng</th>
                <th className="p-4">Thông tin cơ bản</th>
                <th className="p-4">Tên người dùng</th>
                <th className="p-4">Gói cước</th>
                <th className="p-4">Bình luận</th>
                <th className="p-4">Đánh giá</th>
                <th className="p-4">Ngày tạo</th>
                <th className="p-4 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-750/50 transition-colors">
                  <td className="p-4 text-white font-medium">{user.id}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.fullname} className="w-10 h-10 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                          <UserCircle size={24} className="text-gray-400" />
                        </div>
                      )}
                      <div>
                        <div className="text-white font-medium">{user.fullname || "Tên người dùng"}</div>
                        <div className="text-gray-400 text-sm">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-400">{user.username || "Tên người dùng"}</td>
                  <td className="p-4 text-gray-400">{user.plans?.name || "Miễn phí"}</td>
                  <td className="p-4 text-white">
                    {user.feedbacks?.filter(f => !f.rating).length || 0}
                  </td>
                  <td className="p-4 text-white">
                    {user.feedbacks?.filter(f => f.rating).length || 0}
                  </td>
                  <td className="p-4 text-gray-400">
                    {user.created_at ? user.created_at.split('T')[0].split('-').reverse().join('.') : "N/A"}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => window.location.href = `/admin/users/${user.id}`}
                        className="p-2 bg-blue-500/20 text-blue-500 rounded hover:bg-blue-500/30 transition-colors"
                        title="Chỉnh sửa"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
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

        {filteredUsers.length === 0 && (
          <div className="p-8 text-center text-gray-400">
            Không tìm thấy người dùng nào
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">
                {editingUser ? "Chỉnh sửa người dùng" : "Thêm người dùng mới"}
              </h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Tên người dùng *</label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">
                  Mật khẩu {editingUser ? "(để trống nếu không đổi)" : "*"}
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required={!editingUser}
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Họ tên *</label>
                <input
                  type="text"
                  value={formData.fullname}
                  onChange={(e) => setFormData({...formData, fullname: e.target.value})}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Avatar URL</label>
                <input
                  type="text"
                  value={formData.avatar}
                  onChange={(e) => setFormData({...formData, avatar: e.target.value})}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Vai trò *</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition-colors"
                >
                  {editingUser ? "Cập nhật" : "Thêm mới"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-gray-700 text-white py-2 rounded hover:bg-gray-600 transition-colors"
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

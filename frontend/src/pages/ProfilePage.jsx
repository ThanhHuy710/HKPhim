import { useEffect, useState } from "react";
import { User, Lock, Save, Eye, EyeOff, Camera } from "lucide-react";
import api from "../lib/axios";
import { toast } from "sonner";
import { useAuth } from "../contexts/AuthContext";
import Layout from "../components/layout/Layout";

export default function ProfilePage() {
  const { user: authUser, updateUser } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
    fullname: "",
    phonenumber: "",
    avatar: ""
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  useEffect(() => {
    if (authUser) {
      setProfileData({
        username: authUser.username || "",
        email: authUser.email || "",
        fullname: authUser.fullname || "",
        phonenumber: authUser.phonenumber || "",
        avatar: authUser.avatar || ""
      });
    }
  }, [authUser]);

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error("Vui lòng chọn file ảnh!");
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Kích thước ảnh tối đa 5MB!");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('avatar', file);

    try {
      const res = await api.post('/upload/avatar', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      const avatarUrl = `http://localhost:5001${res.data.data.url}`;
      setProfileData({ ...profileData, avatar: avatarUrl });
      toast.success("Upload ảnh thành công!");
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Upload ảnh thất bại!");
    } finally {
      setUploading(false);
    }
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.put(`/users/${authUser.id}`, profileData);
      toast.success("Cập nhật thông tin thành công!");
      // Cập nhật context
      updateUser(res.data.data);
    } catch (error) {
      console.error("Error details:", error.response?.data || error);
      const errorMsg = error.response?.data?.message || error.response?.data?.error || "Cập nhật thất bại!";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    
    if (!passwordData.oldPassword) {
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
    
    setLoading(true);
    try {
      await api.put(`/users/${authUser.id}/password`, {
        oldPassword: passwordData.oldPassword,
        newPassword: passwordData.newPassword
      });
      toast.success("Đổi mật khẩu thành công!");
      setPasswordData({ oldPassword: "", newPassword: "", confirmPassword: "" });
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = error.response?.data?.message || error.response?.data?.error || "Đổi mật khẩu thất bại!";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (!authUser) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
          <p className="text-white">Vui lòng đăng nhập để xem hồ sơ</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-black py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="bg-linear-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/30 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-6">
              <div className="relative group">
                {profileData.avatar ? (
                  <img 
                    src={profileData.avatar} 
                    alt={profileData.fullname}
                    className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400 shadow-2xl"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center border-4 border-yellow-400 shadow-2xl">
                    <User size={48} className="text-white" />
                  </div>
                )}
                <label className="absolute bottom-0 right-0 bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full shadow-lg transition-all duration-200 cursor-pointer">
                  <Camera size={16} className="text-black" />
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleAvatarUpload}
                    className="hidden"
                    disabled={uploading}
                  />
                </label>
                {uploading && (
                  <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-yellow-400"></div>
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">{profileData.fullname || "Người dùng"}</h1>
                <p className="text-gray-400">{profileData.email}</p>
                <div className="mt-2 inline-block px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-400/50">
                  {authUser.role === 'admin' ? 'Quản trị viên' : 'Thành viên'}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                activeTab === "profile"
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              <User size={20} />
              <span>Thông tin cá nhân</span>
            </button>
            <button
              onClick={() => setActiveTab("password")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                activeTab === "password"
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              <Lock size={20} />
              <span>Đổi mật khẩu</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8">
            {activeTab === "profile" && (
              <form onSubmit={handleSaveProfile}>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <User size={28} className="text-yellow-400" />
                  <span>Thông tin cá nhân</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      placeholder="Nhập email"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Họ và tên</label>
                    <input
                      type="text"
                      value={profileData.fullname}
                      onChange={(e) => setProfileData({...profileData, fullname: e.target.value})}
                      className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      placeholder="Nhập họ và tên"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Số điện thoại</label>
                    <input
                      type="tel"
                      value={profileData.phonenumber}
                      onChange={(e) => setProfileData({...profileData, phonenumber: e.target.value})}
                      className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-300 font-medium mb-2">Ảnh đại diện</label>
                    
                    {/* Upload Button */}
                    <div className="flex gap-4 mb-4">
                      <label className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg cursor-pointer transition-all duration-200 flex items-center justify-center gap-2">
                        <Camera size={20} />
                        <span>{uploading ? "Đang tải lên..." : "Chọn ảnh từ máy"}</span>
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={handleAvatarUpload}
                          className="hidden"
                          disabled={uploading}
                        />
                      </label>
                    </div>

                    {/* Avatar Preview */}
                    {profileData.avatar && (
                      <div className="mb-4">
                        <img 
                          src={profileData.avatar} 
                          alt="Preview" 
                          className="w-32 h-32 rounded-lg object-cover border-2 border-yellow-400"
                        />
                      </div>
                    )}

                    {/* Or enter URL */}
                    <label className="block text-gray-400 text-sm mb-2">Hoặc nhập link ảnh:</label>
                    <input
                      type="url"
                      value={profileData.avatar}
                      onChange={(e) => setProfileData({...profileData, avatar: e.target.value})}
                      className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                      placeholder="https://example.com/avatar.jpg"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-linear-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Save size={20} />
                  <span>{loading ? "Đang lưu..." : "Lưu thay đổi"}</span>
                </button>
              </form>
            )}

            {activeTab === "password" && (
              <form onSubmit={handleChangePassword}>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Lock size={28} className="text-yellow-400" />
                  <span>Đổi mật khẩu</span>
                </h2>

                <div className="space-y-6 mb-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Mật khẩu cũ *</label>
                    <div className="relative">
                      <input
                        type={showOldPassword ? "text" : "password"}
                        value={passwordData.oldPassword}
                        onChange={(e) => setPasswordData({...passwordData, oldPassword: e.target.value})}
                        className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                        placeholder="Nhập mật khẩu cũ"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowOldPassword(!showOldPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors"
                      >
                        {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Mật khẩu mới *</label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                        className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                        placeholder="Nhập mật khẩu mới (ít nhất 6 ký tự)"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors"
                      >
                        {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Xác nhận mật khẩu mới *</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                        className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                        placeholder="Nhập lại mật khẩu mới"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-linear-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Lock size={20} />
                  <span>{loading ? "Đang cập nhật..." : "Đổi mật khẩu"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

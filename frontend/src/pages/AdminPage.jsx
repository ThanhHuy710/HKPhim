import { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Film,
  Users,
  CreditCard,
  MessageSquare,
  Star,
  FileText,
  LogOut,
  Menu,
  X,
  ArrowLeft
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menuItems = [
    { path: "/admin", icon: LayoutDashboard, label: "Tổng quan" },
    { path: "/admin/films", icon: Film, label: "Quản lý phim" },
    { path: "/admin/users", icon: Users, label: "Người dùng" },
    { path: "/admin/plans", icon: CreditCard, label: "Gói cước" },
    { path: "/admin/comments", icon: MessageSquare, label: "Bình luận" },
    { path: "/admin/reviews", icon: Star, label: "Đánh giá" },
    { path: "/admin/reports", icon: FileText, label: "Báo cáo" },
  ];

  const isActive = (path) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white text-gray-800 transition-all duration-300 z-50 shadow-xl ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-linear-to-r from-blue-500 to-purple-600 text-white">
          <Link to="/" className="flex items-center gap-2">
            {sidebarOpen && (
              <img 
                src="/images/Logo.png" 
                alt="HKPhim Logo" 
                className="h-10 w-28 object-contain"
              />
            )}
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* User Info */}
        {sidebarOpen && (
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center shadow-md">
                <span className="text-lg font-bold text-white">
                  {user?.fullname?.charAt(0) || "A"}
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-500">Admin</p>
                <p className="font-semibold text-sm text-gray-800">{user?.fullname || "Admin"}</p>
              </div>
            </div>
          </div>
        )}

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 shadow-sm ${
                isActive(item.path)
                  ? "bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-blue-200"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="absolute bottom-4 left-0 right-0 px-4 space-y-2">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 px-4 py-3 w-full text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors shadow-sm"
          >
            <ArrowLeft size={20} />
            {sidebarOpen && <span>Quay lại trang phim</span>}
          </button>
          <button
            onClick={logout}
            className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors shadow-sm"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Đăng xuất</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}

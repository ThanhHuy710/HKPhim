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
    <div className="min-h-screen bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 z-50 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <span className="text-white">FLIX</span>
              <span className="text-pink-500">GO</span>
            </span>
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* User Info */}
        {sidebarOpen && (
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">
                  {user?.fullname?.charAt(0) || "A"}
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-400">Admin</p>
                <p className="font-semibold text-sm">{user?.fullname || "Admin"}</p>
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
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? "bg-pink-500 text-white"
                  : "text-gray-300 hover:bg-gray-700"
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
            className="flex items-center gap-3 px-4 py-3 w-full text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
            {sidebarOpen && <span>Quay lại trang phim</span>}
          </button>
          <button
            onClick={logout}
            className="flex items-center gap-3 px-4 py-3 w-full text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
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

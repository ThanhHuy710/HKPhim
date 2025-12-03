import { Link } from "react-router";
import { Search, ChevronDown, User, LogOut } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 py-3 flex items-center">
        {/* Logo */}
        <Link to="/" className="">
          <img src="/images/Logo.png" alt="HKphim Logo" className="h-16 w-40" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 ml-12 flex-1">
          <Link to="/phim-moi" className="hover:text-yellow-400">Phim mới</Link>
          <Link to="/phim-bo" className="hover:text-yellow-400">Phim bộ</Link>
          <Link to="/phim-le" className="hover:text-yellow-400">Phim lẻ</Link>

          {/* Dropdown Thể loại */}
          <div className="relative">
            <button className="flex items-center hover:text-yellow-400">
              Thể loại <ChevronDown size={14} className="ml-1" />
            </button>
          </div>

          {/* Dropdown Quốc gia */}
          <div className="relative">
            <button className="flex items-center hover:text-yellow-400">
              Quốc gia <ChevronDown size={14} className="ml-1" />
            </button>
          </div>
        </nav>

        {/* Search */}
        <form className="flex items-center bg-gray-600 rounded px-2 py-1 mr-10 ml-5 w-1/4 h-10">
          <button type="submit" className="mr-4 hover:text-white">
            <Search size={18} />
          </button>
          <input
            type="text"
            placeholder="Tìm kiếm phim..."
            className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
          />
        </form>

        {/* User Menu hoặc Login */}
        {user ? (
          <div className="ml-4 flex items-center gap-3">
            <div className="flex items-center gap-2">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.fullname}
                  className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center border-2 border-yellow-400">
                  <User size={20} className="text-white" />
                </div>
              )}
              <span className="text-sm font-medium">{user.fullname}</span>
            </div>
            <button
              onClick={logout}
              className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-all duration-200 flex items-center gap-1"
            >
              <LogOut size={16} />
              <span className="text-sm">Đăng xuất</span>
            </button>
          </div>
        ) : (
          <Link
            to="/auth"
            className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 font-semibold"
          >
            Đăng nhập
          </Link>
        )}
      </div>
    </header>
  );
}

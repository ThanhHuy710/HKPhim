import { Link } from "react-router";
import { Search, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-black-dark text-black-pale shadow-md">
      <div className="max-w-[1440px] px-4 py-3 flex items-center">
        {/* Logo */}
        <Link to="/" className="">
          <img
            src="../../../public/images/Logo.png"
            alt="HKphim Logo"
            className="h-12 w-12"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 ml-12 flex-1 ">
          <Link to="/phim-moi" className="hover:text-white">
            Phim mới
          </Link>
          <Link to="/phim-bo" className="hover:text-white">
            Phim bộ
          </Link>
          <Link to="/phim-le" className="hover:text-white">
            Phim lẻ
          </Link>

          {/* Dropdown Thể loại chưa làm*/}
          <div className="relative">
            <button className="flex items-center hover:text-yellow-400">
              Thể loại <ChevronDown size={14} className="ml-1" />
            </button>
          </div>

          {/* Dropdown Quốc gia chưa làm*/}
          <div className="relative">
            <button className="flex items-center hover:text-yellow-400">
              Quốc gia <ChevronDown size={14} className="ml-1" />
            </button>
          </div>
        </nav>

        {/* Search */}
        <form className="flex items-center bg-gray-600 rounded px-2 py-1 mr-10 w-1/4 h-10 ml-auto">
          <button type="submit" className="mr-4 hover:text-white">
            <Search size={18} />
          </button>
          <input
            type="text"
            placeholder="Tìm kiếm phim..."

            className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
          />
        </form>

        {/* Login */}
        <Link
          to="/login"
          className="md-ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 font-semibold "
        >
          Đăng nhập
        </Link>
      </div>
    </header>
  );
}

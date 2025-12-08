import { Link } from "react-router";
import { Search, ChevronDown, User, LogOut, Lock, Heart, Settings, CreditCard } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState, useRef } from "react";
import { toast } from "sonner";
import api from "../../lib/axios";

export default function Header() {
  const { user, logout } = useAuth();

  const [openGenre, setOpenGenre] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [genres, setGenres] = useState([]);
  const [countries, setCountries] = useState([]);
  const userMenuRef = useRef(null);
  const genreRef = useRef(null);
  const countryRef = useRef(null);

  // Fetch genres once on mount
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await api.get("/genres");
        setGenres(res.data.data || []);
      } catch (error) {
        console.error("Lỗi:", error);
        toast.error("Không thể tải thể loại");
      }
    };
    fetchGenres();
  }, []);

  // Fetch countries from database
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await api.get("/films");
        const films = res.data.data || [];
        // Get unique countries from films
        const uniqueCountries = [...new Set(films.map(film => film.country).filter(Boolean))];
        setCountries(uniqueCountries.sort());
      } catch (error) {
        console.error("Lỗi:", error);
      }
    };
    fetchCountries();
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setOpenUserMenu(false);
      }
      if (genreRef.current && !genreRef.current.contains(event.target)) {
        setOpenGenre(false);
      }
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setOpenCountry(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="bg-black-dark text-black-pale shadow-md">
      <div className="max-w-[1920px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src="/images/Logo.png" alt="HKphim Logo" className="h-14 w-36" />
        </Link>

        {/* Navigation - Left aligned after logo */}
        <nav className="hidden lg:flex items-center space-x-8 ml-12">
          <Link to="/phim-moi" className="text-white hover:text-yellow-400 transition-colors">
            Phim mới
          </Link>
          <Link to="/search/series" className="text-white hover:text-yellow-400 transition-colors">
            Phim bộ
          </Link>
          <Link to="/search/single-movies" className="text-white hover:text-yellow-400 transition-colors">
            Phim lẻ
          </Link>

          {/* Dropdown Thể loại*/}
          <div className="relative" ref={genreRef}>
            <button
              onClick={() => setOpenGenre(!openGenre)}
              className="flex items-center text-white hover:text-yellow-400 transition-colors"
            >
              Thể loại <ChevronDown size={14} className="ml-1" />
            </button>
            {openGenre && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-50">
                <div className="max-h-96 overflow-y-auto">
                  {genres.map((genre) => (
                    <Link
                      key={genre.id}
                      to={`/search/genre/?name=${genre.name}`}
                      className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                      onClick={() => setOpenGenre(false)}
                    >
                      {genre.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Dropdown Quốc gia*/}
          <div className="relative" ref={countryRef}>
            <button
              onClick={() => setOpenCountry(!openCountry)}
              className="flex items-center text-white hover:text-yellow-400 transition-colors"
            >
              Quốc gia <ChevronDown size={14} className="ml-1" />
            </button>
            {openCountry && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-50">
                <div className="max-h-96 overflow-y-auto">
                  {countries.length > 0 ? (
                    countries.map((country, index) => (
                      <Link
                        key={index}
                        to={`/search/country/?name=${country}`}
                        className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                        onClick={() => setOpenCountry(false)}
                      >
                        {country}
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-400 text-sm">Đang tải...</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right side - Search & User */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Search */}
          <form
            action="/search"
            className="hidden md:flex items-center bg-gray-800 rounded-full px-4 py-2.5 w-64"
          >
            <input
              type="text"
              name="q"
              placeholder="Tìm kiếm phim..."
              className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none flex-1"
            />
            <button type="submit" className="text-gray-400 hover:text-white transition-colors">
              <Search size={18} />
            </button>
          </form>

          {/* Admin Button - Show if user is admin */}
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-all duration-200"
            >
              <Lock size={18} />
              <span>Admin</span>
            </Link>
          )}

          {/* User Menu hoặc Login */}
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setOpenUserMenu(!openUserMenu)}
                className="flex items-center gap-2 px-4 py-2 border-2 border-yellow-400 rounded-full hover:bg-gray-800 transition-all duration-200"
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.fullname}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                    <User size={18} className="text-white" />
                  </div>
                )}
                <span className="hidden lg:block text-sm font-medium uppercase tracking-wide text-white">
                  {user.username || user.fullname?.split(" ")[0]}
                </span>
                <ChevronDown size={16} className={`text-white transition-transform ${openUserMenu ? "rotate-180" : ""}`} />
              </button>

              {openUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50">
                  <div className="px-4 py-3 border-b border-gray-700">
                    <p className="text-sm font-semibold text-white">{user.fullname}</p>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </div>
                  
                  <div className="py-2">
                    <Link
                      to="/profile"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors"
                      onClick={() => setOpenUserMenu(false)}
                    >
                      <User size={18} />
                      <span>Hồ sơ</span>
                    </Link>
                    <Link
                      to="/subscription"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors"
                      onClick={() => setOpenUserMenu(false)}
                    >
                      <CreditCard size={18} />
                      <span>Gói cước</span>
                    </Link>
                    <Link
                      to="/favorites"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors"
                      onClick={() => setOpenUserMenu(false)}
                    >
                      <Heart size={18} />
                      <span>Yêu thích</span>
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors"
                      onClick={() => setOpenUserMenu(false)}
                    >
                      <Settings size={18} />
                      <span>Cài đặt</span>
                    </Link>
                  </div>

                  <div className="border-t border-gray-700 py-2">
                    <button
                      onClick={() => {
                        setOpenUserMenu(false);
                        logout();
                      }}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors w-full text-left"
                    >
                      <LogOut size={18} />
                      <span>Đăng xuất</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/auth"
              className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition-all duration-200"
            >
              ĐĂNG NHẬP
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

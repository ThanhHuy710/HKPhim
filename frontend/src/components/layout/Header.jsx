import { Link } from "react-router";
import { Search, ChevronDown, User, LogOut, Lock, Heart, Settings, CreditCard, ShoppingCart, Receipt } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-linear-to-b from-black via-gray-900 to-transparent backdrop-blur-sm shadow-2xl border-b border-gray-800">
      <div className="max-w-[1920px] mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="shrink-0 transform hover:scale-105 transition-transform duration-300">
          <img src="/images/Logo.png" alt="HKphim Logo" className="h-16 w-40 drop-shadow-xl" />
        </Link>

        {/* Navigation - Left aligned after logo */}
        <nav className="hidden lg:flex items-center space-x-10 ml-16">
          <Link to="/phim-moi" className="text-white font-medium hover:text-yellow-400 transition-all duration-200 relative group">
            <span className="relative z-10">Phim mới</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/search/series" className="text-white font-medium hover:text-yellow-400 transition-all duration-200 relative group">
            <span className="relative z-10">Phim bộ</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/search/single-movies" className="text-white font-medium hover:text-yellow-400 transition-all duration-200 relative group">
            <span className="relative z-10">Phim lẻ</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/subscription" className="text-white font-medium hover:text-yellow-400 transition-all duration-200 relative group">
            <span className="relative z-10">Gói cước</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Dropdown Thể loại*/}
          <div className="relative group" ref={genreRef}>
            <button
              onClick={() => setOpenGenre(!openGenre)}
              className="flex items-center text-white font-medium hover:text-yellow-400 transition-all duration-200 relative"
            >
              <span className="relative z-10">Thể loại</span>
              <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${openGenre ? 'rotate-180' : ''}`} />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            {openGenre && (
              <div className="absolute left-0 mt-3 w-56 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-50 animate-fadeIn">
                <div className="max-h-96 overflow-y-auto custom-scrollbar">
                  {genres.map((genre) => (
                    <Link
                      key={genre.id}
                      to={`/search/genre/?name=${genre.name}`}
                      className="block px-5 py-3 text-white hover:bg-yellow-400/10 hover:text-yellow-400 transition-all duration-200 border-b border-gray-800 last:border-0"
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
          <div className="relative group" ref={countryRef}>
            <button
              onClick={() => setOpenCountry(!openCountry)}
              className="flex items-center text-white font-medium hover:text-yellow-400 transition-all duration-200 relative"
            >
              <span className="relative z-10">Quốc gia</span>
              <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${openCountry ? 'rotate-180' : ''}`} />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            {openCountry && (
              <div className="absolute left-0 mt-3 w-56 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-50 animate-fadeIn">
                <div className="max-h-96 overflow-y-auto custom-scrollbar">
                  {countries.length > 0 ? (
                    countries.map((country, index) => (
                      <Link
                        key={index}
                        to={`/search/country/?name=${country}`}
                        className="block px-5 py-3 text-white hover:bg-yellow-400/10 hover:text-yellow-400 transition-all duration-200 border-b border-gray-800 last:border-0"
                        onClick={() => setOpenCountry(false)}
                      >
                        {country}
                      </Link>
                    ))
                  ) : (
                    <div className="px-5 py-3 text-gray-400 text-sm">Đang tải...</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right side - Search & User */}
        <div className="flex items-center gap-5 ml-auto">
          {/* Search */}
          <form
            action="/search"
            className="hidden md:flex items-center bg-linear-to-r from-gray-800 to-gray-900 rounded-full px-5 py-3 w-72 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 focus-within:ring-2 focus-within:ring-yellow-400/30"
          >
            <input
              type="text"
              name="q"
              placeholder="Tìm kiếm phim..."
              className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none flex-1"
            />
            <button type="submit" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <Search size={20} />
            </button>
          </form>

          {/* Admin Button - Show if user is admin */}
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Lock size={18} />
              <span>Admin</span>
            </Link>
          )}

          {/* Cart Button - Show if user is logged in */}
          {user && (
            <Link
              to="/cart"
              className="relative flex items-center justify-center w-11 h-11 bg-gray-800 hover:bg-yellow-400/20 rounded-full transition-all duration-200 border border-gray-700 hover:border-yellow-400 group"
              title="Giỏ hàng"
            >
              <ShoppingCart size={20} className="text-gray-300 group-hover:text-yellow-400 transition-colors" />
            </Link>
          )}

          {/* User Menu hoặc Login */}
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setOpenUserMenu(!openUserMenu)}
                className="flex items-center gap-3 px-5 py-2.5 border-2 border-yellow-400 rounded-full hover:bg-yellow-400/10 hover:border-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.fullname}
                    className="w-9 h-9 rounded-full object-cover border-2 border-yellow-400/50"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                    <User size={20} className="text-white" />
                  </div>
                )}
                <span className="hidden lg:block text-sm font-bold uppercase tracking-wider text-white">
                  {user.username || user.fullname?.split(" ")[0]}
                </span>
                <ChevronDown size={18} className={`text-yellow-400 transition-transform duration-300 ${openUserMenu ? "rotate-180" : ""}`} />
              </button>

              {openUserMenu && (
                <div className="absolute right-0 mt-3 w-64 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl z-50 animate-fadeIn">
                  <div className="px-5 py-4 border-b border-gray-700 bg-linear-to-r from-yellow-400/10 to-orange-500/10">
                    <p className="text-base font-bold text-white">{user.fullname}</p>
                    <p className="text-xs text-gray-300 truncate mt-1">{user.email}</p>
                  </div>
                  
                  <div className="py-2">
                    <Link
                      to="/profile"
                      className="flex items-center gap-4 px-5 py-3 text-sm font-medium text-white hover:bg-yellow-400/10 hover:text-yellow-400 transition-all duration-200 border-b border-gray-800"
                      onClick={() => setOpenUserMenu(false)}
                    >
                      <User size={20} />
                      <span>Hồ sơ</span>
                    </Link>
                    <Link
                      to="/subscription"
                      className="flex items-center gap-4 px-5 py-3 text-sm font-medium text-white hover:bg-yellow-400/10 hover:text-yellow-400 transition-all duration-200 border-b border-gray-800"
                      onClick={() => setOpenUserMenu(false)}
                    >
                      <CreditCard size={20} />
                      <span>Gói cước</span>
                    </Link>
                    <Link
                      to="/purchase-history"
                      className="flex items-center gap-4 px-5 py-3 text-sm font-medium text-white hover:bg-yellow-400/10 hover:text-yellow-400 transition-all duration-200 border-b border-gray-800"
                      onClick={() => setOpenUserMenu(false)}
                    >
                      <Receipt size={20} />
                      <span>Lịch sử mua hàng</span>
                    </Link>
                    <Link
                      to="/favorites"
                      className="flex items-center gap-4 px-5 py-3 text-sm font-medium text-white hover:bg-yellow-400/10 hover:text-yellow-400 transition-all duration-200 border-b border-gray-800"
                      onClick={() => setOpenUserMenu(false)}
                    >
                      <Heart size={20} />
                      <span>Yêu thích</span>
                    </Link>
              
                  </div>

                  <div className="border-t border-gray-700 py-2">
                    <button
                      onClick={() => {
                        setOpenUserMenu(false);
                        logout();
                      }}
                      className="flex items-center gap-4 px-5 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200 w-full text-left"
                    >
                      <LogOut size={20} />
                      <span>Đăng xuất</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/auth"
              className="px-8 py-3 bg-linear-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              ĐĂNG NHẬP
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

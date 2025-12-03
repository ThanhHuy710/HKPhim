import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import api from "../lib/axios";
import { useAuth } from "../contexts/AuthContext";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  // State cho Register
  const [registerData, setRegisterData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State cho Login
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // State lỗi cho Login
  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

  // State lỗi cho Register
  const [registerErrors, setRegisterErrors] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle change cho Register
  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle change cho Login
  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Register
  const handleRegister = async (e) => {
    e.preventDefault();

    // Reset lỗi
    setRegisterErrors({ fullname: "", email: "", password: "", confirmPassword: "" });

    // Validation tiếng Việt
    let hasError = false;
    const errors = {};
    
    if (!registerData.fullname || registerData.fullname.trim().length < 2) {
      errors.fullname = "Họ tên phải có ít nhất 2 ký tự";
      hasError = true;
    }
    
    if (!registerData.email) {
      errors.email = "Vui lòng nhập địa chỉ email";
      hasError = true;
    } else if (!registerData.email.includes("@")) {
      errors.email = "Email phải chứa ký tự '@'";
      hasError = true;
    }
    
    if (!registerData.password || registerData.password.length < 6) {
      errors.password = "Mật khẩu phải có ít nhất 6 ký tự";
      hasError = true;
    }
    
    if (registerData.password !== registerData.confirmPassword) {
      errors.confirmPassword = "Mật khẩu xác nhận không khớp!";
      hasError = true;
    }
    
    if (hasError) {
      setRegisterErrors(errors);
      return;
    }

    setLoading(true);
    try {
      await api.post("/auth/register", {
        fullname: registerData.fullname,
        email: registerData.email,
        password: registerData.password,
      });
      toast.success("Đăng ký thành công!");
      // Chuyển sang form login
      setIsLogin(true);
      setRegisterData({ fullname: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Đăng ký thất bại");
    } finally {
      setLoading(false);
    }
  };

  // Submit Login
  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Reset lỗi
    setLoginErrors({ email: "", password: "" });
    
    // Validation tiếng Việt
    let hasError = false;
    const errors = {};
    
    if (!loginData.email) {
      errors.email = "Vui lòng nhập địa chỉ email";
      hasError = true;
    } else if (!loginData.email.includes("@")) {
      errors.email = "Email phải chứa ký tự '@'";
      hasError = true;
    }
    
    if (!loginData.password) {
      errors.password = "Vui lòng nhập mật khẩu";
      hasError = true;
    } else if (loginData.password.length < 6) {
      errors.password = "Mật khẩu phải có ít nhất 6 ký tự";
      hasError = true;
    }
    
    if (hasError) {
      setLoginErrors(errors);
      return;
    }
    
    setLoading(true);
    try {
      // Bước 1: Login
      const res = await api.post("/auth/login", {
        email: loginData.email,
        password: loginData.password,
      });

      const { accessToken, refreshToken } = res.data.data;

      // Lưu refresh token nếu chọn "Nhớ tôi"
      if (rememberMe && refreshToken) {
        localStorage.setItem("refreshToken", refreshToken);
      }

      // Bước 2: Lấy thông tin user
      const userRes = await api.get("/auth/get-info", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      // Lưu vào AuthContext
      login(userRes.data.data, accessToken);
      
      toast.success("Đăng nhập thành công!");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl h-[700px] rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Container chứa 2 form */}
        <div className="relative w-full h-full flex">
          
          {/* ===== FORM LOGIN ===== */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full px-8 py-8 flex flex-col justify-center bg-gray-900/95 backdrop-blur-sm transition-all duration-700 ease-in-out overflow-y-auto ${
              isLogin ? "translate-x-0 opacity-100 z-20" : "translate-x-full opacity-0 z-10"
            }`}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Chào mừng trở lại 👋</h2>
            <p className="text-gray-400 mb-6">Chúng tôi rất vui khi bạn trở lại!</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-1.5 block">Email address*</label>
                <input
                  type="text"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className={`w-full px-4 py-2.5 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-500 ${
                    loginErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-orange-500'
                  }`}
                  placeholder="Nhập địa chỉ email"
                />
                {loginErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{loginErrors.email}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-1.5 block">Password*</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className={`w-full px-4 py-2.5 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-500 ${
                    loginErrors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-orange-500'
                  }`}
                  placeholder="Nhập mật khẩu"
                />
                {loginErrors.password && (
                  <p className="text-red-500 text-xs mt-1">{loginErrors.password}</p>
                )}
              </div>

              <div className="flex items-center gap-2 py-1">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-4 h-4 cursor-pointer" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember" className="text-sm text-gray-400 cursor-pointer">
                  Nhớ tôi cho các lần đăng nhập sau
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                {loading ? "Đang đăng nhập..." : "Đăng nhập"}
              </button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-400">Or</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => window.location.href = 'http://localhost:5001/api/auth/google'}
                className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 active:scale-95 border border-gray-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:border-gray-600"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Đăng nhập với Google
              </button>
            </form>
          </div>

          {/* ===== FORM REGISTER ===== */}
          <div
            className={`absolute top-0 right-0 w-1/2 h-full px-8 py-8 flex flex-col justify-center bg-gray-900/95 backdrop-blur-sm transition-all duration-700 ease-in-out overflow-y-auto ${
              !isLogin ? "translate-x-0 opacity-100 z-20" : "-translate-x-full opacity-0 z-10"
            }`}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Tạo tài khoản 👋</h2>
            <p className="text-gray-400 mb-6">Vui lòng điền thông tin của bạn để tạo tài khoản</p>
            <form onSubmit={handleRegister} className="space-y-3.5">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-1.5 block">Your fullname*</label>
                <input
                  type="text"
                  name="fullname"
                  value={registerData.fullname}
                  onChange={handleRegisterChange}
                  className={`w-full px-4 py-2.5 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-500 ${
                    registerErrors.fullname ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-orange-500'
                  }`}
                  placeholder="Nhập họ và tên"
                />
                {registerErrors.fullname && (
                  <p className="text-red-500 text-xs mt-1">{registerErrors.fullname}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-1.5 block">Email address*</label>
                <input
                  type="text"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  className={`w-full px-4 py-2.5 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-500 ${
                    registerErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-orange-500'
                  }`}
                  placeholder="Nhập địa chỉ email"
                />
                {registerErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{registerErrors.email}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-1.5 block">Create password*</label>
                <input
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  className={`w-full px-4 py-2.5 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-500 ${
                    registerErrors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-orange-500'
                  }`}
                  placeholder="Nhập mật khẩu"
                />
                {registerErrors.password && (
                  <p className="text-red-500 text-xs mt-1">{registerErrors.password}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-1.5 block">Confirm password*</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                  className={`w-full px-4 py-2.5 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-500 ${
                    registerErrors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-orange-500'
                  }`}
                  placeholder="Nhập lại mật khẩu"
                />
                {registerErrors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">{registerErrors.confirmPassword}</p>
                )}
              </div>

              {/* Removed checkbox for terms and conditions */}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                {loading ? "Đang đăng ký..." : "Đăng ký tài khoản"}
              </button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-400">Or</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => window.location.href = 'http://localhost:5001/api/auth/google'}
                className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 active:scale-95 border border-gray-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:border-gray-600"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Đăng ký với Google
              </button>
            </form>
          </div>

          {/* ===== PANEL OVERLAY - Trượt qua lại với ảnh background ===== */}
          <div
            className={`absolute top-0 w-1/2 h-full transition-all duration-700 ease-in-out z-30 overflow-hidden ${
              isLogin ? "left-1/2" : "left-0"
            }`}
          >
            {/* Ảnh background cho panel */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/bgAuth.png')",
              }}
            />
            
            {/* Overlay gradient tối */}
            <div className="absolute inset-0 bg-black/70" />
            
            <div className="relative h-full flex flex-col items-center justify-center text-white p-12 text-center z-10">
              {isLogin ? (
                // Hiển thị khi đang ở form Login
                <>
                  {/* Logo HKphim */}
                  <img 
                    src="/images/Logo.png" 
                    alt="HKphim Logo" 
                    className="h-20 mb-8 object-contain"
                  />
                  
                  <h2 className="text-4xl font-bold mb-4">Xin chào!</h2>
                  <p className="text-lg mb-8 opacity-90">
                    Nhập thông tin cá nhân của bạn để bắt đầu hành trình cùng chúng tôi
                  </p>
                  <button
                    onClick={() => setIsLogin(false)}
                    className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 active:scale-95 transition-all duration-200 hover:shadow-lg"
                  >
                    Đăng ký
                  </button>
                </>
              ) : (
                // Hiển thị khi đang ở form Register
                <>
                  {/* Logo HKphim */}
                  <img 
                    src="/images/Logo.png" 
                    alt="HKphim Logo" 
                    className="h-20 mb-8 object-contain"
                  />
                  
                  <h2 className="text-4xl font-bold mb-4">Chào mừng bạn quay trở lại!</h2>
                  <p className="text-lg mb-8 opacity-90">
                    Để duy trì kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin cá nhân
                  </p>
                  <button
                    onClick={() => setIsLogin(true)}
                    className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 active:scale-95 transition-all duration-200 hover:shadow-lg"
                  >
                    Đăng nhập
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

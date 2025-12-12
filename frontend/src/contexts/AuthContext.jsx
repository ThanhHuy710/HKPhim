import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      // Kiểm tra có refreshToken không (user đã chọn "Nhớ tôi")
      const refreshToken = localStorage.getItem("refreshToken");
      const storedUser = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      if (refreshToken && token) {
        // Nếu có refreshToken và token → tự động refresh để lấy accessToken mới
        try {
          const res = await axios.post(
            "http://localhost:5001/api/auth/refresh-token",
            { 
              accessToken: token,
              refreshToken: refreshToken 
            }
          );

          const newAccessToken = res.data.data.accessToken;
          localStorage.setItem("token", newAccessToken);

          // Lấy thông tin user mới
          const userRes = await axios.get(
            "http://localhost:5001/api/auth/get-info",
            {
              headers: { Authorization: `Bearer ${newAccessToken}` },
            }
          );

          setUser(userRes.data.data);
          localStorage.setItem("user", JSON.stringify(userRes.data.data));
        } catch (error) {
          // RefreshToken hết hạn hoặc không hợp lệ → xóa hết và set user = null
          console.error("Auto login failed:", error);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.removeItem("refreshToken");
          setUser(null);
        }
      } else if (storedUser && token) {
        // Không có refreshToken nhưng có token cũ → load từ localStorage
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error("Parse user error:", error);
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          setUser(null);
        }
      }

      setLoading(false);
    };

    initAuth();
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const updateUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

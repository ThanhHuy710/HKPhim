import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api",
});

// Interceptor để tự động thêm token vào mỗi request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor để tự động refresh token khi hết hạn
api.interceptors.response.use(
  (response) => response, // Request thành công
  async (error) => {
    const originalRequest = error.config;

    // Nếu lỗi 401 (token hết hạn) và chưa retry
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Lấy refreshToken từ localStorage
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        try {
          // Gọi API refresh để lấy accessToken mới
          const res = await axios.post(
            "http://localhost:5001/api/auth/refresh-token",
            { refreshToken }
          );

          const newAccessToken = res.data.data.accessToken;

          // Lưu accessToken mới
          localStorage.setItem("token", newAccessToken);

          // Gửi lại request cũ với token mới
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          // Refresh token cũng hết hạn → đăng xuất
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.removeItem("refreshToken");
          window.location.href = "/auth";
          return Promise.reject(refreshError);
        }
      } else {
        // Không có refreshToken → chuyển về trang login
        window.location.href = "/auth";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
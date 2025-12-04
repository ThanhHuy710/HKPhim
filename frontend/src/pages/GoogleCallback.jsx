import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../contexts/AuthContext";
import api from "../lib/axios";

export default function GoogleCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const handleGoogleCallback = async () => {
      try {
        const accessToken = searchParams.get("accessToken");
        const refreshToken = searchParams.get("refreshToken");

        if (!accessToken || !refreshToken) {
          toast.error("Đăng nhập Google thất bại");
          navigate("/auth");
          return;
        }

        // Lưu refresh token
        localStorage.setItem("refreshToken", refreshToken);

        // Lấy thông tin user
        const userRes = await api.get("/auth/get-info", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        // Lưu vào AuthContext
        login(userRes.data.data, accessToken);

        toast.success("Đăng nhập Google thành công!");
        navigate("/");
      } catch (error) {
        console.error("Google callback error:", error);
        toast.error("Đăng nhập Google thất bại");
        navigate("/auth");
      }
    };

    handleGoogleCallback();
  }, [searchParams, navigate, login]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 mx-auto mb-4"></div>
        <p className="text-white text-lg">Đang đăng nhập với Google...</p>
      </div>
    </div>
  );
}

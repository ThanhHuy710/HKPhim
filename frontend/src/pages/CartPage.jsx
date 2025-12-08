import { useEffect, useState } from "react";
import { ShoppingCart, Trash2, CreditCard, Check } from "lucide-react";
import api from "../lib/axios";
import { toast } from "sonner";
import { useAuth } from "../contexts/AuthContext";
import Layout from "../components/layout/Layout";
import { useNavigate } from "react-router";

export default function CartPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchCart = async () => {
    try {
      const res = await api.get("/cart");
      setCartItems(res.data.data || []);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Không thể tải giỏ hàng");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveItem = async (itemId) => {
    if (!confirm("Bạn có chắc muốn xóa gói cước này khỏi giỏ hàng?")) return;

    try {
      await api.delete(`/cart/${itemId}`);
      toast.success("Đã xóa khỏi giỏ hàng");
      fetchCart();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Không thể xóa gói cước");
    }
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      toast.error("Giỏ hàng trống!");
      return;
    }

    setProcessing(true);
    try {
      // Lấy gói cuối cùng trong giỏ hàng để kích hoạt
      const lastItem = cartItems[cartItems.length - 1];
      
      // Tính toán ngày bắt đầu và kết thúc (ISO-8601 DateTime format)
      const startDate = new Date();
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + (lastItem.plans.duration_days || 30));
      
      // Tạo invoice cho giao dịch
      await api.post("/invoices", {
        user_id: user.id,
        plan_id: lastItem.plan_id,
        total_price: parseFloat((lastItem.plans.price * 1000).toFixed(2)), // Convert to VND as Decimal
        payment_method: "card",
        status: "completed",
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString()
      });

      // Cập nhật plan_id cho user
      const updateRes = await api.put(`/users/${user.id}`, {
        plan_id: lastItem.plan_id
      });

      // Cập nhật user trong context
      if (updateRes.data?.data) {
        // Cập nhật localStorage
        const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
        const updatedUser = { ...currentUser, plan_id: lastItem.plan_id };
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }

      // Xóa tất cả items khỏi giỏ hàng
      for (const item of cartItems) {
        await api.delete(`/cart/${item.id}`);
      }

      // Hiển thị thông báo thành công
      toast.success("🎉 Thanh toán thành công! Gói cước đã được kích hoạt.", {
        duration: 3000,
      });
      
      // Chờ một chút để người dùng thấy thông báo, sau đó reload về trang subscription
      setTimeout(() => {
        window.location.href = "/subscription";
      }, 2000);
      
    } catch (error) {
      console.error("Checkout error:", error);
      console.error("Error details:", error.response?.data);
      toast.error(`Thanh toán thất bại: ${error.response?.data?.message || error.message}`);
    } finally {
      setProcessing(false);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.plans?.price || 0);
    }, 0);
  };

  if (!user) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white text-xl mb-4">Vui lòng đăng nhập để xem giỏ hàng</p>
            <button
              onClick={() => navigate("/auth")}
              className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500"
            >
              Đăng nhập
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <ShoppingCart size={32} className="text-yellow-400" />
            <h1 className="text-4xl font-bold text-white">Giỏ hàng</h1>
          </div>

          {cartItems.length === 0 ? (
            <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-12 text-center">
              <ShoppingCart size={64} className="text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-xl mb-6">Giỏ hàng trống</p>
              <button
                onClick={() => navigate("/subscription")}
                className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all"
              >
                Xem gói cước
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {item.plans?.name || "Gói cước"}
                        </h3>
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-3xl font-bold text-yellow-400">
                            {((item.plans?.price || 0) * 1000).toLocaleString('vi-VN')}đ
                          </span>
                          <span className="text-gray-400 text-sm">
                            / {item.plans?.duration_days} ngày
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                            <Check size={14} />
                            Không giới hạn thời lượng
                          </span>
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                            <Check size={14} />
                            Full HD 1080p
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-white mb-4">Tổng cộng</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-400">
                      <span>Số lượng:</span>
                      <span>{cartItems.length} gói</span>
                    </div>
                    <div className="h-px bg-gray-700"></div>
                    <div className="flex justify-between text-white text-xl font-bold">
                      <span>Tổng tiền:</span>
                      <span className="text-yellow-400">
                        {(getTotalPrice() * 1000).toLocaleString('vi-VN')}đ
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={processing}
                    className="w-full bg-linear-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <CreditCard size={20} />
                    <span>{processing ? "Đang xử lý..." : "Thanh toán"}</span>
                  </button>

                  <p className="text-gray-400 text-xs text-center mt-4">
                    Bằng cách thanh toán, bạn đồng ý với điều khoản sử dụng
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

import { useEffect, useState } from "react";
import { Receipt, Package, Calendar, CreditCard, CheckCircle } from "lucide-react";
import api from "../lib/axios";
import { toast } from "sonner";
import { useAuth } from "../contexts/AuthContext";
import Layout from "../components/layout/Layout";
import { useNavigate } from "react-router";

export default function PurchaseHistoryPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchPurchases();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchPurchases = async () => {
    try {
      const res = await api.get("/invoices");
      // Lọc chỉ lấy hóa đơn của user hiện tại
      const userInvoices = (res.data.data || []).filter(invoice => invoice.user_id === user.id);
      setPurchases(userInvoices);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Không thể tải lịch sử mua hàng");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getRemainingDays = (endDate) => {
    if (!endDate) return 'N/A';
    const end = new Date(endDate);
    const now = new Date();
    const diffTime = end - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return 'Đã hết hạn';
    } else if (diffDays === 0) {
      return 'Hết hạn hôm nay';
    } else {
      return `Còn ${diffDays} ngày`;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500';
      case 'failed':
        return 'bg-red-500/20 text-red-400 border-red-500';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Thành công';
      case 'pending':
        return 'Đang xử lý';
      case 'failed':
        return 'Thất bại';
      default:
        return status;
    }
  };

  if (!user) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white text-xl mb-4">Vui lòng đăng nhập để xem lịch sử mua hàng</p>
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
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <Receipt size={32} className="text-yellow-400" />
            <h1 className="text-4xl font-bold text-white">Lịch sử mua hàng</h1>
          </div>

          {purchases.length === 0 ? (
            <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-12 text-center">
              <Receipt size={64} className="text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-xl mb-6">Chưa có lịch sử mua hàng</p>
              <button
                onClick={() => navigate("/subscription")}
                className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all"
              >
                Xem gói cước
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {purchases.map((purchase) => (
                <div
                  key={purchase.id}
                  className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Left: Plan Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Package className="text-yellow-400" size={24} />
                        <h3 className="text-xl font-bold text-white">
                          {purchase.plans?.name || "Gói cước"}
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Calendar size={16} className="text-gray-400" />
                          <span>{formatDate(purchase.created_at)}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-300">
                          <CreditCard size={16} className="text-gray-400" />
                          <span className="capitalize">{purchase.payment_method || 'Thẻ'}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(purchase.status)}`}>
                            {purchase.status === 'completed' && <CheckCircle size={14} />}
                            {getStatusText(purchase.status)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Price */}
                    <div className="text-right">
                      <div className="text-3xl font-bold text-yellow-400 mb-1">
                        {Number(purchase.total_price || 0).toLocaleString('vi-VN')}đ
                      </div>
                      <div className="text-sm text-gray-400">
                        {purchase.plans?.duration_days} ngày
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Mã đơn hàng: #{purchase.id}</span>
                      <span className={`font-medium ${
                        getRemainingDays(purchase.end_date) === 'Đã hết hạn' ? 'text-red-400' :
                        getRemainingDays(purchase.end_date).includes('Còn') && parseInt(getRemainingDays(purchase.end_date).match(/\d+/)?.[0]) <= 7 ? 'text-yellow-400' :
                        'text-green-400'
                      }`}>
                        {getRemainingDays(purchase.end_date)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Summary */}
          {purchases.length > 0 && (
            <div className="mt-8 bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">{purchases.length}</div>
                  <div className="text-sm text-gray-400">Tổng giao dịch</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    {purchases.filter(p => p.status === 'completed').length}
                  </div>
                  <div className="text-sm text-gray-400">Thành công</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-1">
                    {Number(purchases.reduce((total, p) => total + Number(p.total_price || 0), 0)).toLocaleString('vi-VN')}đ
                  </div>
                  <div className="text-sm text-gray-400">Tổng chi tiêu</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

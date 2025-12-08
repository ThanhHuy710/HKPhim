import { useEffect, useState } from "react";
import { Check, Crown } from "lucide-react";
import api from "../lib/axios";
import { toast } from "sonner";
import { useAuth } from "../contexts/AuthContext";
import Layout from "../components/layout/Layout";

export default function SubscriptionPage() {
  const { user } = useAuth();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const res = await api.get("/plans");
      setPlans(res.data.data || []);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Không thể tải danh sách gói cước");
    } finally {
      setLoading(false);
    }
  };

  const getPlanColor = (name) => {
    const lowerName = name?.toLowerCase() || '';
    if (lowerName.includes('free') || lowerName.includes('thử nghiệm')) return 'gray';
    if (lowerName.includes('tiết kiệm') || lowerName.includes('basic')) return 'blue';
    if (lowerName.includes('vip') || lowerName.includes('standard')) return 'purple';
    if (lowerName.includes('premium') || lowerName.includes('cinematic')) return 'red';
    return 'blue';
  };

  const getPlanFeatures = (plan) => {
    const features = [];
    const days = plan.duration_days;
    
    features.push({ text: "Không giới hạn thời lượng", active: true });
    features.push({ text: `Thời hạn ${days} ngày`, active: true });
    features.push({ text: "Full HD 1080p", active: true });
    features.push({ text: "Xem trên 2 thiết bị", active: true });
    features.push({ text: "Không quảng cáo", active: true });
    
    return features;
  };

  const handleSubscribe = async (planId) => {
    if (!user) {
      toast.error("Vui lòng đăng nhập để đăng ký gói cước");
      return;
    }

    try {
      // Kiểm tra xem gói đã có trong giỏ hàng chưa
      const cartRes = await api.get(`/cart`);
      const cartItems = cartRes.data.data || [];
      const existingItem = cartItems.find(item => item.plan_id === planId && item.user_id === user.id);
      
      if (existingItem) {
        toast.info("Gói cước này đã có trong giỏ hàng!");
        return;
      }

      await api.post(`/cart`, { 
        plan_id: planId,
        user_id: user.id 
      });
      toast.success("Đã thêm gói cước vào giỏ hàng!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Không thể thêm gói cước");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500"></div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              Chọn gói cước phù hợp với bạn
            </h1>
            <p className="text-xl text-gray-400">
              Trải nghiệm xem phim không giới hạn với nhiều gói cước đa dạng
            </p>
          </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => {
            const color = getPlanColor(plan.name);
            const features = getPlanFeatures(plan);
            
            const colorClasses = {
              gray: { 
                bg: 'bg-gray-800', 
                border: 'border-gray-600', 
                text: 'text-gray-300',
                button: 'bg-gray-600 hover:bg-gray-700'
              },
              blue: { 
                bg: 'bg-blue-900/30', 
                border: 'border-blue-500', 
                text: 'text-blue-400',
                button: 'bg-blue-500 hover:bg-blue-600'
              },
              purple: { 
                bg: 'bg-purple-900/30', 
                border: 'border-purple-500', 
                text: 'text-purple-400',
                button: 'bg-purple-500 hover:bg-purple-600',
                badge: true
              },
              red: { 
                bg: 'bg-red-900/30', 
                border: 'border-red-500', 
                text: 'text-red-400',
                button: 'bg-red-500 hover:bg-red-600',
                badge: true
              }
            };

            const { bg, border, text, button, badge } = colorClasses[color];

            return (
              <div 
                key={plan.id} 
                className={`relative ${bg} border-2 ${border} rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-2xl`}
              >
                {/* Badge cho gói đặc biệt */}
                {badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`${button} px-4 py-1 rounded-full flex items-center gap-2 shadow-lg`}>
                      <Crown size={16} className="text-white" />
                      <span className="text-xs font-bold text-white uppercase">Phổ biến</span>
                    </div>
                  </div>
                )}

                {/* Plan Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-bold ${text}`}>
                      {plan.price > 0 ? `${(plan.price * 1000).toLocaleString('vi-VN')}` : 'Miễn phí'}
                    </span>
                    {plan.price > 0 && (
                      <>
                        <span className={`text-2xl font-semibold ${text}`}>đ</span>
                        <span className="text-gray-400 text-sm">/ {plan.duration_days} ngày</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check 
                        size={20} 
                        className={`${feature.active ? text : 'text-gray-600'} shrink-0 mt-0.5`}
                      />
                      <span className={`text-sm ${feature.active ? 'text-white' : 'text-gray-500 line-through'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Subscribe Button */}
                {user && user.plan_id === plan.id ? (
                  <div className="w-full py-4 bg-green-600 text-white font-bold rounded-xl flex items-center justify-center gap-2">
                    <Check size={20} />
                    <span>Gói hiện tại</span>
                  </div>
                ) : (
                  <button
                    onClick={() => handleSubscribe(plan.id)}
                    className={`w-full py-4 ${button} text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl`}
                  >
                    Chọn gói
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center text-gray-400">
          <p className="text-sm">
            * Tất cả gói cước đều không ràng buộc hợp đồng. Bạn có thể hủy bất cứ lúc nào.
          </p>
        </div>
      </div>
      </div>
    </Layout>
  );
}

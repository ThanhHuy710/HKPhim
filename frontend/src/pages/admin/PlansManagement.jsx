import { useEffect, useState } from "react";
import { Plus, Edit, Trash2, Check, X as XIcon } from "lucide-react";
import api from "../../lib/axios";
import { toast } from "sonner";

export default function PlansManagement() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    duration_days: ""
  });

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

  const handleDelete = async (id) => {
    if (!confirm("Bạn có chắc muốn xóa gói cước này?")) return;
    
    try {
      await api.delete(`/plans/${id}`);
      toast.success("Xóa gói cước thành công");
      fetchPlans();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Không thể xóa gói cước");
    }
  };

  const openAddModal = () => {
    setEditingPlan(null);
    setFormData({
      name: "",
      price: "",
      duration_days: ""
    });
    setIsModalOpen(true);
  };

  const openEditModal = (plan) => {
    setEditingPlan(plan);
    setFormData({
      name: plan.name || "",
      price: plan.price || "",
      duration_days: plan.duration_days || ""
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingPlan(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = {
        ...formData,
        price: parseFloat(formData.price),
        duration_days: parseInt(formData.duration_days)
      };

      if (editingPlan) {
        await api.put(`/plans/${editingPlan.id}`, submitData);
        toast.success("Cập nhật gói cước thành công!");
      } else {
        await api.post("/plans", submitData);
        toast.success("Thêm gói cước thành công!");
      }
      fetchPlans();
      closeModal();
    } catch (error) {
      console.error("Error saving plan:", error);
      toast.error(editingPlan ? "Cập nhật thất bại!" : "Thêm gói cước thất bại!");
    }
  };

  const getPlanColor = (name) => {
    const lowerName = name?.toLowerCase() || '';
    if (lowerName.includes('free')) return 'gray';
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

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Quản lý gói cước</h1>
        <button 
          onClick={openAddModal}
          className="flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-semibold"
        >
          <Plus size={20} />
          Thêm gói cước
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const color = getPlanColor(plan.name);
          const borderColor = color === 'yellow' ? 'border-yellow-500' : color === 'red' ? 'border-red-500' : 'border-pink-500';
          const textColor = color === 'yellow' ? 'text-yellow-500' : color === 'red' ? 'text-red-500' : 'text-pink-500';
          const features = getPlanFeatures(plan);
          
          return (
            <div key={plan.id} className={`bg-gray-800 rounded-lg border-t-4 ${borderColor} overflow-hidden`}>
              <div className="p-6">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-bold ${textColor}`}>
                      {plan.price > 0 ? `${(plan.price * 1000).toLocaleString('vi-VN')}` : 'Miễn phí'}
                    </span>
                    {plan.price > 0 && (
                      <>
                        <span className={`text-2xl font-semibold ${textColor}`}>đ</span>
                        <span className="text-gray-400 text-sm">/ {plan.duration_days} ngày</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {feature.active ? (
                        <Check size={18} className="text-green-500 shrink-0" />
                      ) : (
                        <XIcon size={18} className="text-gray-600 shrink-0" />
                      )}
                      <span className={feature.active ? "text-white" : "text-gray-600"}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Admin Actions */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => openEditModal(plan)}
                    className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    <Edit size={18} />
                    <span>Sửa</span>
                  </button>
                  <button
                    onClick={() => handleDelete(plan.id)}
                    className="flex-1 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    <Trash2 size={18} />
                    <span>Xóa</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {plans.length === 0 && (
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-12 text-center">
          <p className="text-gray-400 text-lg">Chưa có gói cước nào</p>
        </div>
      )}

      {/* Modal thêm/sửa */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">
                {editingPlan ? "Chỉnh sửa gói cước" : "Thêm gói cước mới"}
              </h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-white">
                <XIcon size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Tên gói *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="VD: Basic, Premium, Cinematic"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Giá (VNĐ) *</label>
                <input
                  type="number"
                  step="1"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="0 cho gói miễn phí"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Thời hạn (ngày) *</label>
                <input
                  type="number"
                  value={formData.duration_days}
                  onChange={(e) => setFormData({...formData, duration_days: e.target.value})}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="7, 30, 60..."
                  required
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition-colors"
                >
                  {editingPlan ? "Cập nhật" : "Thêm mới"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-gray-700 text-white py-2 rounded hover:bg-gray-600 transition-colors"
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

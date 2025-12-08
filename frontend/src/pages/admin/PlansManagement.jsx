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
    duration_days: "",
    description: ""
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
      duration_days: "",
      description: ""
    });
    setIsModalOpen(true);
  };

  const openEditModal = (plan) => {
    setEditingPlan(plan);
    setFormData({
      name: plan.name || "",
      price: plan.price || "",
      duration_days: plan.duration_days || "",
      description: plan.description || ""
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
    if (name?.toLowerCase().includes('basic') || name?.toLowerCase().includes('free')) return 'yellow';
    if (name?.toLowerCase().includes('premium')) return 'red';
    if (name?.toLowerCase().includes('cinematic')) return 'pink';
    return 'blue';
  };

  const getPlanFeatures = (plan) => {
    const features = [];
    
    if (plan.duration_days === 7) {
      features.push({ text: "7 days", active: true });
      features.push({ text: "720p Resolution", active: true });
      features.push({ text: "Limited Availability", active: false });
      features.push({ text: "Desktop Only", active: false });
      features.push({ text: "Limited Support", active: false });
    } else if (plan.duration_days === 30) {
      features.push({ text: "1 Month", active: true });
      features.push({ text: "Full HD", active: true });
      features.push({ text: "Limited Availability", active: true });
      features.push({ text: "TV & Desktop", active: false });
      features.push({ text: "24/7 Support", active: false });
    } else if (plan.duration_days === 60) {
      features.push({ text: "2 Months", active: true });
      features.push({ text: "Ultra HD", active: true });
      features.push({ text: "Limited Availability", active: true });
      features.push({ text: "Any Device", active: true });
      features.push({ text: "24/7 Support", active: true });
    }
    
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
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${textColor}`}>
                      {plan.price > 0 ? `$${plan.price}` : 'Free'}
                    </span>
                    {plan.price > 0 && <span className="text-gray-400">/ month</span>}
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

                {/* Buttons */}
                <div className="space-y-3">
                  <button 
                    className={`w-full py-3 rounded border-2 ${borderColor} ${textColor} font-semibold hover:bg-opacity-10 hover:bg-white transition-colors`}
                  >
                    {plan.price > 0 ? 'CHOOSE PLAN' : 'CURRENT PLAN'}
                  </button>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => openEditModal(plan)}
                      className="flex-1 p-2 bg-blue-500/20 text-blue-500 rounded hover:bg-blue-500/30 transition-colors flex items-center justify-center gap-1"
                    >
                      <Edit size={16} />
                      <span className="text-sm">Sửa</span>
                    </button>
                    <button
                      onClick={() => handleDelete(plan.id)}
                      className="flex-1 p-2 bg-red-500/20 text-red-500 rounded hover:bg-red-500/30 transition-colors flex items-center justify-center gap-1"
                    >
                      <Trash2 size={16} />
                      <span className="text-sm">Xóa</span>
                    </button>
                  </div>
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
                <label className="block text-gray-400 mb-2">Giá ($) *</label>
                <input
                  type="number"
                  step="0.01"
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

              <div>
                <label className="block text-gray-400 mb-2">Mô tả</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  rows="3"
                  placeholder="Mô tả gói cước..."
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

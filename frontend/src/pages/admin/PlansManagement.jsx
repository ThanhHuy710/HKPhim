import { useEffect, useState } from "react";
import { Plus, Edit, Trash2, Check, X as XIcon } from "lucide-react";
import api from "../../lib/axios";
import { toast } from "sonner";

export default function PlansManagement() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
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
    setShowDeleteConfirm(true);
    setDeleteId(id);
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    
    try {
      await api.delete(`/plans/${deleteId}`);
      toast.success("Xóa gói cước thành công");
      fetchPlans();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Không thể xóa gói cước");
    } finally {
      setShowDeleteConfirm(false);
      setDeleteId(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setDeleteId(null);
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
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Quản lý gói cước</h1>
        <button 
          onClick={openAddModal}
          className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold shadow-md"
        >
          <Plus size={20} />
          Thêm gói cước
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const color = getPlanColor(plan.name);
          const borderColor = color === 'yellow' ? 'border-yellow-500' : color === 'red' ? 'border-red-500' : 'border-blue-500';
          const textColor = color === 'yellow' ? 'text-yellow-500' : color === 'red' ? 'text-red-500' : 'text-blue-500';
          const features = getPlanFeatures(plan);
          
          return (
            <div key={plan.id} className={`bg-white rounded-xl border-t-4 ${borderColor} overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}>
              <div className="p-6">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-bold ${textColor}`}>
                      {plan.price > 0 ? `${(plan.price * 1000).toLocaleString('vi-VN')}` : 'Miễn phí'}
                    </span>
                    {plan.price > 0 && (
                      <>
                        <span className={`text-2xl font-semibold ${textColor}`}>đ</span>
                        <span className="text-gray-500 text-sm">/ {plan.duration_days} ngày</span>
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
                        <XIcon size={18} className="text-gray-400 shrink-0" />
                      )}
                      <span className={feature.active ? "text-gray-900" : "text-gray-400"}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Admin Actions */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => openEditModal(plan)}
                    className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 font-semibold shadow-md"
                  >
                    <Edit size={18} />
                    <span>Sửa</span>
                  </button>
                  <button
                    onClick={() => handleDelete(plan.id)}
                    className="flex-1 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2 font-semibold shadow-md"
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
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center shadow-lg">
          <p className="text-gray-500 text-lg">Chưa có gói cước nào</p>
        </div>
      )}

      {/* Modal thêm/sửa */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {editingPlan ? "Chỉnh sửa gói cước" : "Thêm gói cước mới"}
              </h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                <XIcon size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Tên gói *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                  placeholder="VD: Basic, Premium, Cinematic"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Giá (VNĐ) *</label>
                <input
                  type="number"
                  step="1"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                  placeholder="0 cho gói miễn phí"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Thời hạn (ngày) *</label>
                <input
                  type="number"
                  value={formData.duration_days}
                  onChange={(e) => setFormData({...formData, duration_days: e.target.value})}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                  placeholder="7, 30, 60..."
                  required
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold shadow-md"
                >
                  {editingPlan ? "Cập nhật" : "Thêm mới"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-100 rounded-full mr-4">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Xác nhận xóa</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Bạn có chắc chắn muốn xóa gói cước này không? Hành động này không thể hoàn tác.
            </p>
            <div className="flex gap-3">
              <button
                onClick={cancelDelete}
                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Hủy
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

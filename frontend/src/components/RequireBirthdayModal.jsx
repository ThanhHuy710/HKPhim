import { useState } from 'react';
import { X, Calendar, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import api from '../lib/axios';
import { calculateAge } from '../utils/ageVerification';

export default function RequireBirthdayModal({ user, onUpdate }) {
  const [birthday, setBirthday] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!birthday) {
      toast.error('Vui lòng chọn ngày sinh!');
      return;
    }

    // Kiểm tra tuổi (phải từ 13 tuổi trở lên)
    const age = calculateAge(birthday);
    if (age < 13) {
      toast.error('Bạn phải từ 13 tuổi trở lên để sử dụng dịch vụ!');
      return;
    }

    setLoading(true);
    try {
      // Chuyển đổi sang định dạng ISO date cho MySQL
      const formattedBirthday = new Date(birthday).toISOString().split('T')[0];
      
      const res = await api.put(`/users/${user.id}`, { birthday: formattedBirthday });
      toast.success('Cập nhật ngày sinh thành công!');
      
      // Cập nhật user trong AuthContext
      if (onUpdate) {
        onUpdate(res.data.data);
      }
    } catch (error) {
      console.error('Error updating birthday:', error);
      const errorMsg = error.response?.data?.message || error.response?.data?.error || 'Cập nhật thất bại!';
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 border border-yellow-400/50 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-yellow-400/20 rounded-full">
            <Calendar size={28} className="text-yellow-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Cập nhật ngày sinh</h2>
            <p className="text-gray-400 text-sm">Bắt buộc để tiếp tục</p>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 mb-6 flex gap-3">
          <AlertCircle size={20} className="text-yellow-400 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="text-yellow-400 font-semibold mb-1">Tại sao cần ngày sinh?</p>
            <p className="text-gray-300">
              Chúng tôi cần xác minh độ tuổi của bạn để đảm bảo nội dung phù hợp. 
              Bạn phải từ 13 tuổi trở lên để sử dụng dịch vụ.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-300 font-medium mb-2">
              Ngày sinh của bạn *
            </label>
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
              required
              autoFocus
            />
            <p className="text-gray-500 text-xs mt-2">
              Thông tin này sẽ được bảo mật và chỉ dùng để xác minh độ tuổi
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Calendar size={20} />
            <span>{loading ? 'Đang cập nhật...' : 'Xác nhận ngày sinh'}</span>
          </button>
        </form>

        {/* Note */}
        <p className="text-center text-gray-500 text-xs mt-4">
          Bạn không thể đóng cửa sổ này cho đến khi cập nhật ngày sinh
        </p>
      </div>
    </div>
  );
}

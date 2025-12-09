import { useState } from "react";

export default function Banner() {
  const [phone, setPhone] = useState("");

  const handleRegister = () => {
    if (!phone) return;
    // TODO: Gọi API đăng ký
    console.log("Số điện thoại:", phone);
  };

  return (
    <div class="bg-[linear-gradient(172.23deg,#000000_4.94%,rgba(0,0,0,0.35)_45.74%,rgba(0,0,0,0.9)_92.94%),url(../../public/images/Banner.png)] w-full md:min-h-[600px] bg-no-repeat bg-cover bg-center py-20">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-3xl">
          <p class="text-white text-lg leading-relaxed">
            Chào mừng bạn đến với HKPhim{" "}
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 lg:gap-12 mt-6">
          <div>
            <h1 class="text-white xl:text-5xl md:text-5xl text-4xl font-bold leading-tight!">
              Xem phim đa dạng,nhiều thể loại hấp dẫn
            </h1>
            <div class="mt-8 text-lg flex gap-6 items-center   flex-wrap text-white">
              <p>Kho nội dung khổng lồ, cập nhật liên tục</p>
            </div>
            <div class="mt-16 flex flex-wrap gap-x-8 gap-y-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  className="px-3 py-2 rounded text-black bg-white"
                  defaultValue="+84"
                >
                  <option value="+84">+84</option>
                </select>
                <input
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  className="px-3 py-2 rounded flex-1 text-black bg-white"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded"
                  onClick={handleRegister}
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
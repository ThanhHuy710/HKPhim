import { useState } from "react";

export default function HeroSection() {
  const [phone, setPhone] = useState("");

  const handleRegister = () => {
    if (!phone) return;
    // TODO: Gọi API đăng ký
    console.log("Số điện thoại:", phone);
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">Chào mừng đến HK Phim</h1>
        <p className="hero-subtitle">Xem phim đa dạng, nhiều thể loại</p>
        <p className="hero-description">Kho nội dung phong phú, cập nhật liên tục</p>

        <div className="hero-register">
          <select className="country-code">
            <option value="+84">+84</option>
          </select>
          <input 
            type="tel" 
            placeholder="Nhập số điện thoại" 
            className="phone-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="register-btn" onClick={handleRegister}>
            Đăng ký
          </button>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router";
import { Facebook, Youtube, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
   <footer className="bg-black text-white py-8 font-manrope">
  <div className="max-w-[1440px] mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between gap-8">
    
    {/* Logo + mô tả */}
    <div className="flex flex-col items-start md:w-1/3">
      <img src="/images/Logo.png" alt="HKphim Logo" className="h-12 w-12 mb-4" />
      <p className="hidden md:block text-sm leading-relaxed">
        HK phim – Phim hay cả rổ - Trang xem phim online chất lượng cao miễn phí Vietsub,
         thuyết minh, lồng tiếng full HD. Kho phim mới khổng lồ, phim chiếu rạp, phim bộ,
          phim lẻ từ nhiều quốc gia như Việt Nam, Hàn Quốc, Trung Quốc, Thái Lan, Nhật Bản,
           Âu Mỹ… đa dạng thể loại. Khám phá nền tảng phim trực tuyến hay nhất 2024 chất lượng 4K!
      </p>
    </div>

    {/* Thông tin */}
    <div className="md:w-1/3">
      <h4 className="text-brand-yellow font-semibold mb-3">Thông tin</h4>
      <ul className="space-y-2 text-sm">
        <li><Link to="/gioi-thieu" className="hidden hover:text-brand-green">Giới thiệu</Link></li>
        <li><Link to="/lien-he" className="hover:text-brand-green">Liên hệ</Link></li>
        <li><Link to="/dieu-khoan" className="hidden md:inline hover:text-brand-green">Điều khoản sử dụng</Link></li>
        <li><Link to="/chinh-sach" className="hidden md:inline hover:text-brand-green">Chính sách bảo mật</Link></li>
      </ul>
    </div>

    {/* Mạng xã hội */}
    <div className="md:w-1/3">
      <h4 className="text-brand-yellow font-semibold mb-3">Kết nối với chúng tôi</h4>
      <div className="flex space-x-4">
        <a href="#" aria-label="Facebook" className="hover:text-brand-green"><Facebook size={20} /></a>
        <a href="#" aria-label="YouTube" className="hover:text-brand-green"><Youtube size={20} /></a>
        <a href="#" aria-label="Instagram" className="hover:text-brand-green"><Instagram size={20} /></a>
        <a href="#" aria-label="Twitter" className="hover:text-brand-green"><Twitter size={20} /></a>
        <a href="mailto:contact@hkphim.com" aria-label="Email" className="hover:text-brand-green"><Mail size={20} /></a>
      </div>
    </div>
  </div>

  {/* Copyright */}
  <div className="mt-8 text-center text-xs text-black-pale">
    &copy; 2025 HKphim. All rights reserved.
  </div>
</footer>

  );
}
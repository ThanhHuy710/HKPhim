import { Link } from "react-router";
import { Facebook, Youtube, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-text">HKphim</span>
          </div>
          <p className="footer-description">
            Xem phim online miễn phí chất lượng cao với phụ đề tiếng Việt. 
            Cập nhật phim mới mỗi ngày.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Danh mục</h4>
          <ul className="footer-links">
            <li><Link to="/phim-moi">Phim mới</Link></li>
            <li><Link to="/phim-bo">Phim bộ</Link></li>
            <li><Link to="/phim-le">Phim lẻ</Link></li>
            <li><Link to="/the-loai">Thể loại</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Thông tin</h4>
          <ul className="footer-links">
            <li><Link to="/gioi-thieu">Giới thiệu</Link></li>
            <li><Link to="/lien-he">Liên hệ</Link></li>
            <li><Link to="/dieu-khoan">Điều khoản sử dụng</Link></li>
            <li><Link to="/chinh-sach">Chính sách bảo mật</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Kết nối với chúng tôi</h4>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook" className="social-icon">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="social-icon">
              <Youtube size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="social-icon">
              <Twitter size={20} />
            </a>
            <a href="mailto:contact@hkphim.com" aria-label="Email" className="social-icon">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 HKphim. All rights reserved.</p>
      </div>
    </footer>
  );
}

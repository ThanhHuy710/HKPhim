import { useState, useEffect } from "react";
import { Play, Star, Users, Film, Sparkles, Zap } from "lucide-react";

export default function Banner() {
  const [currentText, setCurrentText] = useState("");
  const fullText = "HKPhim - Nơi giải trí đỉnh cao";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleExplore = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = "/auth";
  };

  return (
    <div className="relative bg-linear-to-br from-gray-900 via-black to-gray-900 w-full min-h-[700px] bg-no-repeat bg-cover bg-center py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url(../../public/images/Banner.png)] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gray-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg animate-bounce delay-500"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-white text-lg font-medium tracking-wide uppercase animate-fade-in">
                {currentText}<span className="animate-blink">|</span>
              </p>
              <h1 className="text-white xl:text-6xl md:text-5xl text-4xl font-bold leading-tight animate-slide-up">
                Xem phim đa dạng,
                <span className="text-white">
                  nhiều thể loại hấp dẫn
                </span>
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-white text-xl leading-relaxed">
                Kho nội dung khổng lồ, cập nhật liên tục với hàng nghìn bộ phim chất lượng cao
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-white group cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <Film className="w-6 h-6 text-white group-hover:animate-spin" />
                  <span className="text-lg group-hover:text-gray-300 transition-colors">4K Ultra HD</span>
                </div>
                <div className="flex items-center gap-3 text-white group cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <Users className="w-6 h-6 text-white group-hover:animate-bounce" />
                  <span className="text-lg group-hover:text-gray-300 transition-colors">Xem mọi lúc mọi nơi</span>
                </div>
                <div className="flex items-center gap-3 text-white group cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <Star className="w-6 h-6 text-white group-hover:animate-pulse" />
                  <span className="text-lg group-hover:text-gray-300 transition-colors">Đánh giá chất lượng</span>
                </div>
                <div className="flex items-center gap-3 text-white group cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <Play className="w-6 h-6 text-white group-hover:animate-ping" />
                  <span className="text-lg group-hover:text-gray-300 transition-colors">Không quảng cáo</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                type="button"
                onClick={handleExplore}
                className="group relative px-8 py-4 bg-red-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer z-20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 animate-spin" />
                  Khám phá ngay
                  <Zap className="w-5 h-5 animate-pulse" />
                </span>
                <div className="absolute inset-0 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping group-hover:animate-none"></div>
              </button>
            </div>
          </div>

          {/* Right Content - Stats or Image */}
          <div className="relative">
            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 space-y-6">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-2">Thống kê</h3>
                <p className="text-gray-400">Nền tảng giải trí hàng đầu</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-1 group-hover:animate-bounce">10K+</div>
                  <div className="text-gray-300 text-sm flex items-center justify-center gap-1">
                    <Film className="w-4 h-4" />
                    Bộ phim
                  </div>
                </div>
                <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-1 group-hover:animate-bounce">50K+</div>
                  <div className="text-gray-300 text-sm flex items-center justify-center gap-1">
                    <Users className="w-4 h-4" />
                    Người dùng
                  </div>
                </div>
                <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-1 group-hover:animate-bounce">24/7</div>
                  <div className="text-gray-300 text-sm flex items-center justify-center gap-1">
                    <Star className="w-4 h-4" />
                    Hỗ trợ
                  </div>
                </div>
                <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-1 group-hover:animate-bounce">HD</div>
                  <div className="text-gray-300 text-sm flex items-center justify-center gap-1">
                    <Play className="w-4 h-4" />
                    Chất lượng
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-400 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#000000"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-up { animation: slide-up 1.2s ease-out 0.3s both; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-blink { animation: blink 1s infinite; }
      `}</style>
    </div>
  );
}
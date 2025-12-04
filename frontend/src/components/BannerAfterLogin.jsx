import { useState, useEffect } from "react";
import { Play, Info, ChevronLeft, ChevronRight } from "lucide-react";
import api from "../lib/axios";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const res = await api.get("/films", { params: { limit: 5 } });
        const filmsData = res.data.data || [];
        console.log("Films:", filmsData);
        console.log("First film genres:", filmsData[0]?.film_genres);
        setFilms(filmsData);
      } catch (error) {
        console.error("Error fetching films:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, []);

  useEffect(() => {
    if (films.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % films.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [films]);

  if (loading) {
    return (
      <div className="w-full h-[85vh] bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
      </div>
    );
  }

  if (films.length === 0) {
    return (
      <div className="w-full h-[85vh] bg-black flex items-center justify-center">
        <p className="text-white text-lg">Không có phim nào</p>
      </div>
    );
  }

  const currentMovie = films[currentSlide];
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % films.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + films.length) % films.length);

  return (
    <div className="relative w-full bg-black overflow-hidden">
      {/* Main Banner Section */}
      <div className="relative w-full h-[85vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={currentMovie.poster_url || "/images/Banner.png"}
            alt={currentMovie.title}
            className="w-full h-full object-cover transition-all duration-1000"
            key={currentSlide}
          />
          
          {/* Gradient Overlays - Strong left fade */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/80"></div>
        </div>

        {/* Content - Left Side */}
        <div className="relative h-full max-w-7xl mx-auto px-12 flex items-center">
          <div className="max-w-2xl space-y-6 z-10">
            {/* Metadata Badge */}
            <div className="flex items-center gap-4 animate-fadeIn">
              <span className="px-3 py-1 bg-red-600/90 backdrop-blur-sm text-white text-xs font-bold rounded uppercase tracking-widest shadow-lg">
                HOT
              </span>
              <span className="text-gray-300 text-sm font-medium">{currentMovie.year || 2025}</span>
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-400 text-base drop-shadow-lg">★</span>
                <span className="text-white text-sm font-semibold">{currentMovie.average_rating || "N/A"}</span>
              </div>
            </div>

            {/* Title - Premium Typography */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] animate-slideUp uppercase tracking-tight drop-shadow-2xl">
              {currentMovie.title}
            </h1>

            {/* Genre Tags - Elegant */}
            {currentMovie.film_genres && currentMovie.film_genres.length > 0 && (
              <div className="flex flex-wrap gap-2 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                {currentMovie.film_genres.slice(0, 3).map((filmGenre, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-orange-400 text-xs font-semibold rounded-full border border-orange-500/30 hover:bg-orange-500/20 hover:border-orange-500/60 transition-all duration-300 shadow-lg"
                  >
                    {filmGenre?.genres?.name || "Thể loại"}
                  </span>
                ))}
              </div>
            )}

            {/* Description - Clean & Readable */}
            <p className="text-gray-200 text-base leading-relaxed max-w-xl animate-fadeIn line-clamp-3 drop-shadow-md" style={{ animationDelay: '0.2s' }}>
              {currentMovie.description || "Khám phá câu chuyện đầy cảm xúc và hấp dẫn."}
            </p>

            {/* Action Buttons - Modern Design */}
            <div className="flex gap-4 pt-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <button className="group flex items-center gap-3 px-8 py-3.5 bg-white text-black text-sm font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 active:scale-95 shadow-2xl hover:shadow-white/30">
                <Play className="w-5 h-5 fill-black group-hover:scale-110 transition-transform duration-300" />
                <span className="tracking-wide">PLAY NOW</span>
              </button>
              <button className="group flex items-center gap-3 px-8 py-3.5 bg-white/10 backdrop-blur-md text-white text-sm font-semibold rounded-lg border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 active:scale-95 shadow-xl">
                <Info className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="tracking-wide">MORE INFO</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3D Thumbnail Carousel - Premium Design */}
        <div 
          className="absolute right-16 bottom-12 z-20"
          style={{ perspective: '1500px', perspectiveOrigin: 'center' }}
        >
          <div className="flex gap-3 items-end">
            {films.map((movie, index) => {
              const isActive = index === currentSlide;
              const offset = index - currentSlide;
              const distance = Math.abs(offset);
              
              // Tạo hiệu ứng to nhỏ xen kẽ
              const isEven = index % 2 === 0;
              const baseHeight = isActive ? 280 : (isEven ? 200 : 160);
              const baseWidth = isActive ? 180 : (isEven ? 130 : 100);
              
              return (
                <button
                  key={movie.id}
                  onClick={() => setCurrentSlide(index)}
                  className="relative shrink-0 transition-all duration-700 ease-out group"
                  style={{
                    width: `${baseWidth}px`,
                    height: `${baseHeight}px`,
                    transform: `
                      rotateY(${offset * -10}deg)
                      translateX(${offset * -15}px)
                      translateZ(${isActive ? '100px' : `-${distance * 15}px`})
                      scale(${isActive ? 1.1 : 1})
                    `,
                    opacity: distance > 2 ? 0 : isActive ? 1 : 0.6,
                    zIndex: 20 - distance,
                    filter: isActive ? 'brightness(1.2) saturate(1.1)' : 'brightness(0.75)',
                  }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                    <img
                      src={movie.poster_url || "/images/Banner.png"}
                      alt={movie.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Active State Overlay */}
                    {isActive && (
                      <>
                        <div className="absolute inset-0 ring-[4px] ring-white shadow-[0_0_40px_rgba(255,255,255,0.6)] rounded-xl pointer-events-none"></div>
                        <div className="absolute inset-0 bg-linear-to-t from-white/30 via-transparent to-transparent"></div>
                        
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                      </>
                    )}
                    
                    {/* Hover Overlay */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                    )}
                  </div>
                  
                  {/* Refined Reflection */}
                  <div 
                    className="absolute top-full left-0 right-0 h-16 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)',
                      transform: 'scaleY(-0.4) translateY(-2px)',
                      filter: 'blur(3px)',
                      opacity: isActive ? 0.5 : 0.2,
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
          opacity: 0;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
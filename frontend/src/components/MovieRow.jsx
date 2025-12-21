import React, { useRef } from "react";
import { Link } from "react-router";
import MovieCard from "./MovieCard";
import { ArrowLeft,ArrowRight } from "lucide-react";
export default function MovieRow({ title, films, viewAllLink }) {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="mb-10">
      {/* Header row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <Link
          to={`search/${viewAllLink}`}
          className="text-sm text-brand-green hover:underline"
        >
          Xem tất cả
        </Link>
      </div>

      {/* Movie list with scroll */}
      <div className="relative">
        {/* Nút trái */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black-mid text-white px-2 py-1 rounded-full z-10"
        >
          <ArrowLeft />
        </button>

        {/* Hàng phim */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {films.map((film) => (
            <MovieCard film={film} />
          ))}
        </div>

        {/* Nút phải */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black-mid text-white px-2 py-1 rounded-full z-10"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}

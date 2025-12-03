import { Link } from "react-router";

export default function MovieCard({film }) {

  return (
    <Link to={`/film/${film.id}`} 
      className="shrink-0 w-1/4 sm:w-1/4 md:w-1/6 lg:w-1/8">
      <div className="aspect-2/3">
        <img
          src={film.poster_url}
          alt={film.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-white font-semibold truncate">
        {film.title}
      </p>
    </Link>
  );
}

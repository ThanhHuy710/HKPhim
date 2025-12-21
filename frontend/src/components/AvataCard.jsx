import { useNavigate } from "react-router-dom";

export default function AvataCard({ actor }) {
  const handleClick = () => {
    window.location.href = `/search/actor/?name=${actor}`;
  };

  return (
    <button
      onClick={handleClick}
      className="shrink-0 w-1/4 sm:w-1/4 md:w-1/6 lg:w-1/8 text-left bg-transparent border-none p-0 cursor-pointer"
    >
      <div className="aspect-2/3">
        <img
          src="../../public/images/DefaultAvata.png" 
          alt={actor}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-white font-semibold truncate">
        {actor}
      </p>
    </button>
  );
}

import { useNavigate } from "react-router-dom";
import { IMG_CDN } from "../utils/constant";
import { PlayCircle, PlusCircle, ThumbsUp } from "lucide-react";
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { poster_path, id } = movie;
  if (!poster_path) return;

  const handleMoviePlay = () => {
    navigate(`/watch/${id}`);
  };

  return (
    <div className="relative group h-58 w-36 md:w-42 px-4 cursor-pointer">
      {/* Base Poster */}
      <img
        src={IMG_CDN + poster_path}
        alt={movie?.title}
        className="rounded-md w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Hover Pop-up Card */}
      <div className="absolute z-10 top-0 left-0 hidden group-hover:flex flex-col bg-[#141414] text-white p-4 w-80 h-auto rounded-lg shadow-2xl transition-all duration-300">
        <img
          src={IMG_CDN + poster_path}
          className="rounded-lg w-full h-26 object-cover"
        />
        <div className="flex gap-4 py-3 text-xl">
          <button onClick={handleMoviePlay} className="cursor-pointer">
            <PlayCircle className="w-7 h-7 cursor-pointer hover:text-red-500" />
          </button>
          <button>
            {" "}
            <PlusCircle className="w-7 h-7 cursor-pointer hover:text-green-500" />
          </button>
          <button>
            <ThumbsUp className="w-7 h-7 cursor-pointer hover:text-blue-500" />
          </button>
        </div>
        <div className="text-white text-lg font-semibold">
          {movie?.original_title}
        </div>
        <div className="text-green-400 font-bold text-sm">
          {movie?.vote_average} Rating{" "}
        </div>
        <div className="text-gray-400 text-sm">
          {movie?.genres?.join(" • ")}
        </div>
      </div>

      {/* Right corner arrow */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full">
        <span className="text-white text-4xl font-bold">&#8250;</span>
      </div>
    </div>
  );
};

export default MovieCard;

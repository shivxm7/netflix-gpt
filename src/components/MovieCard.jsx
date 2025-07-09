import { IMG_CDN } from "../utils/constant";

// const MovieCard = ({ movie }) => {
//   const { poster_path } = movie;
//   if (!poster_path) return;
//   return (
//     <div className="w-36 md:w-42 px-4">
//       <img src={IMG_CDN + poster_path} alt="movie-img" />
//     </div>
//   );
// };

const MovieCard = ({ movie }) => {
  const { poster_path } = movie;
  if (!poster_path) return;
  return (
    <div className="relative group h-58 w-36 md:w-42 px-4 cursor-pointer">
      {/* Base Poster */}
      <img
        src={IMG_CDN + poster_path}
        alt={movie?.title}
        className="rounded-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Hover Pop-up Card */}
      <div className="absolute z-10 top-0 left-0 hidden group-hover:flex flex-col bg-[#141414] text-white p-4 w-80 h-auto rounded-lg shadow-2xl transition-all duration-300">
        <img
          src={IMG_CDN + poster_path}
          className="rounded-lg w-full h-26 object-cover"
        />
        <div className="flex gap-4 py-3 text-xl">
          <button className="cursor-pointer">▶️</button>
          <button>➕</button>
          <button>👍</button>
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
    </div>
  );
};

export default MovieCard;

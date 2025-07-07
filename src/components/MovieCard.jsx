import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return;
  return (
    <div className="w-36 md:w-42 px-4">
      <img src={IMG_CDN + poster_path} alt="movie-img" />
    </div>
  );
};

export default MovieCard;

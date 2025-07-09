import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  const { poster_path } = movies;

  return (
    <div className="px-3 md:px-6 text-white">
      <h1 className="text-2xl md:text-3xl py-3 md:py-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>

        {/* Static Arrow on Right Side */}
        {/* <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full hover:scale-110 transition">
          <span className="text-white text-4xl font-bold">&#8250;</span>
        </div> */}
      </div>
    </div>
  );
};

export default MovieList;

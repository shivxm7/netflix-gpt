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
            return <MovieCard key={movie.id} poster_path={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black">
      <div className="md:-mt-64 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList
          title={"Now Playing Hollywood Movies"}
          movies={movies.nowPlayingHollywoodMovies}
        />
        <MovieList
          title={"Top TV Shows in India"}
          movies={movies.topTvShowInIndia}
        />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
      {/* 

        MovieList - Popular
          MovieCards * n
        MovieList - Trending
        MovieList - NowPlaying

    */}
    </div>
  );
};

export default SecondaryContainer;

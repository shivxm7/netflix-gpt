import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black">
      <div className="md:-mt-64 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
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

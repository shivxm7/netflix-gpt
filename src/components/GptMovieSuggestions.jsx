import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);

  const { movies, moviesResult } = gpt;

  if (!movies || !moviesResult) return;

  return (
    <div className="my-2 h-full bg-black/90 text-white">
      <div>
        {movies.map((movie, index) => {
          return (
            <MovieList key={movie} title={movie} movies={moviesResult[index]} />
          );
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;

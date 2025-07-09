import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_API } from "../utils/constant";
import { useEffect } from "react";
import { addTopRatedMovies } from "../store/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const top_rated_movies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(MOVIE_API + "movie/top_rated?page=1", API_OPTIONS);
    const json = await data.json();

    //console.log(json.results);

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !top_rated_movies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;

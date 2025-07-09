import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_API } from "../utils/constant";
import { useEffect } from "react";
import { addPopularMovies } from "../store/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popular_Movies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(MOVIE_API + "movie/popular?page=1", API_OPTIONS);
    const json = await data.json();

    //console.log(json.results);

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popular_Movies && getPopularMovies();
  }, []);
};

export default usePopularMovies;

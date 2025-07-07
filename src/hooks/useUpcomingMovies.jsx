import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_API } from "../utils/constant";
import { useEffect } from "react";
import { addUpcomingMovies } from "../store/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcoming_Movies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(MOVIE_API + "upcoming?page=1", API_OPTIONS);
    const json = await data.json();

    //console.log(json.results);

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcoming_Movies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;

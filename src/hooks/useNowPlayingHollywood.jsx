import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_API } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayingHollywoodMovies } from "../store/movieSlice";

const useNowPlayingHollywood = () => {
  const dispatch = useDispatch();

  const now_playing_Hollywood_Movies = useSelector(
    (store) => store.movies.nowPlayingHollywoodMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      MOVIE_API + "movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    // console.log(json.results);

    dispatch(addNowPlayingHollywoodMovies(json.results));
  };

  useEffect(() => {
    !now_playing_Hollywood_Movies && getNowPlayingMovies();
  }, []);
};
export default useNowPlayingHollywood;

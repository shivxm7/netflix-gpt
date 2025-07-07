import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_API } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../store/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const now_playing_Movies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(MOVIE_API + "now_playing?page=1", API_OPTIONS);
    const json = await data.json();

    //console.log(json.results);

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !now_playing_Movies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;

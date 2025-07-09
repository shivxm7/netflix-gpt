import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_API } from "../utils/constant";
import { useEffect } from "react";
import { addTopTvShowInIndia } from "../store/movieSlice";

const useTopTvShowInIndia = () => {
  const dispatch = useDispatch();

  const now_playing_Movies = useSelector(
    (store) => store.movies.topTvShowInIndia
  );

  const getNowPlayingShow = async () => {
    const data = await fetch(
      MOVIE_API +
        "discover/tv?sort_by=popularity.desc&region=IN&with_original_language=hi&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    console.log(json.results);

    dispatch(addTopTvShowInIndia(json.results));
  };

  useEffect(() => {
    !now_playing_Movies && getNowPlayingShow();
  }, []);
};

export default useTopTvShowInIndia;

import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_API } from "../utils/constant";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const usePlayingTrailer = (id) => {
  const dispatch = useDispatch();

  const trailer_Vedio = useSelector((store) => store.movies.trailerVideo);

  const getMovieVedio = async () => {
    const data = await fetch(MOVIE_API + id + "/videos", API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];

    const { key } = trailer;

    dispatch(addTrailer(key));
  };

  useEffect(() => {
    !trailer_Vedio && getMovieVedio();
  }, []);
};

export default usePlayingTrailer;

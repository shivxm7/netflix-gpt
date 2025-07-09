import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constant";

const WatchMovie = () => {
  const { id } = useParams();
  const [trailerKey, setTrailerKey] = useState(null);
  const fetchTrailer = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );

    const data = await res.json();

    const officialTrailer = data.results.find(
      (video) =>
        video.type === "Trailer" &&
        video.official === true &&
        video.site === "YouTube"
    );

    setTrailerKey(officialTrailer?.key || data.results[0]?.key);
  };

  useEffect(() => {
    fetchTrailer();
  }, [id]);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
        title="YouTube video player"
        allowFullScreen
      />
    </div>
  );
};

export default WatchMovie;

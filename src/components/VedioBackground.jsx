import { useSelector } from "react-redux";
import usePlayingTrailer from "../hooks/usePlayingTrailer";

const VedioBackground = ({ id }) => {
  const trailerId = useSelector((store) => store.movies.trailerVideo);

  usePlayingTrailer(id);

  return (
    <div className="max-w-full">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VedioBackground;

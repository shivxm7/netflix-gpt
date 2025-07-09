import { useSelector } from "react-redux";
import VedioBackground from "./VedioBackground";
import VedioTitle from "./VedioTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const index = Math.floor(Math.random() * 20);

  const mainMovie = movies[index];

  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VedioTitle title={title} overview={overview} id={id} />
      <VedioBackground id={id} />
    </div>
  );
};

export default MainContainer;

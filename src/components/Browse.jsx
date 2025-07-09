import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import Footer from "./Footer";
import useNowPlayingHollywood from "../hooks/useNowPlayingHollywood";
import useTopTvShowInIndia from "../hooks/useTopTvShowInIndia";

const Browse = () => {
  const showGptSearchBtn = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useUpcomingMovies();
  useNowPlayingHollywood();
  useTopTvShowInIndia();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGptSearchBtn ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/* 
          MainContainer
            - VedioBackground
            - Vedio Title
          SecondaryContainer
            - MoviesList * n
              - cards * n 
      */}
      <Footer />
    </div>
  );
};

export default Browse;

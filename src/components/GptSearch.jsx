import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between relative">
        <div className="fixed -z-10">
          <img
            className="h-screen md:w-screen object-cover "
            src={BG_IMAGE}
            alt="body"
          />
        </div>
        <div>
          <GptSearchBar />
          <GptMovieSuggestions />
        </div>
      </div>
    </>
  );
};

export default GptSearch;

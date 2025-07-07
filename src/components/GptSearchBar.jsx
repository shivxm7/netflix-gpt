import { useRef } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import ai from "../gemini/genai";
import { addGptMovies } from "../store/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1";

    const data = await fetch(url, API_OPTIONS);

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    // Make API call to GPT API to get Movie Res
    const queryText =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me name of 5 movies, comma seprated like the example result given ahead. Example Result: Gadar, Hera Pheri, Baby, Don, Golmal";
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: queryText,
    });

    const geminiMovies = response?.text.split(",");

    if (!geminiMovies) return;

    // for each movie search TMDB APi

    const promiseData = geminiMovies.map((movie) => {
      return searchMovieTMDB(movie.trim());
    });

    const tmdbData = await Promise.all(promiseData);

    // console.log(tmdbData);

    dispatch(addGptMovies({ movieName: geminiMovies, movieResult: tmdbData }));

    // searchMovieTMDB("Sanam Teri Kasam");
  };

  return (
    <div className="pt-[25%] md:pt-[10%] flex justify-center ">
      <form
        className="bg-black w-full md:mx-0 px-2 mx-4 md:w-1/2
        ' grid grid-cols-12 rounded-md"
        onClick={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-2 md:p-4 md:m-4 rounded-sm bg-white col-span-10"
          placeholder="what whould you like to watch today ?"
        />
        <button
          className="mx-0 my-2 md:py-2 md:px-2 md:my-4 md:mx-2 bg-red-700 text-white text-sm md:text-lg rounded-md col-span-2 cursor-pointer hover:bg-red-500"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

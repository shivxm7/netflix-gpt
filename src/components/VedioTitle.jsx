import { useNavigate } from "react-router-dom";

const VedioTitle = ({ title, overview, id }) => {
  const navigate = useNavigate();
  const handleMoviePlay = () => {
    navigate(`/watch/${id}`);
  };
  return (
    <div className="w-full aspect-video pt-[22%] md:pt-[15%] pl-4 md:pl-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl md:text-6xl font-semibold md:font-bold">
        {title}
      </h1>
      <p className="md:py-6 md:text-lg w-0 md:w-2/6 line-clamp-1 md:line-clamp-2">
        {" "}
        {overview}
      </p>
      <div className="-mt-4 md:mt-2">
        <button
          onClick={handleMoviePlay}
          className="px-6 py-1 md:px-12 md:py-4 mt-0 bg-gray-300 text-black rounded-md text-lg md:text-xl cursor-pointer hover:bg-gray-400"
        >
          Play
        </button>
        <button className=" hidden md:inline-block mx-4 px-12 py-4 mt-4 bg-gray-300/30  text-black rounded-md text-xl cursor-pointer hover:bg-gray-400">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;

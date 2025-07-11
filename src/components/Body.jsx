import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPage from "./IndexPage";
import { NotFound } from "./NotFound";
import WatchMovie from "./WatchMovie";
import Tvshows from "../pages/Tvshows";
import Movies from "../pages/movies";
import Trending from "../pages/trending";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/tvshows",
      element: <Tvshows />,
    },
    {
      path: "/movies",
      element: <Movies />,
    },
    {
      path: "/trending",
      element: <Trending />,
    },
    {
      path: "/watch/:id",
      element: <WatchMovie />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

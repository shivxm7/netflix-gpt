import { configureStore } from "@reduxjs/toolkit";
import getStartReducer from "./getStartSlice";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    getStart: getStartReducer,
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;

import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesResult: null,
    movies: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { movieName, movieResult } = action.payload;
      state.movies = movieName;
      state.moviesResult = movieResult;
    },
  },
});

export const { toggleGptSearchView, addGptMovies } = gptSlice.actions;

export default gptSlice.reducer;

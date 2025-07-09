import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingHollywoodMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    topTvShowInIndia: null,
    upcomingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayingHollywoodMovies: (state, action) => {
      state.nowPlayingHollywoodMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTopTvShowInIndia: (state, action) => {
      state.topTvShowInIndia = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addNowPlayingHollywoodMovies,
  addTrailer,
  addPopularMovies,
  addTopTvShowInIndia,
  addTopRatedMovies,
  addUpcomingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;

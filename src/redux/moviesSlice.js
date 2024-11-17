import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    moviesVideoSlice: [],
    popularMovies: [],
    topRatedMovies: []
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieVideoTrailer: (state, action) => {
      state.movieVideoTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    }
  }
});

export const {
  addNowPlayingMovies,
  addMovieVideoTrailer,
  addPopularMovies,
  addTopRatedMovies
} = moviesSlice.actions;

export default moviesSlice.reducer;

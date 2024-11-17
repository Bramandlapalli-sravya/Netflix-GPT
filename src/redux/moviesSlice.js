import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    moviesVideoSlice: []
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieVideoTrailer: (state, action) => {
      state.movieVideoTrailer = action.payload;
    }
  }
});

export const { addNowPlayingMovies, addMovieVideoTrailer } =
  moviesSlice.actions;

export default moviesSlice.reducer;

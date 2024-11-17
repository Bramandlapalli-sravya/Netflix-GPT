import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function BrowseSecondComponent() {
  const nowPlayingmoviesList = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );
  const popularMoviesList = useSelector((state) => state.movies?.popularMovies);
  const topRatedMoviesList = useSelector(
    (state) => state.movies?.topRatedMovies
  );

  return (
    <div className="relative">
      <div className="-mt-40 flex flex-col gap-6">
        <MovieList title={"Now Playing"} movies={nowPlayingmoviesList} />
        <MovieList title={"Top Rated"} movies={topRatedMoviesList} />
        <MovieList title={"Popular"} movies={popularMoviesList} />
      </div>
    </div>
  );
}

export default BrowseSecondComponent;

import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function BrowseSecondComponent() {
  const nowPlayingmoviesList = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );
  console.log(nowPlayingmoviesList, "nowplayng");
  const popularMoviesList = useSelector((state) => state.movies?.popularMovies);
  const topRatedMoviesList = useSelector(
    (state) => state.movies?.topRatedMovies
  );

  return (
    <div className="relative">
      <div
        className={`${
          nowPlayingmoviesList?.length > 0 && "-mt-40"
        } flex flex-col gap-6`}
      >
        {nowPlayingmoviesList?.length > 0 && (
          <MovieList title={"Now Playing"} movies={nowPlayingmoviesList} />
        )}
        {topRatedMoviesList?.length > 0 && (
          <MovieList title={"Top Rated"} movies={topRatedMoviesList} />
        )}
        {popularMoviesList?.length > 0 && (
          <MovieList title={"Popular"} movies={popularMoviesList} />
        )}
      </div>
    </div>
  );
}

export default BrowseSecondComponent;

import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

function BrowseFirstComponent() {
  const moviesNowPlaying = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );

  if (!moviesNowPlaying || moviesNowPlaying.length === 0) {
    return <div>No movies available.</div>;
  }

  const { original_title, overview, poster_path, id } = moviesNowPlaying[0];

  return (
    <div>
      <VideoTitle
        title={original_title}
        overview={overview}
        posterPath={poster_path}
        movieId={id}
      />
    </div>
  );
}

export default BrowseFirstComponent;

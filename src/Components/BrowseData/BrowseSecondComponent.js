import React from "react";
import { useSelector } from "react-redux";

function BrowseSecondComponent() {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  return <div></div>;
}

export default BrowseSecondComponent;

import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import BrowseFirstComponent from "../Components/BrowseData/BrowseFirstComponent";
import BrowseSecondComponent from "../Components/BrowseData/BrowseSecondComponent";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <BrowseFirstComponent />
      <BrowseSecondComponent />
    </>
  );
};

export default Browse;

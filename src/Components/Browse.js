import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import BrowseFirstComponent from "../Components/BrowseData/BrowseFirstComponent";
import BrowseSecondComponent from "../Components/BrowseData/BrowseSecondComponent";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <>
      <Header />
      <BrowseFirstComponent />
      <div className="bg-black">
        <BrowseSecondComponent />
      </div>
    </>
  );
};

export default Browse;

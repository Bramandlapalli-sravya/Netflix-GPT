import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import BrowseFirstComponent from "../Components/BrowseData/BrowseFirstComponent";
import BrowseSecondComponent from "../Components/BrowseData/BrowseSecondComponent";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import GPTSearch from "./GPTSearchComponent/GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((state) => state.gptSearch.gptSearch);
  console.log(showGPTSearch, "showGPTSearch");
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <div className="flex flex-col overflow-auto">
          <BrowseFirstComponent />
          <div className="bg-black">
            <BrowseSecondComponent />
          </div>
        </div>
      )}
    </>
  );
};

export default Browse;

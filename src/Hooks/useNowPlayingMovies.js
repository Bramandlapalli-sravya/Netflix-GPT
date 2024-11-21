import { useEffect } from "react";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { useDispatch } from "react-redux";
import { options_api } from "../Utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options_api
      ).catch((error) => console.log(error, "error"));
      const data = await response.json();
      console.log();
      dispatch(addNowPlayingMovies(data.results));
    };

    getNowPlayingMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;

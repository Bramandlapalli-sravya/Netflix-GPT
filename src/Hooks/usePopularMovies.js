import { useEffect } from "react";
import { options_api } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options_api
      ).catch((error) => console.log(error, "error"));
      const data = await response.json();
      dispatch(addPopularMovies(data.results));
    };

    getPopularMovies();
  }, [dispatch]);
};

export default usePopularMovies;

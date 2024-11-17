import { useEffect } from "react";
import { options_api } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options_api
      );

      const data = await response.json();
      dispatch(addTopRatedMovies(data.results));
    };

    getTopRatedMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;

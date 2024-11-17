import { useEffect } from "react";
import { options_api } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addMovieVideoTrailer } from "../redux/moviesSlice";

export const useMoviesVideo = (movieID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMoviesVideo = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/videos`,
        options_api
      );
      const data = await response.json();

      const filterTrailer = data?.results?.filter(
        (video) => video.type === "Trailer"
      );
      const Trailer =
        filterTrailer?.length === 0 ? data?.results[0] : filterTrailer[0];
      dispatch(addMovieVideoTrailer(Trailer));
    };

    getMoviesVideo();
  }, [movieID, dispatch]);
};

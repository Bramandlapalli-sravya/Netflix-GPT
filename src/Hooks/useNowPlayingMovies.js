import { useEffect } from "react";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { useDispatch } from "react-redux";
import { options_api } from '../Utils/constants'

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const response =  await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options_api)
      const data =  await response.json();
      dispatch(addNowPlayingMovies(data.results));
      }
  
    useEffect(()=> {
      getNowPlayingMovies();
    }, [])

}

export default useNowPlayingMovies;
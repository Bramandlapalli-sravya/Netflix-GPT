import React from "react";
import { useMoviesVideo } from "../../Hooks/useMoviesVideo";
import { useSelector } from "react-redux";

function VideoBackground({ movieId }) {
  const Trailer = useSelector((state) => state.movies?.movieVideoTrailer);
  useMoviesVideo(movieId);

  return (
    <div className="h-full">
      <iframe
        width="100%"
        height="100%"
        src={
          "https://www.youtube.com/embed/" +
          Trailer?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default VideoBackground;

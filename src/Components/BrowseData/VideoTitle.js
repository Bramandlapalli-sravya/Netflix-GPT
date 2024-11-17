import React from "react";
import VideoBackground from "./VideoBackground";

export default function VideoTitle({ title, overview, randomMovie, movieId }) {
  return (
    <div className="relative bg-cover bg-center h-[600px] text-white ">
      <div className="absolute inset-0">
        <VideoBackground movieId={movieId} randomMovie={randomMovie} />
        <div className="absolute bottom-0 w-4/5 sm:w-1/4  p-5 h-[600px] flex flex-col justify-center bg-gradient-to-r from-black">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <h2 className="text-lg mb-4">{overview}</h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Trailer
            </button>
            <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

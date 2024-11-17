import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div className={"flex flex-col px-6 gap-2 text-white"}>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex flex-shrink-0 h-auto gap-2">
          {movies?.map((movie) => {
            return (
              <MovieCard
                key={movie?.id}
                posterImg={movie.poster_path}
                title={movie?.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieList;

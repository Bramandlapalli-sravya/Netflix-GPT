import React from "react";
import { IMG_CDN } from "../../Utils/constants";

function MovieCard({ posterImg, title }) {
  return (
    <div>
      <img src={IMG_CDN + posterImg} alt={title} className="h-52 rounded" />
    </div>
  );
}

export default MovieCard;

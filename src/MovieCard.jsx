import React from "react";

const MovieCard = ({ movie1: movie, className }) => {
  return (
    <div
      className={`p-4 rounded-md transition-colors border border-purple1 border-solid border-t-1 text-white drop-shadow-[0_0_40px_#802BB1] ${className}`}
    >
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;

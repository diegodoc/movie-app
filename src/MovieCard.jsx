import React from "react";

const MovieCard = ({ movie1: movie, className }) => {
  return (
    <div
      className={`p-4 bg-opacity-20 bg-blue-600 rounded-md transition-colors border-blue-700 border-solid border-4 text-white ${className}`}
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
        <h3 className="font-extrabold">{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;

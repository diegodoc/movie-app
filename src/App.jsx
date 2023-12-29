import "./index.css";
import SearchIcon from "./search.svg";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=ccafaea2";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("barbie");
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-700 w-full min-h-screen flex flex-col items-center justify-center font-display">
      <h1 className="text-white text-8xl">Movie App</h1>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-white p-2 rounded-md"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
          className="cursor-pointer ml-2"
        />
      </div>
      {movies?.length > 0 ? (
        <div className="mt-4 flex flex-wrap justify-center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie1={movie} className="m-4" />
          ))}
        </div>
      ) : (
        <div className="mt-4">
          <h2 className="text-white">No movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;

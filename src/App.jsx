import "./index.css";
import SearchIcon from "./search3.png";
import MoonIcon from "./moon-icon.png"
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
    searchMovies("");
  }, []);

  return (
    <div className=" min-h-screen bg-[url('./src/moon.jpeg')] w-full min-h-screen flex flex-col items-center justify-center font-regular" >
      <div className="flex items-center">
        <h1 className="text-blue-600 text-8xl drop-shadow-[0_0_2px_#2563EB] font-display relative z-20">
          NETSPACE
        </h1>
        <img
          src={MoonIcon} // Replace with the actual path to your moon icon
          alt="moon"
          className="cursor-pointer w-20 h-20 ml-5 animate-spin-slow" // Adjust width, height, and position as needed
        />
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-white p-2 rounded-md focus:outline-none focus:drop-shadow-[0_0_10px_#2563EB]"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
          className="cursor-pointer ml-2  jw-10 h-10"
        />
      </div>

      {movies?.length > 0 ? (
        <div className="mt-4 flex flex-wrap justify-center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie1={movie} className="m-4" />
          ))}
        </div>
      ) : (
        <div className="mt-4"></div>
      )}
    </div>
  );
};
export default App;

import MoviesItem from "../components/MoviesItem";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";

const MoviesList = () => {
  const { moviesList } = useContext(MovieContext);
  return (
    <>
      {/* Trending Shows */}
      <div>
        <p className="font-bold">Trending</p>
        {moviesList.map(
          (movie, index) =>
            movie.isTrending && <MoviesItem key={index} movie={movie} />
        )}
      </div>
      <div>
        <p className="font-bold">Recommended for you</p>
        {moviesList.map(
          (movie, index) =>
            !movie.isTrending && <MoviesItem key={index} movie={movie} />
        )}
      </div>
    </>
  );
};

export default MoviesList;

import { useContext } from "react";
import SearchInput from "../components/SearchInput";
import MovieContext from "../context/MovieContext";
import MoviesItem from "../components/MoviesItem";

const Movies = () => {
  const { moviesList } = useContext(MovieContext);
  return (
    <main>
      <section>
        <SearchInput />
        <div>
          <p className="font-bold">Movies</p>
          {moviesList.map(
            (movie, index) =>
              movie.category === "Movie" && (
                <MoviesItem key={index} movie={movie} />
              )
          )}
        </div>
      </section>
    </main>
  );
};

export default Movies;

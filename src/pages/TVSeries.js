import { useContext } from "react";
import SearchInput from "../components/SearchInput";
import MovieContext from "../context/MovieContext";
import MoviesItem from "../components/MoviesItem";

const TVSeries = () => {
  const { moviesList } = useContext(MovieContext);
  return (
    <main>
      <section>
        <SearchInput />
        <div>
          <p className="font-bold">TVSeries</p>
          {moviesList.map(
            (movie, index) =>
              movie.category === "TV Series" && (
                <MoviesItem key={index} movie={movie} />
              )
          )}
        </div>
      </section>
    </main>
  );
};

export default TVSeries;

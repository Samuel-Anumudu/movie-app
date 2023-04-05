import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import ShowsContext from "../context/ShowContext";
import ShowsItem from "../components/ShowsItem";
import SearchList from "../components/SearchList";

const Movies = () => {
  const location = useLocation();
  const { movies, handleSearchFilter, query, setSearch, allShows } =
    useContext(ShowsContext);

  useEffect(() => {
    if (location.pathname !== "/") {
      setSearch((prevState) => ({
        ...prevState,
        query: "",
      }));
    }
  }, [location.pathname, setSearch]);

  return (
    <main>
      <section>
        <SearchInput
          placeholder="Search for movies"
          onChange={(e) => handleSearchFilter(e, movies)}
        />
        {query ? (
          <SearchList />
        ) : (
          <div>
            <p className="font-bold">Movies</p>
            {allShows.map(
              (show) =>
                show.category === "Movie" && (
                  <ShowsItem key={show.id} id={show.id} show={show} />
                )
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default Movies;

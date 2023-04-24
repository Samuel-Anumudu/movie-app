import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import ShowsContext from "../context/ShowContext";
import ShowsItem from "../components/ShowsItem";
import useAuthStatus from "../hooks/useAuthStatus";
import Spinner from "../components/Spinner";
import MovieSearch from "../components/MovieSearch";

const Movies = () => {
  const { checkingStatus } = useAuthStatus();

  const location = useLocation();
  const { searchParam, setSearchParam, handleSearch, filteredMovies } =
    useContext(ShowsContext);

  useEffect(() => {
    if (location.pathname !== "/") {
      setSearchParam("");
    }
  }, [location.pathname, setSearchParam]);

  if (checkingStatus) {
    return <Spinner />;
  }
  return (
    <main>
      <section>
        <SearchInput
          placeholder="Search for movies"
          onChange={(e) => handleSearch(e)}
        />
        {searchParam ? (
          <MovieSearch />
        ) : (
          <div className="container lg:max-w-full mx-auto px-4 md:px-6 pb-10 lg:pl-40">
            <p className="font-light text-xl md:text-3xl pb-5 md:pb-6 lg:pb-10">
              Movies
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
              {filteredMovies.map((show) => (
                <ShowsItem key={show.id} id={show.id} show={show} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Movies;

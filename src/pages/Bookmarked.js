import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ShowsContext from "../context/ShowsContext";
import ShowsItem from "../components/ShowsItem";
import SearchInput from "../components/SearchInput";
import SearchList from "../components/SearchList";

const Bookmarked = () => {
  const { allShows, handleSearchFilter, bookmarkedShows, query, setSearch } =
    useContext(ShowsContext);

  const location = useLocation();

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
          placeholder="Search for bookmarked shows"
          onChange={(e) => handleSearchFilter(e, bookmarkedShows)}
        />

        {query ? (
          <SearchList />
        ) : (
          <>
            <div>
              <p className="font-bold">Bookmarked Movies</p>
              {allShows.map(
                (show) =>
                  show.isBookmarked &&
                  show.category === "Movie" && (
                    <ShowsItem key={show.id} id={show.id} show={show} />
                  )
              )}
            </div>
            <div>
              <p className="font-bold">Bookmarked TV Series</p>
              {allShows.map(
                (show) =>
                  show.isBookmarked &&
                  show.category === "TV Series" && (
                    <ShowsItem key={show.id} id={show.id} show={show} />
                  )
              )}
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Bookmarked;

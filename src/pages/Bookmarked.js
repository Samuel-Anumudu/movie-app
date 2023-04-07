import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ShowsItem from "../components/ShowsItem";
import SearchInput from "../components/SearchInput";
import SearchList from "../components/SearchList";
import ShowsContext from "../context/ShowContext";

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
          <div className="container mx-auto px-4 pb-10">
            <div className="pb-5">
              <p className="font-light text-xl pb-5">Bookmarked Movies</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allShows.map(
                  (show) =>
                    show.isBookmarked &&
                    show.category === "Movie" && (
                      <ShowsItem key={show.id} id={show.id} show={show} />
                    )
                )}
              </div>
            </div>
            <div>
              <p className="font-light text-xl pb-5">Bookmarked TV Series</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allShows.map(
                  (show) =>
                    show.isBookmarked &&
                    show.category === "TV Series" && (
                      <ShowsItem key={show.id} id={show.id} show={show} />
                    )
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Bookmarked;

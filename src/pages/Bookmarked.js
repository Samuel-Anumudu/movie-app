import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ShowsItem from "../components/ShowsItem";
import SearchInput from "../components/SearchInput";
import BookmarkSearch from "../components/BookmarkSearch";
import ShowsContext from "../context/ShowContext";
import useAuthStatus from "../hooks/useAuthStatus";
import Spinner from "../components/Spinner";

const Bookmarked = () => {
  const { checkingStatus } = useAuthStatus();

  const { handleSearch, searchParam, setSearchParam, filteredBookmarkedShows } =
    useContext(ShowsContext);

  const location = useLocation();

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
          placeholder="Search for bookmarked shows"
          onChange={(e) => handleSearch(e)}
        />

        {searchParam ? (
          <BookmarkSearch />
        ) : (
          <div className="container lg:max-w-full mx-auto px-4 md:px-6 pb-10 lg:pl-40">
            <div className="pb-5 md:pb-10">
              <p className="font-light text-xl md:text-3xl pb-5 md:pb-6 lg:pb-10">
                Bookmarked Movies
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
                {filteredBookmarkedShows.map(
                  (show) =>
                    show.category === "Movie" && (
                      <ShowsItem key={show.id} id={show.id} show={show} />
                    )
                )}
              </div>
            </div>
            <div>
              <p className="font-light text-xl md:text-3xl pb-5 md:pb-6 lg:pb-10">
                Bookmarked TV Series
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
                {filteredBookmarkedShows.map(
                  (show) =>
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

import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import ShowsContext from "../context/ShowContext";
import ShowsItem from "../components/ShowsItem";
import SearchList from "../components/SearchList";

const TVSeries = () => {
  const location = useLocation();
  const { tvSeries, handleSearchFilter, query, setSearch, allShows } =
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
          placeholder="Search for TV series"
          onChange={(e) => handleSearchFilter(e, tvSeries)}
        />
        {query ? (
          <SearchList />
        ) : (
          <div className="container mx-auto px-4 pb-10">
            <p className="font-light text-xl pb-5">TV Series</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allShows.map(
                (show) =>
                  show.category === "TV Series" && (
                    <ShowsItem key={show.id} id={show.id} show={show} />
                  )
              )}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default TVSeries;

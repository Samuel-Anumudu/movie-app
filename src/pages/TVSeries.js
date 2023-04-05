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
          <div>
            <p className="font-bold">TV Series</p>
            {allShows.map(
              (show) =>
                show.category === "TV Series" && (
                  <ShowsItem key={show.id} id={show.id} show={show} />
                )
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default TVSeries;

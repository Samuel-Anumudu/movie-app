import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import ShowsContext from "../context/ShowContext";
import ShowsItem from "../components/ShowsItem";
import TVSeriesSearch from "../components/TVSeriesSearch";
import useAuthStatus from "../hooks/useAuthStatus";
import Spinner from "../components/Spinner";

const TVSeries = () => {
  const { checkingStatus } = useAuthStatus();

  const location = useLocation();
  const { handleSearch, searchParam, setSearchParam, filteredTVSeries } =
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
          placeholder="Search for TV series"
          onChange={(e) => handleSearch(e)}
        />
        {searchParam ? (
          <TVSeriesSearch />
        ) : (
          <div className="container lg:max-w-full mx-auto px-4 md:px-6 pb-10 lg:pl-40">
            <p className="font-light text-xl md:text-3xl pb-5 md:pb-6 lg:pb-10">
              TV Series
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
              {filteredTVSeries.map((show) => (
                <ShowsItem key={show.id} id={show.id} show={show} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default TVSeries;

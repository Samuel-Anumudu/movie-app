import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus";
import Login from "./Login";
import Spinner from "../components/Spinner";
import SearchInput from "../components/SearchInput";
import ShowsList from "../components/ShowsList";
import ShowsContext from "../context/ShowContext";
import HomeSearch from "../components/HomeSearch";

const Home = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  const {
    setSearchParam,
    searchParam,
    handleSearch,
  } = useContext(ShowsContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setSearchParam("");
    }
  }, [location.pathname, setSearchParam]);

  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? (
    <main>
      <section>
        <SearchInput
          placeholder="Search for movies or TV series"
          value={searchParam}
          onChange={(e) => handleSearch(e)}
        />
        {searchParam ? <HomeSearch /> : <ShowsList />}
      </section>
    </main>
  ) : (
    <Login />
  );
};

export default Home;

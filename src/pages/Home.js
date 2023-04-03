import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus";
import Login from "./Login";
import Spinner from "../components/Spinner";
import SearchInput from "../components/SearchInput";
import ShowsList from "../components/ShowsList";
import SearchList from "../components/SearchList";
import ShowsContext from "../context/ShowContext";

const Home = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  const { query, allShows, handleSearchFilter, setSearch } =
    useContext(ShowsContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setSearch((prevState) => ({
        ...prevState,
        query: "",
      }));
    }
  }, [location.pathname, setSearch]);

  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? (
    <main>
      <section>
        <SearchInput
          placeholder="Search for movies or TV series"
          onChange={(e) => handleSearchFilter(e, allShows)}
        />
        {query ? <SearchList /> : <ShowsList />}
      </section>
    </main>
  ) : (
    <Login />
  );
};

export default Home;

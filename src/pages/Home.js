import { useContext } from "react";
import useAuthStatus from "../hooks/useAuthStatus";
import Login from "./Login";
import Spinner from "../components/Spinner";
import SearchInput from "../components/SearchInput";
import MoviesList from "../components/MoviesList";
import MovieContext from "../context/MovieContext";

const Home = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  const { searchParam } = useContext(MovieContext);

  searchParam && console.log("hello");

  if (checkingStatus) {
    return <Spinner />;
  }
  return loggedIn ? (
    <main>
      <section>
        <SearchInput />
        <MoviesList />
      </section>
    </main>
  ) : (
    <Login />
  );
};

export default Home;

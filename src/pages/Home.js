import useAuthStatus from "../hooks/useAuthStatus";
import Login from "./Login";
import Spinner from "../components/Spinner";
const Home = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  }
  return loggedIn ? <div>Home Page</div> : <Login />;
};

export default Home;

import { useNavigate, useLocation, Link } from "react-router-dom";
import { auth } from "../firebase.config";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const onLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <nav>
      <div>
        <h1>Logo</h1>
      </div>
      <ul>
        <li
          onClick={() => navigate("/")}
          style={{ color: pathMatchRoute("/") ? "red" : "black" }}
        >
          Home
        </li>
        <li
          onClick={() => navigate("/movies")}
          style={{ color: pathMatchRoute("/movies") ? "red" : "black" }}
        >
          Movies
        </li>
        <li
          onClick={() => navigate("/tvseries")}
          style={{ color: pathMatchRoute("/tvseries") ? "red" : "black" }}
        >
          TVSeries
        </li>
        <li
          onClick={() => navigate("/bookmarked")}
          style={{ color: pathMatchRoute("/bookmarked") ? "red" : "black" }}
        >
          Bookmarked
        </li>
      </ul>
      <div>
        <a onClick={onLogout}>Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;

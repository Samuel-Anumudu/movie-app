import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
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
        <h1>Profile</h1>
      </div>
    </nav>
  );
};

export default Navbar;

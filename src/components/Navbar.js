import { useNavigate, useLocation } from "react-router-dom";
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
    window.location.reload();
  };

  return (
    <header>
      <nav className="flex items-center justify-between">
        <div onClick={() => navigate("/")}>
          <h1>Logo</h1>
        </div>
        <ul className="flex items-center gap-2">
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
          <p href="#" onClick={onLogout}>
            Profile
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

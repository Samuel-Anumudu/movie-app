import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav>
      <div>
        <h1>Logo</h1>
      </div>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/movies")}>Movies</li>
        <li onClick={() => navigate("/tvseries")}>TVSeries</li>
        <li onClick={() => navigate("/bookmarked")}>Bookmarked</li>
      </ul>
      <div>
        <h1>Profile</h1>
      </div>
    </nav>
  );
};

export default Navbar;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ShowsProvider } from "./context/ShowContext";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Bookmarked from "./pages/Bookmarked";
import NotFound from "./pages/NotFound";
import useAuthStatus from "./hooks/useAuthStatus";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { loggedIn } = useAuthStatus();
  return (
    <ShowsProvider>
      <BrowserRouter>
        {loggedIn && <Navbar />}
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/Movies" element={<PrivateRoute />}>
            <Route path="/Movies" element={<Movies />} />
          </Route>
          <Route path="/TVSeries" element={<PrivateRoute />}>
            <Route path="/TVSeries" element={<TVSeries />} />
          </Route>
          <Route path="/Bookmarked" element={<PrivateRoute />}>
            <Route path="/Bookmarked" element={<Bookmarked />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
      />
    </ShowsProvider>
  );
}
export default App;

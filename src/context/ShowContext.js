import { createContext, useEffect, useState } from "react";
import { data } from "../data";

const ShowsContext = createContext();

const showsFromLocalStorage = JSON.parse(
  localStorage.getItem("allShows") || JSON.stringify(data)
);

export const ShowsProvider = ({ children }) => {
  // STATES
  const [isLoading, setIsLoading] = useState(true);
  const [searchParam, setSearchParam] = useState("");
  const [homeShows, setHomeShows] = useState(showsFromLocalStorage);
  const [shows, setShows] = useState({
    allShows: showsFromLocalStorage,
    bookmarkedShows: showsFromLocalStorage.filter((show) => show.isBookmarked),
    tvSeries: showsFromLocalStorage.filter(
      (show) => show.category === "TV Series"
    ),
    movies: showsFromLocalStorage.filter((show) => show.category === "Movie"),
  });

  // FILTERED STATES
  const [filteredHomeShows, setFilteredHomeShows] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredTVSeries, setFilteredTVSeries] = useState([]);
  const [filteredBookmarkedShows, setFilteredBookmarkedShows] = useState([]);

  const { allShows, bookmarkedShows, tvSeries, movies } = shows;

  useEffect(() => {
    localStorage.setItem("allShows", JSON.stringify(allShows));
  }, [allShows]);

  useEffect(() => {
    const handleFilteredShows = () => {
      const shows = homeShows.filter((show) =>
        searchParam.toLowerCase() === ""
          ? show
          : show.title.toLowerCase().includes(searchParam.toLowerCase())
      );

      setFilteredHomeShows(shows);
    };
    handleFilteredShows();
  }, [homeShows, searchParam]);

  useEffect(() => {
    const handleFilteredMovies = () => {
      const newFilteredMovies = movies.filter((movie) =>
        searchParam.toLowerCase() === ""
          ? movie
          : movie.title.toLowerCase().includes(searchParam.toLowerCase())
      );

      setFilteredMovies(newFilteredMovies);
    };

    handleFilteredMovies();
  }, [movies, searchParam]);

  useEffect(() => {
    const handleFilteredTVSeries = () => {
      const newFilteredTVSeries = tvSeries.filter((tvseries) =>
        searchParam.toLowerCase() === ""
          ? tvseries
          : tvseries.title.toLowerCase().includes(searchParam.toLowerCase())
      );

      setFilteredTVSeries(newFilteredTVSeries);
    };

    handleFilteredTVSeries();
  }, [tvSeries, searchParam]);

  useEffect(() => {
    const handleFilteredBookmarkedShows = () => {
      const newFilteredBookmarkedShows = bookmarkedShows.filter(
        (bookmarkedShow) =>
          searchParam.toLowerCase() === ""
            ? bookmarkedShow
            : bookmarkedShow.title
                .toLowerCase()
                .includes(searchParam.toLowerCase())
      );

      setFilteredBookmarkedShows(newFilteredBookmarkedShows);
    };

    handleFilteredBookmarkedShows();
  }, [bookmarkedShows, searchParam]);

  // FUNCTIONS
  const handleSearch = (e) => {
    setSearchParam(e.target.value);
  };

  const handleAddToBookmark = (id) => {
    const newShowsList = allShows.map((show) => {
      if (show.id === id) {
        return { ...show, isBookmarked: !show.isBookmarked };
      } else {
        return show;
      }
    });
    setShows((prevState) => ({
      ...prevState,
      allShows: newShowsList,
      movies: newShowsList.filter((show) => show.category === "Movie"),
      tvSeries: newShowsList.filter((show) => show.category === "TV Series"),
      bookmarkedShows: newShowsList.filter((show) => show.isBookmarked),
    }));
    setHomeShows(newShowsList);
  };

  return (
    <ShowsContext.Provider
      value={{
        isLoading,
        searchParam,
        showsFromLocalStorage,
        homeShows,
        allShows,
        movies,
        tvSeries,
        bookmarkedShows,
        filteredHomeShows,
        filteredMovies,
        filteredTVSeries,
        filteredBookmarkedShows,
        setSearchParam,
        setShows,
        handleSearch,
        handleAddToBookmark,
        setIsLoading,
      }}
    >
      {children}
    </ShowsContext.Provider>
  );
};

export default ShowsContext;

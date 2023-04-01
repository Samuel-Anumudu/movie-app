import { createContext, useState } from "react";
import { data } from "../data";

const ShowsContext = createContext();

export const ShowsProvider = ({ children }) => {
  const [shows, setShows] = useState({
    allShows: data,
    bookmarkedShows: data.filter((show) => show.isBookmarked),
    tvSeries: data.filter((show) => show.category === "TV Series"),
    movies: data.filter((show) => show.category === "Movie"),
  });
  const { allShows, bookmarkedShows, tvSeries, movies } = shows;

  const [search, setSearch] = useState({
    query: "",
    listOfShows: allShows,
  });

  const { query, listOfShows } = search;

  const formatString = (string) =>
    string.replace(/ /g, "").trim().toLowerCase();

  const handleSearchFilter = (e, listToFilter) => {
    const filteredSearch = listToFilter.filter((show) => {
      if (formatString(e.target.value) === "") return data;
      return formatString(show.title).includes(formatString(e.target.value));
    });
    setSearch({
      query: e.target.value,
      listOfShows: filteredSearch,
    });
  };

  const handleAddToBookmark = (id) => {
    const newShowsList = allShows.map((show) => {
      if (show.id === id) {
        return { ...show, isBookmarked: !show.isBookmarked };
      } else {
        return show;
      }
    });

    setShows((prevState) => ({ ...prevState, allShows: newShowsList }));
  };

  return (
    <ShowsContext.Provider
      value={{
        allShows,
        bookmarkedShows,
        tvSeries,
        movies,
        query,
        listOfShows,
        setSearch,
        setShows,
        handleSearchFilter,
        handleAddToBookmark,
      }}
    >
      {children}
    </ShowsContext.Provider>
  );
};

export default ShowsContext;

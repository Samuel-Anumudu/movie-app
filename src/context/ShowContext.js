import { createContext, useEffect, useState } from "react";
import { data } from "../data";

const ShowsContext = createContext();

const showsFromLocalStorage = JSON.parse(
  localStorage.getItem("allShows") || JSON.stringify(data)
);

export const ShowsProvider = ({ children }) => {
  const [shows, setShows] = useState({
    allShows: showsFromLocalStorage,
    bookmarkedShows: showsFromLocalStorage.filter((show) => show.isBookmarked),
    tvSeries: showsFromLocalStorage.filter(
      (show) => show.category === "TV Series"
    ),
    movies: showsFromLocalStorage.filter((show) => show.category === "Movie"),
  });
  const { allShows, bookmarkedShows, tvSeries, movies } = shows;

  const [search, setSearch] = useState({
    query: "",
    listOfShows: showsFromLocalStorage,
  });

  const { query, listOfShows } = search;

  useEffect(() => {
    localStorage.setItem("allShows", JSON.stringify(allShows));
  }, [allShows]);

  const formatString = (string) =>
    string.replace(/ /g, "").trim().toLowerCase();

  const handleSearchFilter = (event, listToFilter) => {
    const filteredSearch = listToFilter.filter((show) => {
      if (formatString(event.target.value) === "") return showsFromLocalStorage;
      return formatString(show.title).includes(
        formatString(event.target.value)
      );
    });
    setSearch({
      query: event.target.value,
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

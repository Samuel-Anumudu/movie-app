import { createContext, useEffect, useState } from "react";
import { data } from "../data";

const ShowsContext = createContext();

const showsFromLocalStorage = JSON.parse(
  localStorage.getItem("allShows") || JSON.stringify(data)
);

export const ShowsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
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
    setSearch((prevState) => ({
      ...prevState,
      query: event.target.value,
      listOfShows: filteredSearch,
    }));
  };

  const handleAddToBookmark = (id) => {
    console.log(id);
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
        isLoading,
        showsFromLocalStorage,
        setSearch,
        setShows,
        handleSearchFilter,
        handleAddToBookmark,
        setIsLoading,
      }}
    >
      {children}
    </ShowsContext.Provider>
  );
};

export default ShowsContext;

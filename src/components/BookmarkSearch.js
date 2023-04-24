import { useContext } from "react";
import ShowsContext from "../context/ShowContext";
import ShowsItem from "./ShowsItem";
const BookmarkSearch = () => {
  const { searchParam, filteredBookmarkedShows, bookmarkedShows } =
    useContext(ShowsContext);
  return (
    <div className="container lg:max-w-full mx-auto px-4 pb-10 lg:pl-40">
      <p className="text-white text-xl md:text-3xl font-light pb-5 lg:pb-10">
        {`Found ${searchParam && filteredBookmarkedShows.length} result${
          bookmarkedShows.length > 1 ? "s" : ""
        } for '${searchParam}'`}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
        {filteredBookmarkedShows.map((show) => (
          <ShowsItem key={show.id} id={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default BookmarkSearch;

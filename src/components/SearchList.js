import { useContext } from "react";
import ShowsItem from "../components/ShowsItem";
import ShowsContext from "../context/ShowContext";

const SearchList = () => {
  const { listOfShows, query } = useContext(ShowsContext);
  return (
    <div className="container lg:max-w-full mx-auto px-4 pb-10 lg:pl-40">
      <p className="text-white text-xl md:text-3xl font-light pb-5 lg:pb-10">
        {`Found ${query && listOfShows.length} result${
          listOfShows.length > 1 ? "s" : ""
        } for '${query}'`}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
        {listOfShows.map((show) => (
          <ShowsItem key={show.id} id={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default SearchList;

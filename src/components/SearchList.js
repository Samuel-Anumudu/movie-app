import { useContext } from "react";
import ShowsItem from "../components/ShowsItem";
import ShowsContext from "../context/ShowContext";

const SearchList = () => {
  const { listOfShows, query } = useContext(ShowsContext);
  return (
    <div className="container mx-auto px-4 pb-10">
      <p className="text-white text-xl font-light pb-5">
        {`Found ${query && listOfShows.length} result${
          listOfShows.length > 1 ? "s" : ""
        } for '${query}'`}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {listOfShows.map((show) => (
          <ShowsItem key={show.id} id={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default SearchList;

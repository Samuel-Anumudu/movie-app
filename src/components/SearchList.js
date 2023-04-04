import { useContext } from "react";
import ShowsItem from "../components/ShowsItem";
import ShowsContext from "../context/ShowContext";

const SearchList = () => {
  const { listOfShows, query } = useContext(ShowsContext);
  return (
    <div className="container mx-auto px-5">
      <p className="text-white text-xl font-light">
        {`Found ${query && listOfShows.length} result${
          listOfShows.length > 1 ? "s" : ""
        } for '${query}'`}
      </p>
      {listOfShows.map((show) => (
        <ShowsItem key={show.id} id={show.id} show={show} />
      ))}
    </div>
  );
};

export default SearchList;

import { useContext } from "react";
import ShowsItem from "../components/ShowsItem";
import ShowsContext from "../context/ShowsContext";

const SearchList = () => {
  const { listOfShows, query } = useContext(ShowsContext);
  return (
    <div>
      <p className="font-bold">
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

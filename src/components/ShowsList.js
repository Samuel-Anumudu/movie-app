import { useContext } from "react";
import ShowsContext from "../context/ShowContext";
import ShowsItem from "./ShowsItem";

const ShowsList = () => {
  const { allShows } = useContext(ShowsContext);
  return (
    <>
      {/* Trending Shows */}
      <div>
        <p className="font-bold">Trending</p>
        {allShows.map(
          (show) =>
            show.isTrending && (
              <ShowsItem key={show.id} id={show.id} show={show} />
            )
        )}
      </div>
      <div>
        <p className="font-bold">Recommended for you</p>
        {allShows.map(
          (show, index) =>
            !show.isTrending && (
              <ShowsItem key={show.id} id={show.id} show={show} />
            )
        )}
      </div>
    </>
  );
};

export default ShowsList;

import { useContext } from "react";
import ShowsContext from "../context/ShowContext";
import ShowsItem from "./ShowsItem";
import Slides from "./Slides";

const ShowsList = () => {
  const { allShows } = useContext(ShowsContext);
  return (
    <div className="container mx-auto px-5 pb-10">
      {/* Trending Shows */}
      <Slides />
      <div>
        <p className="font-light text-xl">Recommended for you</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allShows.map(
            (show) =>
              !show.isTrending && (
                <ShowsItem key={show.id} id={show.id} show={show} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowsList;

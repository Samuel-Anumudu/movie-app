import { useContext } from "react";
import ShowsContext from "../context/ShowContext";
import ShowsItem from "./ShowsItem";
import Slides from "./Slides";

const ShowsList = () => {
  const { allShows } = useContext(ShowsContext);
  return (
    <div className="pb-10">
      {/* Trending Shows */}
      <Slides />
      <div className="container lg:max-w-full mx-auto px-4 md:px-6 lg:pl-40">
        <p className="font-light text-xl py-5 md:pt-10 md:pb-6 md:text-3xl lg:pb-8">
          Recommended for you
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
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

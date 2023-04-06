import { useContext } from "react";
import ShowsContext from "../context/ShowContext";
import SlidesItem from "./SlidesItem";
const Slides = () => {
  const { allShows } = useContext(ShowsContext);
  return (
    <div>
      <p className="font-light text-xl">Trending</p>
      <div className="carousel carousel-center space-x-4 bg-transparent">
        <div className="carousel-item">
          {allShows.map(
            (show) =>
              show.isTrending && (
                <SlidesItem key={show.id} id={show.id} show={show} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Slides;

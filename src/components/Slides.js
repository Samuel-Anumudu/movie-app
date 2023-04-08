import { useContext } from "react";
import ShowsContext from "../context/ShowContext";
import SlidesItem from "./SlidesItem";
const Slides = () => {
  const { allShows } = useContext(ShowsContext);
  return (
    <div className="container lg:max-w-full mx-auto pl-4 md:pl-6 lg:pl-40">
      <p className="font-light text-xl md:text-3xl pb-5 md:pb-6">Trending</p>
      <div className="carousel carousel-center space-x-4 bg-transparent">
        <div className="carousel-item gap-4 md:gap-10">
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

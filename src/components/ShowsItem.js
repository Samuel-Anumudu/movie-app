import { useContext, useState } from "react";
import ShowsContext from "../context/ShowContext";
import movieCategoryIcon from "../assets/icon-category-movie.svg";
import tvSeriesCategoryIcon from "../assets/icon-category-tv.svg";
import bookmarkIconFull from "../assets/icon-bookmark-full.svg";
import bookmarkIconEmpty from "../assets/icon-bookmark-empty.svg";
import playIcon from "../assets/play.png";

const ShowsItem = ({ show, id }) => {
  const { handleAddToBookmark } = useContext(ShowsContext);
  const { year, category, rating, title } = show;

  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const onMouseEnter = () => {
    setIsMouseEnter(true);
  };

  const onMouseLeave = () => {
    setIsMouseEnter(false);
  };

  return (
    <div>
      <div
        className="relative lg:cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img
          src={show.thumbnail.regular.small}
          alt="show"
          className="md:hidden rounded-lg"
        />
        <img
          src={show.thumbnail.regular.medium}
          alt="show"
          className="hidden md:block lg:hidden rounded-lg "
        />
        <img
          src={show.thumbnail.regular.large}
          alt="show"
          className="hidden lg:block rounded-lg cursor-pointer"
        />
        <div
          className="absolute top-2 md:top-4 right-[5%] md:right-[6.5%] w-8 h-8 rounded-full bg-bgColor/[0.5] lg:hover:bg-white/[0.3] lg:cursor-pointer"
          onClick={() => handleAddToBookmark(id)}
          title="add or remove show from bookmark"
        >
          <img
            src={show.isBookmarked ? bookmarkIconFull : bookmarkIconEmpty}
            alt="bookmark icon"
            className="-translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4 z-10"
          />
        </div>
        {isMouseEnter && (
          <div className="hidden lg:block w-full h-full absolute inset-0 bg-[#000]/[0.5]">
            <img
              src={playIcon}
              alt="play"
              className="w-[117px] absolute  -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4"
            />
          </div>
        )}
      </div>
      <div className="flex gap-2 mt-2">
        <span className="text-xs md:text-sm font-light opacity-75">{year}</span>
        <div className="flex items-center gap-1">
          <span className="w-[2px] h-[2px] md:w-[3px] md:h-[3px] bg-white opacity-50 rounded-full inline-block mr-1"></span>
          <img
            src={
              category === "Movie" ? movieCategoryIcon : tvSeriesCategoryIcon
            }
            alt="category icon"
          />
          <span className="text-xs md:text-sm font-light opacity-75">
            {category}
          </span>
        </div>
        <div className="flex items-center">
          <span className="w-[2px] h-[2px] md:w-[3px] md:h-[3px] bg-white opacity-50 rounded-full inline-block mr-1"></span>
          <span className="text-xs md:text-sm font-light opacity-75">
            {rating}
          </span>
        </div>
      </div>
      <p className="font-medium text-sm md:text-lg">{title}</p>
    </div>
  );
};

export default ShowsItem;

import { useContext, useEffect } from "react";
import ShowsContext from "../context/ShowContext";
import movieCategoryIcon from "../assets/icon-category-movie.svg";
import tvSeriesCategoryIcon from "../assets/icon-category-tv.svg";
import bookmarkIconFull from "../assets/icon-bookmark-full.svg";
import bookmarkIconEmpty from "../assets/icon-bookmark-empty.svg";

const ShowsItem = ({ show, id }) => {
  const { handleAddToBookmark } = useContext(ShowsContext);
  const { year, category, rating, title } = show;

  return (
    <div>
      <div className="relative">
        <img
          src={show.thumbnail.regular.small}
          alt="show"
          className="rounded-lg"
        />
        <div
          className="absolute top-2 right-0  w-8 h-8 rounded-full bg-bgColor/[0.5] lg:hover:bg-bgColor lg:cursor-pointer"
          onClick={() => handleAddToBookmark(id)}
          title="add or remove show from bookmark"
        >
          <img
            src={show.isBookmarked ? bookmarkIconFull : bookmarkIconEmpty}
            alt="bookmark icon"
            className="-translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4 z-50"
          />
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <span className="text-xs font-light opacity-75">{year}</span>
        <div className="flex items-center gap-1">
          <span className="w-[2px] h-[2px] bg-white opacity-50 rounded-full inline-block mr-1"></span>
          <img
            src={
              category === "Movie" ? movieCategoryIcon : tvSeriesCategoryIcon
            }
            alt="category icon"
          />
          <span className="text-xs font-light opacity-75">{category}</span>
        </div>
        <div className="flex items-center">
          <span className="w-[2px] h-[2px] bg-white opacity-50 rounded-full inline-block mr-1"></span>
          <span className="text-xs font-light opacity-75">{rating}</span>
        </div>
      </div>
      <p className="font-medium text-sm">{title}</p>
    </div>
  );
};

export default ShowsItem;

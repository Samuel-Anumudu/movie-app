import { useContext, useState } from "react";
import ShowsContext from "../context/ShowContext";
import movieCategoryIcon from "../assets/icon-category-movie.svg";
import tvSeriesCategoryIcon from "../assets/icon-category-tv.svg";
import bookmarkIconFull from "../assets/icon-bookmark-full.svg";
import bookmarkIconEmpty from "../assets/icon-bookmark-empty.svg";
import playIcon from "../assets/play.png";

const SlidesItem = ({ show, id }) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const { handleAddToBookmark } = useContext(ShowsContext);
  const { year, category, rating, title } = show;

  const onMouseEnter = () => {
    setIsMouseEnter(true);
  };

  const onMouseLeave = () => {
    setIsMouseEnter(false);
  };
  return (
    <div
      className="relative lg:cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>
        <img
          src={show.thumbnail.trending.small}
          alt="show"
          className={`md:hidden rounded-lg w-[240px] h-[140px] md:w-[470px] md:h-[230px] `}
        />
        <img
          src={show.thumbnail.trending.large}
          alt="show"
          className={`hidden md:block rounded-lg w-[240px] h-[140px] md:w-[470px] md:h-[230px] `}
        />
        <div
          className="absolute top-2 md:top-4 right-[3.5%] md:right-[5%] w-8 h-8 rounded-full bg-bgColor/[0.5] lg:hover:bg-white/[0.3] lg:cursor-pointer"
          onClick={() => handleAddToBookmark(id)}
          title="add or remove show from bookmark"
        >
          <img
            src={show.isBookmarked ? bookmarkIconFull : bookmarkIconEmpty}
            alt="bookmark icon"
            className="-translate-x-2/4 -translate-y-2/4 absolute top-2/4 left-2/4 z-50"
          />
        </div>
        {isMouseEnter && (
          <div
            className={`hidden lg:block w-full h-full absolute inset-0 bg-[#000]/[0.5]`}
          >
            <img
              src={playIcon}
              alt="play"
              className="w-[117px] absolute  -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4"
            />
          </div>
        )}
      </div>
      <div
        className={`absolute top-[63%] md:top-[67%]  ${
          id !== 1
            ? "left-[12%] w-[80%] md:w-full md:left-[12.5%]"
            : "left-[6.5%] md:left-[5%] w-[86%] md:w-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="">
            <div className="flex gap-2 items-center">
              <span className="text-xs md:text-base font-light opacity-75">
                {year}
              </span>
              <div className="flex items-center gap-1">
                <span className="w-[2px] h-[2px] md:w-[3px] md:h-[3px] bg-white opacity-50 rounded-full inline-block mr-1"></span>
                <img
                  src={
                    category === "Movie"
                      ? movieCategoryIcon
                      : tvSeriesCategoryIcon
                  }
                  alt="category icon"
                />
                <span className="text-xs md:text-base font-light opacity-75">
                  {category}
                </span>
              </div>
              <div className="hidden md:flex items-center">
                <span className="w-[2px] h-[2px] md:w-[3px] md:h-[3px] bg-white opacity-50 rounded-full inline-block mr-1"></span>
                <span className="text-xs md:text-base font-light opacity-75">
                  {rating}
                </span>
              </div>
            </div>
            <p className="font-medium text-sm md:text-2xl">{title}</p>
          </div>
          <div className="md:hidden flex items-center bg-white/[0.15] w-[34px] h-[21px] justify-center rounded-[10.5px]">
            <span className="text-xs font-normal font opacity-75">
              {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidesItem;

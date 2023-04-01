import { useContext } from "react";
import ShowsContext from "../context/ShowsContext";

const ShowsItem = ({ show, id }) => {
  const { handleAddToBookmark } = useContext(ShowsContext);
  const { title } = show;
  return (
    <>
      <h1>{title}</h1>
      <button onClick={() => handleAddToBookmark(id)} className="btn">
        Add to Bookmark
      </button>
    </>
  );
};

export default ShowsItem;

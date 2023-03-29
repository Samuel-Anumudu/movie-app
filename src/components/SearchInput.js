import { useContext } from "react";
import MovieContext from "../context/MovieContext";
const SearchInput = () => {
  const { searchParam, setSearchParam } = useContext(MovieContext);
  return (
    <div>
      <form>
        <div className="form-control flex flex-row items-center">
          <h3>searchIcon</h3>
          <input
            type="search"
            placeholder="Search for movies or TV series"
            className="input input-bordered w-full max-w-xs"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;

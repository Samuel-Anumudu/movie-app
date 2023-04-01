const SearchInput = ({ placeholder, value, onChange }) => {
  return (
    <div>
      <form>
        <div className="form-control flex flex-row items-center">
          <h3>searchIcon</h3>
          <input
            type="search"
            placeholder={placeholder}
            className="input input-bordered w-full max-w-xs"
            value={value}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;

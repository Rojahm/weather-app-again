import { FaSearchLocation } from "react-icons/fa";
const Search = ({ handleQuery, handleSearch, handleCurrentLocation }) => {
  return (
    <div className="Search">
      <form className="input-group mt-4 px-5" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Type a City"
          className="form-control"
          onChange={handleQuery}
        />
        <span className="btn" onClick={handleCurrentLocation}>
          <FaSearchLocation
            style={{ color: "#0B5ED7", cursor: "pointer", fontSize: "25px" }}
          />
        </span>
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    </div>
  );
};
export default Search;

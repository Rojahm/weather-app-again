const Search = ({ handleQuery, handleSearch, handleCurrentLocation }) => {
  return (
    <div className="Search">
      <form className="input-group mt-5" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Type a City"
          className="form-control"
          onChange={handleQuery}
        />
        <input type="submit" value="Search" className="btn btn-primary" />
        <p className="btn" onClick={handleCurrentLocation}>
          current
        </p>
      </form>
    </div>
  );
};
export default Search;

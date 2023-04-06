const Search = ({ handleQuery, handleSearch, handleCurrentLocation }) => {
  return (
    <div className="Search">
      <p>from search</p>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Type a City" onChange={handleQuery} />
        <input type="submit" value="Search" />
        <p onClick={handleCurrentLocation}>current</p>
      </form>
    </div>
  );
};
export default Search;

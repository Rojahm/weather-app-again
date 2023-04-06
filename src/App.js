import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Search from "./components/Search";
import TodayInfo from "./components/TodayInfo";

function App() {
  const [city, setCity] = useState("");
  const handleQuery = (e) => {
    setCity(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    return <p>{city}</p>;
  };
  const handleCurrentLocation = (e) => {
    console.log(city);
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <Search
          handleQuery={handleQuery}
          handleSearch={handleSearch}
          handleCurrentLocation={handleCurrentLocation}
        />
        <TodayInfo city={city} />
        <hr />
        {/* forecast */}
      </div>
    </div>
  );
}

export default App;

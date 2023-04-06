import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import TodayInfo from "./components/TodayInfo";

function App() {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleQuery = (e) => {
    setCity(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
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
        <TodayInfo isLoading={isLoading} city={city} />
        <hr />
        {/* forecast */}
      </div>
    </div>
  );
}

export default App;

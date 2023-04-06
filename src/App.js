import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import TodayInfo from "./components/TodayInfo";

function App() {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // handle input text and setCity
  const handleQuery = (e) => {
    setCity(e.target.value);
  };
  // handle form submit event and set isLoadin to true
  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };
  // handle current location coordinates
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

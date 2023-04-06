import { useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import TodayInfo from "./components/TodayInfo";

function App() {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [unit, setUnit] = useState("metric");
  // get data from api and setWeatherData state object
  const getData = (city) => {
    const apiKey = "a7c7f51a8a5abc24e0tb69o4ff6018a3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then((Response) => {
      setWeatherData(Response.data);
      setIsLoading(false);
      setIsLoaded(true);
      console.log(weatherData);
    });
  };
  // handle input text and setCity
  const handleQuery = (e) => {
    setCity(e.target.value);
  };
  // handle form submit event and set isLoadin to true
  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    getData(city);
  };
  // handle current location coordinates
  const handleCurrentLocation = (e) => {
    console.log(city);
  };
  // handle unit conversion
  const handleUnit = (unit) =>
    unit === "metric" ? setUnit("fahrenheit") : setUnit("metric");
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <Search
          handleQuery={handleQuery}
          handleSearch={handleSearch}
          handleCurrentLocation={handleCurrentLocation}
        />
        <TodayInfo
          isLoading={isLoading}
          isLoaded={isLoaded}
          city={city}
          unit={unit}
          weatherData={weatherData}
          handleUnit={handleUnit}
        />
        <hr />

        {/* forecast */}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import TodayInfo from "./components/TodayInfo";
import Forecast from "./components/Forecast";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [unit, setUnit] = useState("metric");
  const [forecastData, setForecastData] = useState({});
  const [isForecastLoading, setIsForecastLoading] = useState(false);
  const [isForecastLoaded, setIsForecastLoaded] = useState(false);

  // get data from api and setWeatherData state object
  const getData = (city) => {
    const apiKey = "a7c7f51a8a5abc24e0tb69o4ff6018a3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then((Response) => {
      setWeatherData(Response.data);
      setIsLoading(false);
      setIsLoaded(true);
    });
  };
  // default first page when nothing is loaded or no search as been done
  if (!isLoaded && !isLoading) {
    getData("berlin");
  }
  // handle input text and setCity
  const handleQuery = (e) => {
    setCity(e.target.value);
  };
  // handle form submit event and set isLoadin to true
  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsForecastLoading(true);
    getData(city);
    getForecast(city);
  };
  // handle current location coordinates
  const handleCurrentLocation = (e) => {
    console.log(city);
  };
  // handle unit conversion
  const handleUnit = (unit) =>
    unit === "metric" ? setUnit("fahrenheit") : setUnit("metric");
  // get forecast
  const getForecast = (city) => {
    const apiKey = "a7c7f51a8a5abc24e0tb69o4ff6018a3";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then((Response) => {
      setForecastData(Response.data);
      setIsForecastLoading(false);
      setIsForecastLoaded(true);
    });
  };
  // default first page forecast values when nothing is loaded or no search as been done
  if (!isForecastLoaded && !isForecastLoading) {
    getForecast("berlin");
  }
  return (
    <div className="App m-5 text-center">
      <div className="content border rounded shadow-sm p-4">
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
        <Forecast
          unit={unit}
          isLoading={isLoading}
          isForecastLoading={isForecastLoading}
          isForecastLoaded={isForecastLoaded}
          forecastData={forecastData}
        />
      </div>
      <div className="footer">
        coded by <a href="https://cool-starship-bcbb97.netlify.app/">Ro?a </a>-{" "}
        <a href="https://github.com/Rojahm/weather-app-again">open-source </a>
        on Github
      </div>
    </div>
  );
}

export default App;

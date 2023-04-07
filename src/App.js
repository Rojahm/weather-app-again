import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import TodayInfo from "./components/TodayInfo";
import Forecast from "./components/Forecast";

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
      console.log(forecastData);
    });
  };
  return (
    <div className="App border rounded shadow-sm p-5 m-5 text-center">
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
        <Forecast
          unit={unit}
          isLoading={isLoading}
          isForecastLoading={isForecastLoading}
          isForecastLoaded={isForecastLoaded}
          forecastData={forecastData}
        />
      </div>
    </div>
  );
}

export default App;

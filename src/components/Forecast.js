import PulseLoader from "react-spinners/PulseLoader";
import ForecastDay from "./ForecastDay";

const Forecast = ({
  unit,
  isForecastLoading,
  isForecastLoaded,
  isLoading,
  forecastData,
}) => {
  if (isForecastLoading && !isLoading) {
    return (
      <div>
        <p>Loadin from forecast</p>
        <PulseLoader color="#36d7b7" />
      </div>
    );
  } else if (isForecastLoaded) {
    return (
      <div className="d-flex justify-content-evenly">
        {forecastData.daily.map(
          (day, i) =>
            i < 6 &&
            i > 0 && (
              <ForecastDay
                key={Math.floor(Math.random() * 10000) + 1}
                day={day}
                unit={unit}
              />
            )
        )}
      </div>
    );
  }
};

export default Forecast;

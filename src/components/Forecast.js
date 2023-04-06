import PulseLoader from "react-spinners/PulseLoader";

const Forecast = ({
  unit,
  isForecastLoading,
  isForecastLoded,
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
  } else if (isForecastLoded) {
    return (
      <div>
        <p>forecast loaded</p>
      </div>
    );
  }
};

export default Forecast;

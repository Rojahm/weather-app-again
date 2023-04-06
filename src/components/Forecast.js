const Forecast = ({ unit, isForecastLoading, isForecastLoded }) => {
  if (isForecastLoading) {
    return (
      <div>
        <p>Loadin from forecast</p>
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

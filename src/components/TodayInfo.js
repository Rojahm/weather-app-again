const TodayInfo = ({
  city,
  isLoading,
  isLoaded,
  unit,
  handleUnit,
  weatherData,
}) => {
  // is searching but response is not ready
  if (isLoading) {
    return (
      <div>
        <p>Searching for {city}</p>
      </div>
    );
  }
  // response is recieved
  else if (isLoaded) {
    return (
      <div className="TodayInfo d-flex justify-content-evenly">
        <div className="align-self-center">
          <span>{weatherData.city}</span>
        </div>
        <div className="align-self-center">
          <span>
            {unit === "metric"
              ? Math.round(weatherData.temperature.current)
              : Math.round((weatherData.temperature.current * 9) / 5 + 32)}

            <button
              onClick={() => handleUnit(unit)}
              style={{ cursor: "pointer" }}
            >
              {/* dynamic unit */}
              {unit === "metric" ? "C" : "F"}
            </button>
          </span>
        </div>
        <div className="align-self-center">
          <img src={weatherData.condition.icon_url} alt="icon" />
        </div>
      </div>
    );
  }
};

export default TodayInfo;

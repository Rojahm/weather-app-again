const TodayInfo = ({ city, isLoading, isLoaded, weatherData }) => {
  if (isLoading) {
    return (
      <div>
        <p>Searching for {city}</p>
      </div>
    );
  } else if (isLoaded) {
    return (
      <div className="TodayInfo d-flex justify-content-center">
        <div>
          <span>weather in {weatherData.city}</span>
        </div>
        <div>
          <span>{weatherData.temperature.current}</span>
        </div>
        <div>
          <img src={weatherData.condition.icon_url} alt="icon" />
        </div>
      </div>
    );
  }
};

export default TodayInfo;

const TodayInfo = ({ city, isLoading, isLoaded, weatherData }) => {
  if (isLoading) {
    return (
      <div>
        <p>Searching for {city}</p>
      </div>
    );
  } else if (isLoaded) {
    return (
      <div>
        <span>weather in {weatherData.city}</span>
        <span>{weatherData.temperature.current}</span>
      </div>
    );
  }
};

export default TodayInfo;

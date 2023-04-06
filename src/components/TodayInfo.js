const TodayInfo = ({ city, isLoading, weatherData }) => {
  if (isLoading) {
    return (
      <div>
        <p>Searching for {city}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p> recieved</p>
      </div>
    );
  }
};

export default TodayInfo;

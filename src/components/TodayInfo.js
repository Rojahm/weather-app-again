const TodayInfo = ({ city, isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <p>Searching for {city}</p>
      </div>
    );
  }
};

export default TodayInfo;

import PulseLoader from "react-spinners/PulseLoader";
import Time from "./Time";
import Icon from "./Icon";
import "./TodayInfo.css";

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
        <PulseLoader color="#36d7b7" />
      </div>
    );
  }
  // response is recieved
  else if (isLoaded) {
    return (
      <div className="TodayInfo d-flex justify-content-evenly">
        <div className="align-self-center pt-3">
          <span className="city">{weatherData.city}</span>
          <span className="date">
            <Time timeStamp={weatherData.time} time={true} />
          </span>
        </div>
        <div className="align-self-center">
          <span className="temp">
            {unit === "metric"
              ? Math.round(weatherData.temperature.current)
              : Math.round((weatherData.temperature.current * 9) / 5 + 32)}
            °
          </span>
          <button className="unit" onClick={() => handleUnit(unit)}>
            {/* dynamic unit */}
            {unit === "metric" ? "C" : "F"}
          </button>
        </div>
        <div className="align-self-center">
          <Icon
            icon={weatherData.condition.icon}
            alt={weatherData.condition.description}
            width={"100px"}
          />
        </div>
      </div>
    );
  }
};

export default TodayInfo;

import Time from "./Time";
import Icon from "./Icon";
import "./ForecastDay.css";

const ForecastDay = ({ day, unit }) => {
  return (
    <div className="ForecastDay">
      <span className="day">
        <Time timeStamp={day.time} time={false} />
      </span>
      <Icon
        icon={day.condition.icon}
        alt={day.condition.description}
        width={"63px"}
      />
      <span className="max pe-3">
        {unit === "metric"
          ? Math.round(day.temperature.maximum)
          : Math.round((day.temperature.maximum * 9) / 5 + 32)}
      </span>
      <span className="min">
        {unit === "metric"
          ? Math.round(day.temperature.minimum)
          : Math.round((day.temperature.minimum * 9) / 5 + 32)}
      </span>
    </div>
  );
};

export default ForecastDay;

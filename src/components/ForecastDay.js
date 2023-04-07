import Time from "./Time";
import Icon from "./Icon";

const ForecastDay = ({ day, unit }) => {
  return (
    <div>
      <Time timeStamp={day.time} time={false} />
      <Icon
        icon={day.condition.icon}
        alt={day.condition.description}
        width={"63px"}
      />
      <span>
        {unit === "metric"
          ? Math.round(day.temperature.maximum)
          : Math.round((day.temperature.maximum * 9) / 5 + 32)}
      </span>{" "}
      <span>
        {unit === "metric"
          ? Math.round(day.temperature.minimum)
          : Math.round((day.temperature.minimum * 9) / 5 + 32)}
      </span>
    </div>
  );
};

export default ForecastDay;

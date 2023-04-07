import Time from "./Time";

const ForecastDay = ({ day, unit }) => {
  return (
    <div>
      <Time timeStamp={day.time} time={false} />
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

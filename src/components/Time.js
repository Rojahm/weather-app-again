// gets timestamp as input
// if it as hours and min returns tem too
// if its just days it return just days
const Time = ({ timeStamp }) => {
  let date = new Date(timeStamp * 1000);
  let hour = date.getHours();
  let min = date.getMinutes();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];
  return (
    <>
      <div>{day}</div>
      {hour && (
        <div>
          {hour < 10 ? `0${hour}` : hour}:{min < 10 ? `0${min}` : min}
        </div>
      )}
    </>
  );
};

export default Time;

const Icon = ({ icon, alt, width }) => {
  const icons = {
    "clear-sky-day":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-day.svg",
    "clear-sky-night":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-night.svg",
    "few-clouds-day":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/partly-cloudy-day.svg",
    "few-clouds-night":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/partly-cloudy-night.svg",
    "scattered-clouds-day":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/overcast-day.svg",
    "scattered-clouds-night":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/overcast-night.svg",
    "broken-clouds-day":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/extreme-day.svg",
    "broken-clouds-night":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/extreme-night.svg",
    "shower-rain-day":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/partly-cloudy-day-rain.svg",
    "shower-rain-night":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/partly-cloudy-night-rain.svg",
    "rain-day":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/overcast-day-rain.svg",
    "rain-night":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/overcast-night-rain.svg",
    "thunderstorm-day":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/thunderstorms-day-rain.svg",
    "thunderstorm-night":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/thunderstorms-night-rain.svg",
    "snow-day":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/partly-cloudy-day-snow.svg",
    "snow-night":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/partly-cloudy-night-snow.svg",
    "mist-day":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/partly-cloudy-day-fog.svg",
    "mist-night":
      "https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/partly-cloudy-night-fog.svg",
  };
  return (
    <div>
      <img src={icons[icon]} alt={alt} width={width} />
    </div>
  );
};

export default Icon;

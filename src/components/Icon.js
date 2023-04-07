const Icon = ({ icon, alt, width }) => {
  return (
    <div>
      <img
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-day.svg"
        alt={alt}
        width={width}
      />
    </div>
  );
};

export default Icon;

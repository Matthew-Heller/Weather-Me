function DailyHourlyToggle({ active, onClick }) {
  return (
    <div className="weatherToggle__container">
      <button
        onClick={onClick}
        hourlyactive={active}
        className="weatherToggle__hourly "
      >
        Hourly
      </button>
      <button
        onClick={onClick}
        hourlyactive={active}
        className="weatherToggle__daily"
      >
        Daily
      </button>
    </div>
  );
}

export default DailyHourlyToggle;

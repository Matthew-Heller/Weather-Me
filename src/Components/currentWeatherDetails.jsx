function currentWeatherDetails({ data }) {
  if (data) {
    const current = data.current;
    const today = data.forecast.forecastday[0];

    return (
      <div className="currentWeather__details">
        <div className="currentWeather__topRow">
          <div className="currentWeather__rainChance">
            {today.day.daily_chance_of_rain}% chance of rain today
          </div>
          <div className="currentWeather__feelsLike">
            Feels like {Math.floor(current.feelslike_f) + "°"}
          </div>
        </div>
        <div className="currentWeather__bottomRow">
          <div className="currentWeather__wind">
            Wind {current.wind_dir} {current.wind_mph} mph
          </div>
          <div className="currentWeather__sunRiseSet">
            {today.astro.sunrise}
            <img
              className="currentWeather__sunCycleIcon"
              src={require("../Images/day-and-night.jpg")}
            />
            {today.astro.sunset}
          </div>
          <div className="currentWeather__uv">UV Index {current.uv}</div>
        </div>
      </div>
    );
  }
}

export default currentWeatherDetails;

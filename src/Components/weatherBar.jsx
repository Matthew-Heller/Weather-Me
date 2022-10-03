import HourlyWeather from "./hourlyWeather";
import DailyWeather from "./dailyWeather";
import DailyHourlyToggle from "./dailyHourlyToggle";
import { useState } from "react";

function WeatherBar({ hourlyArray, dailyArray }) {
  const [hourlyActive, setHourlyActive] = useState(true);

  const handleClick = () => {
    if (hourlyActive) {
      setHourlyActive(false);
    } else setHourlyActive(true);
  };

  const active = `${hourlyActive}`;

  return (
    <div>
      <DailyHourlyToggle onClick={handleClick} active={active} />
      <div className="weatherBar__container">
        <div className="weatherBar">
          <HourlyWeather hourlyArray={hourlyArray} active={active} />
          <DailyWeather dailyArray={dailyArray} active={active} />
        </div>
      </div>
    </div>
  );
}

export default WeatherBar;

import React from "react";
import { getHourName } from "../Helper Functions/getHourName";

function HourlyWeather({ hourlyArray, active }) {
  if (hourlyArray) {
    return (
      <ul active={active} className="weatherBar__hourlyWeather">
        {hourlyArray.map((hour) => {
          return (
            <div className="hourlyWeather__container">
              <div className="hourlyWeather__time">
                {getHourName(hour.time)}
              </div>
              <div className="hourlyWeather__temp">
                {Math.floor(hour.temp_f) + "°"}
              </div>
              <img
                className="hourlyWeather__icon"
                src={hour.condition.icon}
              ></img>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default HourlyWeather;

import React from "react";
import { getDayName } from "../Helper Functions/getDayName";

function dailyWeather({ dailyArray, active }) {
  const isToday = (day) => {
    if (day === getDayName(dailyArray[0].date_epoch)) {
      return "Today";
    }
    return day;
  };

  if (dailyArray) {
    return (
      <ul active={active} className="weatherBar__dailyWeather">
        {dailyArray.map((day) => {
          return (
            <div className="dailyWeather__container">
              <div className="dailyWeather__day">
                {isToday(getDayName(day.date_epoch))}
              </div>

              <div className="dailyWeather__highLow">
                <div className="dailyWeather__tempHigh">
                  {Math.floor(day.day.maxtemp_f) + "°"}
                </div>
                <div className="dailyWeather__tempLow">
                  {Math.floor(day.day.mintemp_f) + "°"}
                </div>
              </div>
              <img
                className="dailyWeather__icon"
                src={day.day.condition.icon}
              ></img>
            </div>
          );
        })}
        <div className="dailyWeather--filler">•</div>
        <div className="dailyWeather--filler">•</div>
        <div className="dailyWeather--filler">•</div>
        <div className="dailyWeather--filler">•</div>
      </ul>
    );
  }
}

// Last 2 divs are for space filler, API is freemium and only includes a 3 day forecast
// Actual production of app would include 5 day forecast

export default dailyWeather;

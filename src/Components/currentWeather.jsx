import React from "react";
// import { getDayName } from "../Helper Functions/getDayName";

function CurrentWeather({ location, data }) {
  //if the data has been called and received, display the current weather block
  if (data) {
    const today = data.forecast.forecastday[0];
    const current = data.current;

    return (
      <div className="current-weather">
        <h1 className="current-weather__location">{location}</h1>
        {/* <div className="current-weather__date">
          {getDayName(today.date_epoch)}
        </div> */}
        <div className="current-weather__temp">
          <img
            className="current-weather__icon"
            src={current.condition.icon}
            alt="current weather display icon"
          />
          {Math.floor(current.temp_f) + "°"}
        </div>
        <div className="current-weather__phrase">{current.condition.text}</div>
        <div className="current-weather__high-low">
          High:{" "}
          <span className="current-weather__high">
            {Math.floor(today.day.maxtemp_f) + "°"}
          </span>
          &nbsp; | &nbsp; Low:{" "}
          <span className="current-weather__low">
            {Math.floor(today.day.mintemp_f) + "°"}
          </span>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;

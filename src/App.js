import "./App.css";
import CurrentWeather from "./Components/currentWeather";
import WeatherBar from "./Components/weatherBar";
import Search from "./Components/search";
import CurrentWeatherDetails from "./Components/currentWeatherDetails";
import { useState, useEffect } from "react";
import { getGeoCodeOptions, getWeatherOptions } from "./HTTP Services/http";
import axios from "axios";
import getHourlyArray from "./Helper Functions/getHourlyArray";
import getWeatherBackground from "./Helper Functions/getWeatherBackgound";

function App() {
  const [data, setData] = useState(null);
  const [options, setOptions] = useState(null);
  const [location, setLocation] = useState(null);
  const [hourlyArray, setHourlyArray] = useState();
  const [dailyArray, setDailyArray] = useState();
  const [background, setBackground] = useState("default");
  const [geoCodeOptions, setGeoCodeOptions] = useState();
  const [geoPermission, setGeoPermission] = useState();

  useEffect(() => {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      setGeoPermission(result.state);
    });
  }, []);

  useEffect(() => {
    if (geoPermission !== "denied" && !location) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setGeoCodeOptions(getGeoCodeOptions(latitude, longitude));
      });
    }
  }, [geoPermission]);

  useEffect(() => {
    const getCityName = async () => {
      const cityData = await axios.request(geoCodeOptions).then((response) => {
        return `${response.data.address.city}, ${response.data.address.state}`;
      });
      setLocation(cityData);
    };
    if (geoCodeOptions) {
      getCityName();
    }
  }, [geoCodeOptions]);

  useEffect(() => {
    if (location) {
      setOptions(getWeatherOptions(location));
    }
  }, [location]);

  useEffect(() => {
    const getData = async () => {
      const weatherData = await axios.request(options).then((response) => {
        return response.data;
      });
      setData(weatherData);
    };
    if (location) {
      getData();
    }
  }, [options]);

  useEffect(() => {
    const getHourly = async () => {
      const hourlyWeather = await getHourlyArray(data);

      setHourlyArray(hourlyWeather);
    };
    if (data) {
      getHourly();
      setDailyArray(data.forecast.forecastday);
      setBackground(getWeatherBackground(data.current.condition.code));
    }
    return;
  }, [data]);

  const handleCallback = (searchInput) => {
    setLocation(searchInput);
  };

  if (data) {
    return (
      <div background={background} className="hasLocation">
        <Search handleCallback={handleCallback} />
        <CurrentWeather location={location} data={data} />
        <CurrentWeatherDetails data={data} />
        <WeatherBar hourlyArray={hourlyArray} dailyArray={dailyArray} />
      </div>
    );
  } else {
    return (
      <div className="noLocation">
        <div className="noLocation__content">
          <h1 className="noLocation__welcome">
            <img
              className="noLocation__icon"
              src={require("./Images/Logo.png")}
            />
            Weather Me
          </h1>
          <Search handleCallback={handleCallback} />
          <h2 className="noLocation__guide">
            To get started search for a city or allow location services
          </h2>
        </div>
      </div>
    );
  }
}

export default App;

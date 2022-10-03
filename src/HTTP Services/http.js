export function getWeatherOptions(location) {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: { q: `${location}`, days: "3" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_WEATHER,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  return options;
}

export function getSuggestionsOptions(userSearch, token) {
  const options = {
    method: "GET",
    url: "https://google-maps28.p.rapidapi.com/maps/api/place/autocomplete/json",
    params: {
      input: `${userSearch}`,
      language: "en",
      sessiontoken: `${token}`,
      types: "(cities)",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_SUGGESTIONS,
      "X-RapidAPI-Host": "google-maps28.p.rapidapi.com",
    },
  };

  return options;
}

export function getGeoCodeOptions(latitude, longitude) {
  const options = {
    method: "GET",
    url: "https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse",
    params: {
      lat: `${latitude}`,
      lon: `${longitude}`,
      "accept-language": "en",
      polygon_threshold: "0.0",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_GEOCODE,
      "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
    },
  };

  return options;
}

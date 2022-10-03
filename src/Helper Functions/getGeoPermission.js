function getGeoPermission() {
  navigator.permissions.query({ name: "geolocation" }).then((result) => {
    if (result.state === "granted") {
      return result.state;
    } else if (result.state === "prompt") {
      return result.state;
    } else if (result.state === "denied") {
      return result.state;
    }
    result.addEventListener("change", () => {
      return result.state;
    });
  });
}

export default getGeoPermission;

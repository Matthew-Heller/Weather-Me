function getDefaultLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    const currentLocation = `${position.coords.latitude}, ${position.coords.longitude}`;
    console.log(currentLocation);
    return currentLocation;
  });
}

export default getDefaultLocation;

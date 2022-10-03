export default function getHourlyArray(data) {
  const array1 = data.forecast.forecastday[0].hour;
  const array2 = data.forecast.forecastday[1].hour;
  const longHourlyArray = array1.concat(array2);
  const currentEpoch = Math.floor(new Date().getTime() / 1000.0);

  let i;
  for (i = 0; i < longHourlyArray.length; i++) {
    const hourlyEpoch = longHourlyArray[i].time_epoch;
    if (currentEpoch - hourlyEpoch < 0) {
      i -= 1;
      const hourlyArray = longHourlyArray.slice(i, i + 7);
      return hourlyArray;
    }
  }
}

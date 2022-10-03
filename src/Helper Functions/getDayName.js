export function getDayName(date) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const a = new Date(date * 1000);
  const dateName = days[a.getDay()];
  return dateName;
}

export function getHourName(date) {
  const dt = new Date(date);
  let hours = dt.getHours(); // gives the value in 24 hours format
  const AmOrPm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;
  let finalTime = `${hours} ${AmOrPm}`;
  return finalTime;
}

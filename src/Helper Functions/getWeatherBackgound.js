function getWeatherBackground(code) {
  const clear = [1000];
  const cloudy = [1003, 1006, 1009];
  const foggy = [1135, 1147];
  const snowy = [
    1066, 1069, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225,
    1237, 1249, 1252, 1255, 1258, 1261, 1264, 1282,
  ];
  const rainy = [
    1030, 1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192,
    1195, 1198, 1201, 1240, 1243, 1246,
  ];
  const stormy = [1087, 1273, 1276, 1279, 1282];

  if (clear.includes(code)) {
    return "clear";
  } else if (cloudy.includes(code)) {
    return "cloudy";
  } else if (foggy.includes(code)) {
    return "foggy";
  } else if (snowy.includes(code)) {
    return "snowy";
  } else if (rainy.includes(code)) {
    return "rainy";
  } else if (stormy.includes(code)) {
    return "stormy";
  } else return "default";
}

export default getWeatherBackground;

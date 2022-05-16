function degToDirection(deg) {
   let val = deg / 22.5;

   let directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
   ];

   val = val % 16;

   return directions[parseInt(val)];
}

export default degToDirection;

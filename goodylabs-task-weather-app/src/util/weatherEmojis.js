function weatherEmojis(code, isDay) {
   let weathers = [];

   if (isDay) {
      weathers = ["🌩️", "🌦️", "🌧️", "❄️", "🌫️", "☀️", "⛅"];
   } else {
      weathers = ["🌩️", "🌦️", "🌧️", "❄️", "🌫️", "🌙", "☁️"];
   }

   if (code == 800) {
      return weathers[5];
   } else if (code > 800) {
      return weathers[6];
   } else {
      return weathers[parseInt(String(code)[0]) - 1];
   }
}

export default weatherEmojis;

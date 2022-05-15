function requesturls(lat, lon, t) {
   let urls = [
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,

      `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${t[0]}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,

      `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${t[1]}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,

      `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${t[2]}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,

      `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${t[3]}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,

      `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${t[4]}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,

      `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
   ];

   return urls;
}

export default requesturls;

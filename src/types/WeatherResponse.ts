export default interface WeatherResponse {
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    description: string;
  };
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  dt: number;
  sys: {
    sunset: number;
    sunrise: number;
  };
}

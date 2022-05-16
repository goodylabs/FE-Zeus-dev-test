export default interface WeatherHistoricResponse {
  current: {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    wind_speed: number;
    wind_deg: number;
    wind: number | undefined;
    snow: number | undefined;
    weather: {
      description: string;
    };
  };
}

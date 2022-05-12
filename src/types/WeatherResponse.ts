export default interface WeatherResponse {
  location: {
    name: string;
    country: string;
    region: string;
    localtime: string;
  };
  current: {
    observation_time: string;
    temperature: number;
    weather_descriptions: string[];
    wind_speed: number;
    wind_degree: number;
    wind_dir: string;
    pressure: number;
    precip: number;
    humidity: number;
    cloudcover: number;
    feelslike: number;
    visibility: number;
    is_day: string;
  };
}

import PropTypes from "prop-types";
import {
    WiCloud,
    WiCloudy,
    WiDayCloudy,
    WiRain,
    WiShowers,
    WiThunderstorm,
    WiSnow,
    WiFog,
    WiTornado,
    WiRainMix,
    WiNightClear,
    WiDaySunny,
    WiDaySprinkle,
    WiNightAltSprinkle,
    WiNightAltCloudy,
    WiSandstorm,
    WiDaySunnyOvercast,
    WiNightAltPartlyCloudy,
    WiSmog,
} from "react-icons/wi";

const WeatherIcon = ({ weather, time, size }) => {
    const weatherTypeDay = {
        Cloud: ["broken clouds"],
        Cloudy: ["overcast clouds"],
        DayCloudy: ["scattered clouds"],
        Rain: [
            "heavy intensity rain",
            "very heavy rain",
            "extreme rain",
            "heavy intensity shower rain",
            "ragged shower rain",
        ],
        Showers: ["light rain", "moderate rain", "light intensity shower rain", "shower rain"],
        Thunderstorm: [
            "thunderstorm with light rain",
            "thunderstorm with rain",
            "thunderstorm with heavy rain",
            "light thunderstorm",
            "thunderstorm",
            "heavy thunderstorm",
            "ragged thunderstorm",
            "thunderstorm with light drizzle",
            "thunderstorm with drizzle",
            "thunderstorm with heavy drizzle",
        ],
        Snow: [
            "light snow",
            "Snow",
            "Heavy snow",
            "Sleet",
            "Light shower sleet",
            "Shower sleet",
            "Light rain and snow",
            "Rain and snow",
            "Light shower snow",
            "Shower snow",
            "Heavy shower snow",
        ],
        Fog: ["squalls", "mist", "Haze", "fog"],
        Tornado: ["tornado"],
        RainMix: ["freezing rain"],
        DaySunny: ["clear sky"],
        DaySprinkle: [
            "light intensity drizzle",
            "drizzle",
            "heavy intensity drizzle",
            "light intensity drizzle rain",
            "drizzle rain",
            "heavy intensity drizzle rain",
            "shower rain and drizzle",
            "heavy shower rain and drizzle",
            "shower drizzle",
        ],
        Sandstorm: ["sand/ dust whirls", "dust"],
        DaySunnyOvercast: ["few clouds"],
        Smog: ["volcanic ash", "Smoke", "sand"],
    };
    const weatherTypeNight = {
        Cloud: ["broken clouds"],
        Cloudy: ["overcast clouds"],
        Rain: [
            "heavy intensity rain",
            "very heavy rain",
            "extreme rain",
            "heavy intensity shower rain",
            "ragged shower rain",
        ],
        Showers: ["light rain", "moderate rain", "light intensity shower rain", "shower rain"],
        Thunderstorm: [
            "thunderstorm with light rain",
            "thunderstorm with rain",
            "thunderstorm with heavy rain",
            "light thunderstorm",
            "thunderstorm",
            "heavy thunderstorm",
            "ragged thunderstorm",
            "thunderstorm with light drizzle",
            "thunderstorm with drizzle",
            "thunderstorm with heavy drizzle",
        ],
        Snow: [
            "light snow",
            "Snow",
            "Heavy snow",
            "Sleet",
            "Light shower sleet",
            "Shower sleet",
            "Light rain and snow",
            "Rain and snow",
            "Light shower snow",
            "Shower snow",
            "Heavy shower snow",
        ],
        Fog: ["squalls", "mist", "Haze", "fog"],
        Tornado: ["tornado"],
        RainMix: ["freezing rain"],
        NightClear: ["clear sky"],
        NightAltSprinkle: [
            "light intensity drizzle",
            "drizzle",
            "heavy intensity drizzle",
            "light intensity drizzle rain",
            "drizzle rain",
            "heavy intensity drizzle rain",
            "shower rain and drizzle",
            "heavy shower rain and drizzle",
            "shower drizzle",
        ],
        NightAltCloudy: ["scattered clouds"],
        Sandstorm: ["sand/ dust whirls", "dust"],
        NightAltPartlyCloudy: ["few clouds"],
        Smog: ["volcanic ash", "Smoke", "sand"],
    };

    const findWeatherDay = (type) => {
        for (const [key, value] of Object.entries(weatherTypeDay)) {
            if (value.includes(type)) {
                return key;
            }
        }
    };

    const findWeatherNight = (type) => {
        for (const [key, value] of Object.entries(weatherTypeNight)) {
            if (value.includes(type)) {
                return key;
            }
        }
    };

    switch (time) {
        case "day":
            {
                switch (findWeatherDay(weather)) {
                    case "Cloud": {
                        return <WiCloud size={size} />;
                    }
                    case "Cloudy": {
                        return <WiCloudy size={size} />;
                    }
                    case "DayCloudy": {
                        return <WiDayCloudy size={size} />;
                    }
                    case "Rain": {
                        return <WiRain size={size} />;
                    }
                    case "Showers": {
                        return <WiShowers size={size} />;
                    }
                    case "Thunderstorm": {
                        return <WiThunderstorm size={size} />;
                    }
                    case "Snow": {
                        return <WiSnow size={size} />;
                    }
                    case "Fog": {
                        return <WiFog size={size} />;
                    }
                    case "Tornado": {
                        return <WiTornado size={size} />;
                    }
                    case "RainMix": {
                        return <WiRainMix size={size} />;
                    }
                    case "NightClear": {
                        return <WiNightClear size={size} />;
                    }
                    case "DaySunny": {
                        return <WiDaySunny size={size} />;
                    }
                    case "DaySprinkle": {
                        return <WiDaySprinkle size={size} />;
                    }
                    case "NightAltSprinkle": {
                        return <WiNightAltSprinkle size={size} />;
                    }
                    case "NightAltCloudy": {
                        return <WiNightAltCloudy size={size} />;
                    }
                    case "Sandstorm": {
                        return <WiSandstorm size={size} />;
                    }
                    case "DaySunnyOvercast": {
                        return <WiDaySunnyOvercast size={size} />;
                    }
                    case "NightAltPartlyCloudy": {
                        return <WiNightAltPartlyCloudy size={size} />;
                    }
                    case "Smog": {
                        return <WiSmog size={size} />;
                    }
                }
            }
            break;
        case "night": {
            switch (findWeatherNight(weather)) {
                case "Cloud": {
                    return <WiCloud size={size} />;
                }
                case "Cloudy": {
                    return <WiCloudy size={size} />;
                }
                case "DayCloudy": {
                    return <WiDayCloudy size={size} />;
                }
                case "Rain": {
                    return <WiRain size={size} />;
                }
                case "Showers": {
                    return <WiShowers size={size} />;
                }
                case "Thunderstorm": {
                    return <WiThunderstorm size={size} />;
                }
                case "Snow": {
                    return <WiSnow size={size} />;
                }
                case "Fog": {
                    return <WiFog size={size} />;
                }
                case "Tornado": {
                    return <WiTornado size={size} />;
                }
                case "RainMix": {
                    return <WiRainMix size={size} />;
                }
                case "NightClear": {
                    return <WiNightClear size={size} />;
                }
                case "DaySunny": {
                    return <WiDaySunny size={size} />;
                }
                case "DaySprinkle": {
                    return <WiDaySprinkle size={size} />;
                }
                case "NightAltSprinkle": {
                    return <WiNightAltSprinkle size={size} />;
                }
                case "NightAltCloudy": {
                    return <WiNightAltCloudy size={size} />;
                }
                case "Sandstorm": {
                    return <WiSandstorm size={size} />;
                }
                case "DaySunnyOvercast": {
                    return <WiDaySunnyOvercast size={size} />;
                }
                case "NightAltPartlyCloudy": {
                    return <WiNightAltPartlyCloudy size={size} />;
                }
                case "Smog": {
                    return <WiSmog size={size} />;
                }
            }
        }
    }
};

WeatherIcon.propTypes = {
    weather: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
};

export default WeatherIcon;

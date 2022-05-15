import { CloudRain, CloudSnow, CloudStorm, Cloud, Mist, Sun } from 'tabler-icons-react';

const determineIcon = (description: string) => {
  let iconToReturn = <Sun color="yellow" size="8em" />;
  switch (description) {
    case 'few clouds' || 'scattered clouds' || 'broken clouds':
      iconToReturn = <Cloud size="8em" />;
      break;
    case 'shower rain' || 'rain':
      iconToReturn = <CloudRain size="8em" />;
      break;
    case 'thunderstorm':
      iconToReturn = <CloudStorm size="8em" />;
      break;
    case 'snow':
      iconToReturn = <CloudSnow size="8em" />;
      break;
    case 'mist':
      iconToReturn = <Mist size="8em" />;
      break;
    default:
      break;
  }
  return iconToReturn;
};

export default determineIcon;

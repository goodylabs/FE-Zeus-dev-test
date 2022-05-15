import axios from 'axios';

const access_key = process.env.REACT_APP_API_KEY;

export async function getDirection(direction) {
  const coord = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${direction}&limit=0&appid=${access_key}`
  );
  if (coord.data.length === 0) {
    return 0;
  }
  return coord.data[0];
}

export async function getData(direction) {
  let coord = await getDirection(direction);
  if (coord === 0) {
    throw new Error('We cannot find current weather data for this location');
  }

  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${access_key}&units=metric`
  );
  if (data.code) {
    throw new Error(data.code);
  }
  return data.data;
}

export async function getHistoricData(direction) {
  let coord = await getDirection(direction);
  if (coord === 0) {
    throw new Error('We cannot find historical data for this location');
  }

  const historicRequest = [];
  const start = Math.floor(new Date().getTime() / 1000).toFixed(0);
  let end;
  for (let i = 5; i > 0; i--) {
    end = new Date().setTime(start - i * 86400);
    historicRequest.push(
      axios.get(
        `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${coord.lat}&lon=${coord.lon}&dt=${end}&appid=${access_key}&units=metric`
      )
    );
  }

  const historicData = await Promise.all(historicRequest);

  if (historicData.code) {
    throw new Error(historicData.code);
  }
  return historicData;
}

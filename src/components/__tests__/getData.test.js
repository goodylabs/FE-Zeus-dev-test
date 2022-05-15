import { getData, getHistoricData, getDirection } from '../getData.js';
import axios from 'axios';

test('The location', async () => {
  let truedata;
  async function callback() {
    truedata = await axios.get(
      'https://api.openweathermap.org/geo/1.0/direct?q=Łódź&appid=e427b83257f7ac84b20b4bd15a057fa4&limit=0'
    );
    return truedata;
  }
  await callback();
  const data = await getDirection('Łódź');
  expect(data).toStrictEqual(truedata.data[0]);
});

test('The location fail', async () => {
  const data = await getDirection(0);
  expect(data).toStrictEqual(0);
});

test('The current weather data', async () => {
  let truedata;
  async function callback() {
    truedata = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather?lat=51.7687&lon=19.4569&appid=e427b83257f7ac84b20b4bd15a057fa4&units=metric'
    );
    return truedata;
  }
  await callback();
  const data = await getData('Łódź');
  expect(data).toStrictEqual(truedata.data);
});

it('The current weather data fail', async () => {
  try {
    await getData(0);
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe('We cannot find current weather data for this location');
  }
});

test('The historical weather data', async () => {
  let truedata;
  const start = Math.floor(new Date().getTime() / 1000).toFixed(0);
  async function callback() {
    let end = new Date().setTime(start - 1 * 86400);
    truedata = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=51.7687&lon=19.457&dt=${end}&appid=e427b83257f7ac84b20b4bd15a057fa4&units=metric`
    );
    return truedata;
  }
  await callback();
  const data = await getHistoricData('Łódź');
  expect(data[4].data).toStrictEqual(truedata.data);
});

it('The historical weather data fail', async () => {
  try {
    await getHistoricData(0);
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe('We cannot find historical data for this location');
  }
});

import './App.css';
import CurrentLocationWeather from './components/CurrentLocationWeather';
import HistoricalWeather from './components/HistoricalWeather';
import Search from './components/Search';
import EnteredLocationWeather from './components/EnteredLocationWeather';
import { useState } from 'react';

function App() {
  const API_KEY = '74ddfdf0f4d0b4f342ed247bdf712670';
  const [currentTime, setCurrentTime] = useState(0);
  const [currentCityCoords, setCurrentCityCoords] = useState({longitude: 19.4508, latitude: 51.7981});
  const [enteredCityName, setEnteredCityName] = useState('');
  const [enteredCityCoords, setEnteredCityCoords] = useState();
  let toShow;

  if(enteredCityName !== '') {
    toShow = <>
              <EnteredLocationWeather
                currentTime={currentTime} 
                setCurrentTime={setCurrentTime} 
                currentCityCoords={currentCityCoords} 
                setCurrentCityCoords={setCurrentCityCoords}
                enteredCityName={enteredCityName}
                setEnteredCityName={setEnteredCityName}
                enteredCityCoords={enteredCityCoords}
                setEnteredCityCoords={setEnteredCityCoords}
                API_KEY={API_KEY}>
              </EnteredLocationWeather>
              <HistoricalWeather 
                currentTime={currentTime}
                currentCityCoords={enteredCityCoords}
                reverseColor={true}
                API_KEY={API_KEY}>
              </HistoricalWeather>
            </>
  }

  return (
    <div className='app-container'>
      <CurrentLocationWeather 
        currentTime={currentTime} 
        setCurrentTime={setCurrentTime} 
        currentCityCoords={currentCityCoords} 
        setCurrentCityCoords={setCurrentCityCoords}
        API_KEY={API_KEY}>  
      </CurrentLocationWeather>
      <HistoricalWeather 
        currentTime={currentTime}
        currentCityCoords={currentCityCoords}
        API_KEY={API_KEY}>
      </HistoricalWeather>
      <Search enteredCityName={enteredCityName} setEnteredCityName={setEnteredCityName}></Search>
      {toShow}
    </div>
  );
}

export default App;

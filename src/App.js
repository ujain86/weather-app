import React from 'react';
import {useEffect, useState} from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';


function App() {

  const [state, setState] = useState();
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [forecastData, setForecastData] = useState();

  useEffect(() => {

    const currentWeather = async() => {
      var url = "https://api.openweathermap.org/data/2.5/weather?q=" + state + "&units=metric&appid=3642bf26d9f65941c76bbfcda3aac69b";
      const response = await fetch(url);
      const JSONresponse = await response.json();
      setCurrentWeatherData(JSONresponse);
    }

    const forecast = async() => {
      var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + state + "&units=metric&appid=3642bf26d9f65941c76bbfcda3aac69b";
      const response = await fetch(url);
      const JSONresponse = await response.json();
      setForecastData(JSONresponse);
    }

    currentWeather();
    forecast();

  },[state]);

    
    

  return (
    <>
      <CurrentWeather currentWeatherData={currentWeatherData} state={state} setState={setState} />
      {forecastData?.list?<Forecast forecastData={forecastData} />:""}

    </>
  );
}

export default App;

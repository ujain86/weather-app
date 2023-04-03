import React from 'react';
import {useEffect, useState} from 'react';
import { Button } from "react-bootstrap";


function App() {

  const [state, setState] = useState();
  const [data, setData] = useState();

  useEffect(() => {

    const APIcall = async() => {
      var url = "https://api.openweathermap.org/data/2.5/weather?q=" + state + "&units=metric&appid=3642bf26d9f65941c76bbfcda3aac69b";
      const response = await fetch(url);
      const JSONresponse = await response.json();
      setData(JSONresponse);
    }

    APIcall();
  },[state]);

    
    const handleSubmit = (e) => {
    e.preventDefault();
    setState(e.target[0].value);
    }
    
    // console.log("data: "+ data?.main?.temp + "celcius");
    // console.log("icon" + data?.weather?.[0]?.icon);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text'/>
        <Button type='submit'>Search</Button>
      </form>
      {data?.main?.temp?
      <>
        <img src={"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png "} />
        <h1>{data.main.temp} Celcius</h1>
      </>
      :""}

    </>
  );
}

export default App;

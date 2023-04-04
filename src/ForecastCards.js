import React from 'react'

function ForecastCards(props) {

    const {forecastData, index} = props;
    var date = new Date(forecastData.dt * 1000);
    var temp = forecastData.main.temp;
    console.log("date: ", forecastData);
    var newDate = date.toString().slice(0, 24);


  return (
    <div>
        <h3>{temp} Celcius</h3>
        <h6>{newDate}</h6>
    </div>
  )
}

export default ForecastCards
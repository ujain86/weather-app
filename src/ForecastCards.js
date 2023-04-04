import React from 'react';
import {Col, Card} from 'react-bootstrap';

function ForecastCards(props) {

    const {forecastData, index} = props;
    var date = new Date(forecastData.dt * 1000);
    var temp = forecastData.main.temp;
    console.log("date: ", forecastData);
    var newDate = date.toString().slice(0, 24);
    console.log(forecastData.weather[0].icon);


  return (
    
        <Col lg={2} >
            <Card >
        
                <Card.Body>
                    {/* <Card.Title>Forecast</Card.Title> */}
                    <Card.Text>
                        <img src={"http://openweathermap.org/img/w/" + forecastData.weather[0].icon + ".png "} />
                        <h5>{temp} Celcius</h5> 
                        <h6>{newDate}</h6>    
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </Col>
        // {/* <img src={"http://openweathermap.org/img/w/" + forecastData.weather[0].icon + ".png"} />
        // <h3>{temp} Celcius</h3>
        // <h6>{newDate}</h6> */}
    
  )
}

export default ForecastCards
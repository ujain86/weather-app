import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import {useState} from 'react';

function CurrentWeather(props) {

    const currentWeatherData = props.currentWeatherData;
    const forecastData = props.forecastData;
    const state = props.state;
    const setState = props.setState;
    const timestamp = new Date(currentWeatherData?.dt * 1000);
    const newTimestamp = timestamp.toString();
    const currentDate = newTimestamp.slice(0,24);



    console.log(currentWeatherData);

    const handleSubmit = (e) => {
        e.preventDefault();
        setState(e.target[0].value);
    }
  
        
  return (
    <>
        <Container>
        <Row>
          <Col lg={12}>
            <div id="current-weather-card">
            <Card style={{ width: '100rem' }}>
              
              <Card.Body>
                <Card.Title>Current Weather</Card.Title>
                {currentWeatherData?.dt?<h6>{currentDate}</h6>:""}
                <Card.Text>
                {currentWeatherData?.main?.temp?
                  <>
                    <img src={"http://openweathermap.org/img/w/" + currentWeatherData.weather[0].icon + ".png "} />
                    <h1>{currentWeatherData.main.temp} Celcius</h1> 
                    <h3>{currentWeatherData.weather[0].description}</h3>
                    <h4>{currentWeatherData.name}</h4>
                  </>
                  :<h1>Enter a valid city name</h1>} 
                </Card.Text>

                <form onSubmit={handleSubmit}>
                  <input type='text' placeholder='Enter city name'/>
                  <Button type='submit' variant="outline-danger" size="lg">Search</Button>
                </form>
                
              </Card.Body>
            </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CurrentWeather;
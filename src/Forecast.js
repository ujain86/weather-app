import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import ForecastCards from './ForecastCards.js';

function Forecast(props) {

    const forecastData= props.forecastData; 

    var date = new Date(forecastData?.list?.[0].dt * 1000);
    // console.log(date);
    var array = [0,8,16,24,32];

    var forecastDataArray = forecastData?.list;
    // console.log(forecastDataArray);
  return (
    <>
        <Container>
            <Row>
                <Col lg={2}>
                    <Card >
                    
                        <Card.Body>
                            <Card.Title> 5 Day Forecast</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                   
                {array.map((item, i) => {
                    return <ForecastCards index={item} forecastData={forecastDataArray[item]} key={i} />
                })} 
            </Row>
        </Container>
    </>
  )
}

export default Forecast
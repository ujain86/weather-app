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
                <Col lg={12} >
                    <Card >
                
                        <Card.Body>
                            <Card.Title>Forecast</Card.Title>
                            {array.map((item, i) => {
                                return <ForecastCards index={item} forecastData={forecastDataArray[item]} key={i} />
                            })}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Forecast
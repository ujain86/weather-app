import React from 'react';
import {useEffect, useState} from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";


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
  

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <Card >
              
              <Card.Body>
                <Card.Title>Weather</Card.Title>
                <Card.Text>
                {data?.main?.temp?
                  <>
                    <img src={"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png "} />
                    <h1>{data.main.temp} Celcius</h1> 
                    <h3>{data.weather[0].description}</h3>
                  </>
                  :<h1>Enter a valid city name</h1>} 
                </Card.Text>

                <form onSubmit={handleSubmit}>
                  <input type='text' placeholder='Enter city name'/>
                  <Button type='submit' variant="outline-danger" size="lg"  >Search</Button>
                </form>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default App;

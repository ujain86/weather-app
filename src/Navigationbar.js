import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

function Navigationbar() {
  return (
    <Navbar bg="light" variant="light" id="navbar">
      <Container>
        <Navbar.Brand href="#">
          <img
            alt=""
            src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png  "
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <h4>Weather App</h4>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Navigationbar;
import React, { Component } from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import { NavLink } from "react-router-dom";
import './home.css';

class Home extends Component {

  render() {

    return (
      <div>
        <Container>
          <Row>
            <Col><h1>Home</h1></Col>
          </Row>
          <Row>
            <Col>
              <NavLink to="/music">
                <Button size="lg">Music</Button>
              </NavLink>
            </Col>
            <Col>
              <NavLink to="prime">
                <Button size="lg">Prime</Button>
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/graph">
                <Button size="lg">Graph</Button>
              </NavLink>
            </Col>
          </Row>
        </Container>
      </div>
      
      
    );
  }
}

export default Home;

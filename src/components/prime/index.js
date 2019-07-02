import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Button, Input } from 'reactstrap';
import './prime.css';

class Prime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prime: null,
      nbrPrime: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSublit = this.handleSubmit.bind(this);
    this.isPrime = this.isPrime.bind(this);
  }

  isPrime(number) { 
    if (number<2) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) 
        if (number % i == 0) return false;

    return true;
  }

  handleSubmit = () => {
    let counter = 0;
    let nbr = 1;
    let nbrPrime = 0;
    while (counter < this.state.prime) {
      let i = this.isPrime(nbr)
      if (i == false) {
        nbr++
      }
      else {
        counter++;
        nbrPrime = nbr
        nbr++
      }
    }
    
    this.setState({
      nbrPrime
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  render() {

    return (
      <div>
        <Container>
          <Row>
            <Col><h1>Prime</h1></Col>
          </Row>
          <Row>
            <Col>
                <Input type="text" name="prime" id="prime" placeholder="Nième nombre premier" onChange={this.handleInputChange} />
                  
            </Col>
            <Col>
                <Button onClick={this.handleSubmit}>chercher</Button>
            </Col>
          </Row>
          <Row>
            <Col><p>Le {this.state.prime} ème nombre premier est {this.state.nbrPrime}</p></Col>
          </Row>
        </Container>
      </div>
      
    );
  }
}

export default Prime;

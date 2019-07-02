import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import * as d3 from "d3";
import Data from '../../assets/csv/data_graph.csv';
import './graph.css';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    d3.csv(Data)
      .then(this.loadData);
  }

  loadData = (data) => {
    this.setState({
      data: data
    });
    
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <Container>
          <Row>
            <Col><h1>Graph</h1></Col>
          </Row>
          <Row>
          <LineChart width={1200} height={600} data={data}>
            <Legend verticalAlign="top" height={36}/>
            <Line type="monotone" dataKey="credit" stroke="#8884d8" />
            <Line type="monotone" dataKey="debit" stroke="#FFA6FE" />
            <Line type="monotone" dataKey="balance" stroke="#FF9999" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date"/>
            <YAxis />
          </LineChart>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Graph;

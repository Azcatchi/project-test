import React, { Component } from "react";
import { Container, Row, Col, Table, Button } from 'reactstrap';

class Playlist extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.data}</td>
        <td><Button>Play</Button></td>
        <td><Button>Delete</Button></td>
      </tr>
      
    );
  }
}

export default Playlist;

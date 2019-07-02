import React, { Component } from "react";
import { Button } from 'reactstrap';

class Music extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data}</td>
        <td><Button>Play</Button></td>
        <td><Button>Add</Button></td>
      </tr>
      
    );
  }
}

export default Music;

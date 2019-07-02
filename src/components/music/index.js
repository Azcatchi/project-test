import React, { Component } from "react";
import { Container, Row, Col, Table } from 'reactstrap';
import Music from './music';
import Playlist from './music';
import ReactPlayer from 'react-player';
import './music.css';

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musics: [
        {name: "Believer", artist: "Imagine Dragons"},
        {name: "Demons", artist: "Imagine Dragons"},
        {name: "Pizza", artist: "Martin Garrix"},
        {name: "Remedy", artist: "Alesso"},
        {name: "Oracle", artist: "Timmy Trumpet"},
      ],
      playlist: []
    };

    this.playMusic = this.playMusic.bind(this);
  }

  playMusic = (music) => {
    let newPlaylist = this.state.playlist;
    newPlaylist.push(music)
    this.setState({
      playlist: newPlaylist
    });
  }

  render() {

    return (
      <div>
        <Container>
          <Row>
            <Col><h1>Music</h1></Col>
          </Row>
          <Row>
            <Col>
              <h2>Liste des musiques</h2>
              <Table>
                <thead>
                  <tr>
                    <th>Music</th>
                    <th>Play</th>
                    <th>Add</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.musics.map( data => (
                      <Music data={data.name} playMusic={this.playMusic} key={data.name}/>
                    ))
                  }
                </tbody>
              </Table>
            </Col>
            <Col>
              <h2>Playlist</h2>
              <Table>
                <thead>
                  <tr>
                    <th>Music</th>
                    <th>Play</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                {
                    this.state.playlist.map( data => (
                      <Playlist data={data.name} key={data.name}/>
                    ))
                  }
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
      
    );
  }
}

export default Song;

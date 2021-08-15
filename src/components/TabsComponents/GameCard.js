import React, { Component } from 'react';
import '../App.scss';
import * as microsoftTeams from '@microsoft/teams-js';
import { Button } from 'react-bootstrap';
import axios from 'axios';
var key = require('../keys');

class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
    };
  }

  //React lifecycle method that gets called once a component has finished mounting
  //Learn more: https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {}
  render() {
    return (
      <section id="GameCard">
        <div className="GameCardContainer">
          <img
            className="GameImage"
            src={require('../../ImagesAndIcons/GameImage.png')}
          />
        </div>
      </section>
    );
  }
}

export default GameCard;

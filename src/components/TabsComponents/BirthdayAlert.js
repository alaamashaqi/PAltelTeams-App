import React, { Component } from 'react';
import '../App.scss';
import * as microsoftTeams from '@microsoft/teams-js';
import { Button, Modal } from 'react-bootstrap';

import axios from 'axios';
var key = require('../keys');

class BirthdayAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
    };
  }

  componentDidMount() {
    axios
      .get('https://graph.microsoft.com/v1.0/me/', {
        headers: { authorization: key.Tok },
      })
      .then((res) => {
        this.setState({ username: res.data.givenName });
      })
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <section id="BirthdayAlert">
        <div
          className="BirthdayAlert"
          style={{ marginLeft: window.innerWidth / 2.5 }}
        >
          <Modal.Dialog className="BirthdayAlertCard">
            <button className="BirthdayCloseButton">
              <img
                className="CloseButtonImage"
                src={require('../../ImagesAndIcons/CloseButton.png')}
              />
            </button>
            <Modal.Title className="BirthdayTiltle">Happy Birthday</Modal.Title>

            <Modal.Body>
              <h2 className="BirthdayBody">
                Blow out the candles and make a wish Don't forget to simile.
              </h2>
            </Modal.Body>
            <img
              className="BirdayImage"
              src={require('../../ImagesAndIcons/BirthdayImage.svg')}
            />
          </Modal.Dialog>
        </div>
      </section>
    );
  }
}

export default BirthdayAlert;

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
        <footer className="footer">
          <div className="SocialMediaContainer">
            <button
              className="SocialMediaButton"
              onClick={() =>
                window.open('https://www.facebook.com/paltel.970/')
              }
            >
              <img
                className="SocialMediaIcon"
                src={require('../../ImagesAndIcons/SocialMediaIcons/facebook.svg')}
              />
            </button>
            <button
              className="SocialMediaButton"
              onClick={() => window.open('https://twitter.com/paltelco')}
            >
              <img
                className="SocialMediaIcon"
                src={require('../../ImagesAndIcons/SocialMediaIcons/twitter.svg')}
              />
            </button>
            <button
              className="SocialMediaButton"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/company/paltel/mycompany/'
                )
              }
            >
              <img
                className="SocialMediaIcon"
                src={require('../../ImagesAndIcons/SocialMediaIcons/linkedin.svg')}
              />
            </button>

            <button
              className="SocialMediaButton"
              onClick={() =>
                window.open(
                  'https://www.youtube.com/channel/UC_5vUonyxW7xpMKseGioQPg'
                )
              }
            >
              <img
                className="SocialMediaIcon"
                src={require('../../ImagesAndIcons/SocialMediaIcons/youtube.svg')}
              />
            </button>
            <button
              className="SocialMediaButton"
              onClick={() => window.open('https://www.instagram.com/paltel/')}
            >
              <img
                className="SocialMediaIcon"
                src={require('../../ImagesAndIcons/SocialMediaIcons/instagram.svg')}
              />
            </button>
            <button
              className="SocialMediaButton"
              onClick={() => window.open('https://t.me/paltel00970')}
            >
              <img
                className="SocialMediaIcon"
                src={require('../../ImagesAndIcons/SocialMediaIcons/telegram.svg')}
              />
            </button>
            <button
              className="SocialMediaButton"
              onClick={() =>
                window.open('https://www.snapchat.com/add/paltel.ps')
              }
            >
              <img
                className="SocialMediaIcon"
                src={require('../../ImagesAndIcons/SocialMediaIcons/Snap.svg')}
              />
            </button>
          </div>
        </footer>
      </section>
    );
  }
}

export default GameCard;

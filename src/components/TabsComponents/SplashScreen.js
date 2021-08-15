import React, { Component } from 'react';
import '../App.scss';
import * as microsoftTeams from '@microsoft/teams-js';
import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Spring } from 'react-spring/renderprops';
import { Line } from 'rc-progress';

// import ProgressBar from '@ramonak/react-progress-bar';
import axios from 'axios';
var key = require('../keys');

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
      now: 4,
      im1: false,
      im2: false,
      im3: false,
      im4: false,
      im5: false,
      im6: false,
      im7: false,
      im8: false,
    };
  }

  Increase() {
    while (this.state.now != 100) {
      // setTimeout(() => {}, 10);
      this.setState({ now: (this.state.now += 1) });
    }
  }
  componentDidMount() {
    this.myTimer = setInterval(() => {
      this.setState((prevState) => ({ now: prevState.now + 1 }));
    }, 30);
  }
  render() {
    return (
      <section id="SplashScreen">
        <div className="SplashScreen">
          <div className="SplashIconContainer">
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 250,
                width: 500,
                height: 500,
              }}
            >
              <img
                style={{
                  paddingLeft: 20,
                  paddingTop: 22,
                }}
                src={require('../../ImagesAndIcons/SplashIcon.svg')}
              />
            </div>

            {this.state.now >= 10 ? (
              <div className="SplashScreenImageContainer1">
                <img
                  style={{ width: 150, height: 150, borderRadius: 80 }}
                  src={require('../../ImagesAndIcons/SplashScreenImages/Maen.jpeg')}
                />
              </div>
            ) : null}

            {this.state.now >= 20 ? (
              <div className="SplashScreenImageContainer2">
                <img
                  style={{ width: 90, height: 90, borderRadius: 80 }}
                  src={require('../../ImagesAndIcons/SplashScreenImages/Khaled.jpeg')}
                />
              </div>
            ) : null}

            {this.state.now >= 30 ? (
              <div className="SplashScreenImageContainer3">
                <img
                  style={{ width: 104, height: 104, borderRadius: 80 }}
                  src={require('../../ImagesAndIcons/SplashScreenImages/Suliman.jpeg')}
                />
              </div>
            ) : null}

            {this.state.now >= 40 ? (
              <div className="SplashScreenImageContainer4">
                <img
                  style={{ width: 74, height: 74, borderRadius: 80 }}
                  src={require('../../ImagesAndIcons/SplashScreenImages/jamal.jpeg')}
                />
              </div>
            ) : null}

            {this.state.now >= 50 ? (
              <div className="SplashScreenImageContainer5">
                <img
                  style={{ width: 64, height: 64, borderRadius: 80 }}
                  src={require('../../ImagesAndIcons/SplashScreenImages/Mohammad.jpeg')}
                />
              </div>
            ) : null}

            {this.state.now >= 60 ? (
              <div className="SplashScreenImageContainer6">
                <img
                  style={{ width: 108, height: 108, borderRadius: 80 }}
                  src={require('../../ImagesAndIcons/SplashScreenImages/Nizar.jpeg')}
                />
              </div>
            ) : null}
            {this.state.now >= 70 ? (
              <div className="SplashScreenImageContainer7">
                <img
                  style={{ width: 88, height: 88, borderRadius: 80 }}
                  src={require('../../ImagesAndIcons/SplashScreenImages/Zahi.jpeg')}
                />
              </div>
            ) : null}

            {this.state.now >= 80 ? (
              <div className="SplashScreenImageContainer8">
                <img
                  style={{ width: 73, height: 73, borderRadius: 80 }}
                  src={require('../../ImagesAndIcons/SplashScreenImages/Loay.jpeg')}
                />
              </div>
            ) : null}

            {this.state.now >= 90 ? (
              <div className="SplashScreenImageContainer9">
                <img
                  style={{ width: 93, height: 93, borderRadius: 80 }}
                  src={require('../../ImagesAndIcons/SplashScreenImages/Ibraheem.jpeg')}
                />
              </div>
            ) : null}
            {this.state.now >= 100 ? (
              <div className="SplashScreenImageContainer10">
                <img
                  style={{ width: 93, height: 93, borderRadius: 80 }}
                  src={require('../../ImagesAndIcons/SplashScreenImages/Mahmod.jpeg')}
                />
              </div>
            ) : null}
          </div>

          <div className="ProgressBarContainer">
            {/* <ProgressBar
              completed={this.state.now}
              width="762px"
              bgcolor="#00A0D7"
              height="12px"
            /> */}

            <Line
              percent={this.state.now}
              strokeWidth="1.5"
              trailWidth="1.5"
              strokeColor="#00A0D7"
              style={{ width: '700' }}
            />
          </div>

          {/* <img
            className="FifthImage"
            src={require('../../ImagesAndIcons/GameImage.png')}
          /> */}
        </div>
      </section>
    );
  }
}

export default SplashScreen;

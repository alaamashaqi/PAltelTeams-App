import React, { Component } from 'react';
import '../App.scss';
import * as microsoftTeams from '@microsoft/teams-js';
import axios from 'axios';
var key = require('../keys');

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
      src: '',
      username: '',
      Tempreture: '',
    };
  }

  /**
   * Calls the endpoint with authorization bearer token.
   * @param {string} endpoint
   * @param {string} accessToken
   */

  componentDidMount = () => {
    // Get the user context from Teams and set it in the state

    axios
      .get('https://graph.microsoft.com/v1.0/me/photo/$value', {
        responseType: 'blob',
        headers: { authorization: this.props.Key },
      })
      .then((res) => {
        var reader = new window.FileReader();
        reader.readAsDataURL(res.data);
        reader.onload = function () {
          var imageDataurl = reader.result;
          document
            .getElementById('imageElement')
            .setAttribute('src', imageDataurl);
        };
      })
      .catch((err) => console.error(err));

    axios
      .get(
        '  https://api.openweathermap.org/data/2.5/onecall?lat=32.225868&lon=35.254929&exclude=hourly,daily&appid=b5d7178863a084519044edf4389b4679'
      )
      .then((res) => {
        this.setState({
          Tempreture: Math.floor(res.data.current.temp - 273.15),
        });
      })
      .catch((err) => console.error(err));

    axios
      .get('https://graph.microsoft.com/v1.0/me/', {
        headers: { authorization: this.props.Key },
      })
      .then((res) => {
        this.setState({ username: res.data.givenName });
      })
      .catch((err) => console.error(err));

    microsoftTeams.getContext((context, error) => {
      this.setState({
        context: context,
      });
    });
    // Next steps: Error handling using the error object
  };
  render() {
    return (
      <section id="ProfileCard">
        <div
          style={{
            width: 642,
            height: 150,
            backgroundColor: '#464775',
            marginTop: 21,
            borderRadius: 30,
            borderWidth: 20,
            borderColor: 'red',
            flexDirection: 'row',
          }}
        >
          <img className="ProfileImage" id="imageElement" />
          <h2 className="UserName">Good Mornning, {this.state.username}</h2>
          <h2 className="Motivation">"DONT STOP UNTIL YOU'RE PROUD" </h2>
          <h2 className="Tempreture">{this.state.Tempreture}°</h2>
          <img
            className="Cloud"
            src={require('../../ImagesAndIcons/Cloudzap.svg')}
          />
        </div>
      </section>
    );
  }
}

export default ProfileCard;

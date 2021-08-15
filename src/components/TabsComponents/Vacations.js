import React, { Component } from 'react';
import '../App.scss';
import * as microsoftTeams from '@microsoft/teams-js';
import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
var key = require('../keys');

class Vacations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://graph.microsoft.com/beta/reports/getTeamsUserActivityUserDetail(period='D7')?$format=application/json",
        {
          headers: { authorization: key.Tok },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <section id="Vacations">
        <div className="GameCardContainer"></div>
      </section>
    );
  }
}

export default Vacations;

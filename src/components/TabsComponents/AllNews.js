import React, { Component } from 'react';
import '../App.scss';
import * as microsoftTeams from '@microsoft/teams-js';
import { Button } from 'react-bootstrap';
import Paltelnews from './Paltelnews';
import TechNews from './TechNews';
import axios from 'axios';
var key = require('../keys');

class AllNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
      showpaltelnews: true,
      showtechnews: false,
    };
  }

  ShowTechNews() {
    this.setState({ showtechnews: true });
    this.setState({ showpaltelnews: false });
  }
  ShowPaltelNews() {
    this.setState({ showpaltelnews: true });
    this.setState({ showtechnews: false });
  }
  componentDidMount() {}
  render() {
    return (
      <section id="AllNews">
        <div className="AllNewsContainer">
          <div className="NextToEachotherContainer">
            <div className="PaltelNewsContainer">
              <button
                className="PaltelNewsButton"
                onClick={() => this.ShowPaltelNews()}
              >
                {this.state.showpaltelnews == true ? (
                  <div className="NewsHeaderContainerActive">
                    <h2 className="NewsHeaderActive">Paltel News</h2>
                  </div>
                ) : (
                  <div className="NewsHeaderContainerActive">
                    <h2 className="NewsHeaderNotActive">Paltel News</h2>
                  </div>
                )}
              </button>
            </div>

            <div className="TechNewsContainer">
              <button
                className="TechNewsButton"
                onClick={() => this.ShowTechNews()}
              >
                {this.state.showtechnews == true ? (
                  <div className="NewsHeaderContainerActive">
                    <h2 className="NewsHeaderActive">Tech News</h2>
                  </div>
                ) : (
                  <div className="NewsHeaderContainerActive">
                    <h2 className="NewsHeaderNotActive">Tech News</h2>
                  </div>
                )}
              </button>
            </div>
          </div>

          {this.state.showpaltelnews == true ? <Paltelnews /> : <TechNews />}
        </div>
      </section>
    );
  }
}

export default AllNews;

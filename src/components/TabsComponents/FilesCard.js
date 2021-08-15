import React, { Component } from 'react';
import '../App.scss';
import * as microsoftTeams from '@microsoft/teams-js';
import axios from 'axios';
var key = require('../keys');

class FilesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
      files: '',
      Num: 0,
      OneTaskFeild: false,
      TwoTasksFeild: false,
      ThreeTasksFeild: false,
      NoTaskFeild: false,
      Active: false,
      Dumy: false,
      Total: 0,
    };
  }

  NextButtonState() {
    if (this.state.files[this.state.Num + 3] != null) {
      this.setState({ Num: this.state.Num + 3 });
      this.setState({ Active: true });
    }
  }
  BackButtonState() {
    if (this.state.Num != 0) {
      this.setState({ Num: this.state.Num - 3 });

      if (this.state.Num - 3 == 0) {
        this.setState({ Active: false });
      }
    }
  }

  componentDidMount() {
    const Files = [...this.state.files];

    axios
      .get('https://graph.microsoft.com/v1.0/me/drive/recent', {
        headers: { authorization: this.props.Key },
      })
      .then((res) => {
        this.setState({ Total: res.data.value.length });
        for (var i = 0; i < res.data.value.length; i++) {
          Files.push(res.data.value[i].name);
        }

        console.log(res.data.value.length);
        if (Files[0] != null && Files[1] != null && Files[2] != null)
          this.setState({ ThreeTasksFeild: true });
        if (Files[0] != null && Files[1] != null && Files[2] == null)
          this.setState({ TwoTasksFeild: true });
        if (Files[0] != null && Files[1] == null && Files[2] == null)
          this.setState({ OneTaskFeild: true });
      })
      .catch((err) => console.error(err));

    this.setState({ files: Files });
  }
  render() {
    return (
      <section id="FilesCard">
        <div className="PlannerInfo">
          <img
            className="FilesIcon"
            src={require('../../ImagesAndIcons/Files.svg')}
          />
          <h2 className="TitleText">Recent Files</h2>
          <div className="Files">
            <div className="SingleFile">
              <h2 className="FileTitle">{this.state.files[this.state.Num]}</h2>
              <h2 className="Team">
                {this.state.files[this.state.Num] != null
                  ? 'Workspace Team'
                  : null}
              </h2>
            </div>
            <div className="SingleFile">
              <h2 className="FileTitle">
                {this.state.files[this.state.Num + 1]}
              </h2>
              <h2 className="Team">
                {this.state.files[this.state.Num + 1] != null
                  ? 'Workspace Team'
                  : null}
              </h2>
            </div>
            <div className="SingleFile">
              <h2 className="FileTitle">
                {this.state.files[this.state.Num + 2]}
              </h2>
              <h2 className="Team">
                {this.state.files[this.state.Num + 2] != null
                  ? 'Workspace Team'
                  : null}
              </h2>
            </div>
          </div>
          <h2 className="ShowingFiles">
            Showing {this.state.Num} of {this.state.Total}
          </h2>
          <div className="NextButtonContainer">
            <button
              className="BackButtonFixed"
              onClick={() => this.BackButtonState()}
            >
              {this.state.Active == false ? (
                <img src={require('../../ImagesAndIcons/BackIconpng.png')} />
              ) : (
                <img src={require('../../ImagesAndIcons/ActiveBackIcon.png')} />
              )}
            </button>
            <button
              className="NextButton"
              onClick={() => this.NextButtonState()}
            >
              <img src={require('../../ImagesAndIcons/NextIcon.png')} />
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default FilesCard;

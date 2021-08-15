// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import './App.scss';
import * as microsoftTeams from '@microsoft/teams-js';
import ProfileCard from './TabsComponents/ProfileCard';
import TasksCard from './TabsComponents/TasksCard';
import FilesCard from './TabsComponents/FilesCard';
import Charts from './TabsComponents/Charts';
import PaltelStories from './TabsComponents/Stories';
import GameCard from './TabsComponents/GameCard';
import Paltelnews from './TabsComponents/Paltelnews';
import BirthdayAlert from './TabsComponents/BirthdayAlert';
import Footer from './TabsComponents/Footer';
import Vacations from './TabsComponents/Vacations';
import axios from 'axios';
import SplashScreen from './TabsComponents/SplashScreen';
import AllNews from './TabsComponents/AllNews';
import { EndlessGame, KartGame } from '../Game.js';
import './App.scss';
import SecondChart from './TabsComponents/SecondChart';
import Row from 'react-bootstrap/Row';
import QrCode from './TabsComponents/QrCode';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Configuration, PublicClientApplication } from '@azure/msal-browser';
import * as Msal from 'msal';

/**
 * The 'PersonalTab' component renders the main tab content
 * of your app.
 */
class Tab extends React.Component {
  token = '';
  constructor(props) {
    super(props);
    this.state = {
      context: {},
      show: true,
      Key: '',
      Show: false,
    };
    setTimeout(() => {
      this.setState({ show: true });
    }, 3500);
  }
  GetAcccessToken = async () => {
    const msalConfig = {
      auth: {
        clientId: '7f39add5-4ca4-406c-bbbe-54678a80078a',
        redirectUri: 'https://login.live.com/oauth20_desktop.srf',
        authority:
          'https://login.microsoftonline.com/73130763-7ae7-4405-954e-1c5a8d0aa6be',
      },
    };

    const msalApplication = new Msal.UserAgentApplication(msalConfig);

    const accessTokenRequest = {
      scopes: [
        'User.Read',
        'User.Read.All',
        'Files.Read.All',
        'Group.Read.All',
        'Group.ReadWrite.All',
        'Files.Read.All',
        'Files.ReadWrite.All',
      ],
    };
    const that = this;
    await msalApplication
      .loginPopup(accessTokenRequest)
      .then((loginResponse) => {
        alert('id_token acquired at: ' + new Date().toString());
        console.log(loginResponse);
        if (msalApplication.getAccount()) {
          msalApplication
            .acquireTokenSilent(accessTokenRequest)
            .then((tokenResponse) => {
              let accessToken = tokenResponse.accessToken;
              console.log('Welcome');
              console.log(accessToken);
              that.setState({ Key: accessToken });
              that.setState({ Show: true });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // await msalApplication
    //   .acquireTokenSilent(accessTokenRequest)
    //   .then((tokenResponse) => {
    //     let accessToken = tokenResponse.accessToken;
    //     console.log('Welcome');
    //     console.log(accessToken);
    //     that.setState({ Key: accessToken });
    //     that.setState({ Show: true });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  componentDidMount = async () => {
    await this.GetAcccessToken();
  };

  render() {
    return (
      <body>
        <div>
          {/* <Vacations /> */}
          {this.state.Show == false ? (
            <SplashScreen />
          ) : (
            <Container>
              <Row>
                <Col lg="8">
                  <ProfileCard Key={this.state.Key} />
                </Col>
                <Col lg="1">
                  <PaltelStories />
                </Col>
              </Row>
              <Row>
                <Col lg="7" className="LeftMargin">
                  <KartGame className="ColumnSize" />
                </Col>
                <Col lg="3" className="test">
                  <TasksCard Key={this.state.Key} />
                  <FilesCard Key={this.state.Key} />
                </Col>
              </Row>
              <Row>
                <Col lg="7">
                  <AllNews />
                </Col>
                <Col lg="3" className="together">
                  <Charts />
                  <SecondChart />
                </Col>
              </Row>
            </Container>
          )}
        </div>
      </body>
    );
  }
}
export default Tab;

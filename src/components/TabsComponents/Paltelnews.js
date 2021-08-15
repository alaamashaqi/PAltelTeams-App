import React, { Component } from 'react';
import '../App.scss';
import * as microsoftTeams from '@microsoft/teams-js';
import { Card, Button } from 'react-bootstrap';

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
        <div className="AddsContainer">
          <div className="SingleAdd">
            <div className="AddImage">
              <img
                className="NewsImage"
                src={require('../../ImagesAndIcons/PaltelNewsTest1.jpg')}
              />
            </div>
            <div className="AddDetails">
              <h2 className="DetailsText">
                ورشة عمل حول استراتيجيات إدارة الحدث مع الخبيرة "أيدينا" مديرة
                التسويق في شركة الاتصالات التركية
              </h2>
            </div>
          </div>
          <div className="SingleAdd">
            <a
              href="https://www.paltel.ps/index.php?url=posts/view/2662/"
              target="_blank"
              className="Links"
            >
              <div className="AddImage">
                <img
                  className="NewsImage"
                  src={require('../../ImagesAndIcons/ArabBank.png')}
                />
              </div>

              <div className="AddDetails">
                <h2 className="DetailsText">
                  البنك الإسلامي الفلسطيني وبالتل يوقعان اتفاقية شراكة
                  استراتيجية ICT وخدمات استضافة
                </h2>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default GameCard;

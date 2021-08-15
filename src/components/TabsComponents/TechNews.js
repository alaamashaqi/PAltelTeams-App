import React, { Component } from 'react';
import '../App.scss';
import * as microsoftTeams from '@microsoft/teams-js';
import { Card, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
var key = require('../keys');

class TechNews extends Component {
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
      <section id="TechNews">
        <div className="AddsContainer">
          <div className="SingleAdd">
            <a
              href="https://aitnews.com/2021/03/18/%d9%81%d9%8a%d8%b3%d8%a8%d9%88%d9%83-%d8%aa%d8%b7%d9%88%d8%b1-%d8%b3%d9%88%d8%a7%d8%b1-%d9%8a%d8%b3%d8%aa%d9%81%d9%8a%d8%af-%d9%85%d9%86-%d8%a7%d9%84%d8%ac%d9%87%d8%a7%d8%b2-%d8%a7%d9%84%d8%b9%d8%b5/"
              target="_blank"
              className="Links"
            >
              <div className="AddImage">
                <img
                  className="NewsImage"
                  src={require('../../ImagesAndIcons/Tech News.png')}
                />
              </div>
              <div className="AddDetails">
                <h2 className="DetailsText">
                  تقرير جديد من سيسكو يؤكد نمو مشاريع التحول الرقمي بمقدار 3
                  أضعاف خلال كوفيد 19
                </h2>
              </div>
            </a>
          </div>

          <div className="SingleAdd">
            <a
              href="https://aitnews.com/2021/03/18/%d9%81%d9%8a%d8%b3%d8%a8%d9%88%d9%83-%d8%aa%d8%b7%d9%88%d8%b1-%d8%b3%d9%88%d8%a7%d8%b1-%d9%8a%d8%b3%d8%aa%d9%81%d9%8a%d8%af-%d9%85%d9%86-%d8%a7%d9%84%d8%ac%d9%87%d8%a7%d8%b2-%d8%a7%d9%84%d8%b9%d8%b5/"
              target="_blank"
              className="Links"
            >
              <div className="AddImage">
                <img
                  className="NewsImage"
                  src={require('../../ImagesAndIcons/TeachNews2.png')}
                />
              </div>
              <div className="AddDetails">
                <h2 className="DetailsText">
                  فيسبوك تطور سوار يستفيد من الجهاز العصبي وتستخدم مزيجًا من
                  الذكاء الاصطناعي
                </h2>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default TechNews;

import React, { Component } from 'react';
import '../App.scss';
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';

import * as microsoftTeams from '@microsoft/teams-js';
import axios from 'axios';
var key = require('../keys');

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
    };
  }

  //   chartDom = document.getElementById('main');
  //   myChart = echarts.init(this.chartDom);
  option = {
    title: [
      {
        left: 'center',
        text: 'Cafeteria balance',
        top: '3%',
      },
    ],
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
      type: 'category',
      data: ['Dec', 'Jan', 'Feb', 'Mar'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [
          {
            value: 355,
            itemStyle: {
              color: '#f54197',
            },
          },
          {
            value: 243,
            itemStyle: {
              color: '#FFEA22',
            },
          },
          {
            value: 350,
            itemStyle: {
              color: '#00a0d7',
            },
          },
          35,
        ],
        type: 'bar',
      },
    ],
  };

  //React lifecycle method that gets called once a component has finished mounting
  //Learn more: https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    // this.option && this.myChart.setOption(this.option);
  }
  render() {
    return (
      <section id="Charts">
        <ReactEcharts className="charts" id="main" option={this.option} />
      </section>
    );
  }
}

export default Charts;

import React, { Component } from 'react';
import '../App.scss';
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';

import * as microsoftTeams from '@microsoft/teams-js';
import axios from 'axios';
var key = require('../keys');

class SecondChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
    };
  }

  option = {
    title: [
      {
        left: 'center',
        text: 'Vacations',
      },
    ],
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '8%',
      left: 'center',
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: true,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },

        data: [
          { value: 20, name: '14 Days' },
          { value: 10, name: '5 Days' },
          { value: 30, name: '19 Days' },
        ],
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
        <ReactEcharts className="Secondchart" id="main" option={this.option} />
      </section>
    );
  }
}

export default SecondChart;

import React, { Component } from 'react';
import '../App.scss';
import * as microsoftTeams from '@microsoft/teams-js';
import axios from 'axios';
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
var key = require('../keys');

class ProductivityChart1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
    };
  }
  option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      showContent: false,
    },
    dataset: {
      source: [
        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['DCX', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
        ['Marketing', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
        ['NOC', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
        ['IT', 25.2, 37.1, 41.2, 18, 33.9, 49.1],
      ],
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },

    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' },
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '25%',
        center: ['50%', '35%'],
        emphasis: { focus: 'data' },
        label: {
          formatter: '{b}: {@2012} ({d}%)',
        },
        encode: {
          itemName: 'product',
          value: '2012',
          tooltip: '2012',
        },
      },
    ],
  };

  option2 = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: [
        'rose1',
        'rose2',
        'rose3',
        'rose4',
        'rose5',
        'rose6',
        'rose7',
        'rose8',
      ],
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: [10, 90],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 4,
        },
        data: [
          { value: 30, name: 'DCX' },
          { value: 28, name: 'IT' },
          { value: 26, name: 'NOC' },
          { value: 24, name: 'Marketing' },
          { value: 22, name: 'Incedents' },
          { value: 20, name: 'Feilds' },
          { value: 18, name: 'CustomerX' },
          { value: 16, name: 'New Team' },
        ],
      },
    ],
  };

  //React lifecycle method that gets called once a component has finished mounting
  //Learn more: https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {}
  render() {
    return (
      <section id="ProductivityChart1">
        <div className="ChartsContainer">
          <div className="ProductivityChart1">
            <ReactEcharts
              className="Productivity_charts"
              id="main"
              option={this.option}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default ProductivityChart1;

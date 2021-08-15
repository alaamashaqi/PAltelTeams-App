import React, { Component } from 'react';
import './ProductivityStyle.scss';
import * as microsoftTeams from '@microsoft/teams-js';

import axios from 'axios';
import PTable from './ProductivityComponenets/PTable';
import ProductivtyChart1 from './ProductivityComponenets/ProductivtyChart1';
var key = require('./keys');

class Productivity extends Component {
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
      <div className="ProductivityContainer">
        <PTable />
        <ProductivtyChart1 />
      </div>
    );
  }
}

export default Productivity;

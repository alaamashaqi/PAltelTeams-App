import React, { Component } from 'react';
import '../ProductivityStyle.scss';
import * as microsoftTeams from '@microsoft/teams-js';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';

var key = require('../keys');

class PTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
      ShowTasksTable: false,
    };
  }

  TableData() {
    if (this.state.ShowTasksTable == true) return this.data;
    else return this.Tasksdata;
  }

  Tasksdata = {
    columns: [
      {
        label: 'TaskTitle',
        field: 'tasktitle',
        sort: 'asc',
        width: 150,
      },

      {
        label: 'CheckList',
        field: 'checklist',
        sort: 'asc',
        width: 200,
      },

      {
        label: 'Start date',
        field: 'startdate',
        sort: 'asc',
        width: 10,
      },
      {
        label: 'End Date',
        field: 'enddate',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 100,
      },
    ],
    rows: [],
  };
  //React lifecycle method that gets called once a component has finished mounting
  //Learn more: https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {}
  render() {
    return (
      <div className="PTableStyle">
        {this.state.ShowTasksTable == true ? (
          <div>
            <MDBDataTable
              className="MDBDataTable"
              striped={true}
              bordered={true}
              responsive={true}
              small={true}
              data={this.Tasksdata}
              scrollY
              btn={true}
              maxHeight={180}
            />
            <Button
              className="BackButton"
              variant="primary"
              onClick={() => this.setState({ ShowTasksTable: false })}
            >
              <h1 className="PreviewText">Back</h1>
            </Button>
          </div>
        ) : (
          <MDBDataTable
            className="MDBDataTable"
            striped={true}
            bordered={true}
            responsive={true}
            small={true}
            data={this.data}
            scrollY
            btn={true}
            maxHeight={170}
          />
        )}
      </div>
    );
  }
}

export default PTable;

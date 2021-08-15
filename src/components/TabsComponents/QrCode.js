import React, { Component } from 'react';
import '../App.scss';
import * as microsoftTeams from '@microsoft/teams-js';
import { Button } from 'react-bootstrap';
import Modal from 'react-awesome-modal';
import axios from 'axios';
var QRCode = require('qrcode.react');

var key = require('../keys');

class QrCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  //React lifecycle method that gets called once a component has finished mounting
  //Learn more: https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {}
  render() {
    return (
      <section id="QrCode">
        <div>
          <button className="QrCodeBbutton" onClick={() => this.openModal()}>
            <img
              className="QrCodeImage"
              src={require('../../ImagesAndIcons/QrCode.svg')}
            />
          </button>
          <Modal
            visible={this.state.visible}
            width="403"
            height="403"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
          >
            <div>
              <QRCode
                value="https://teams.microsoft.com/_#/apps/9491cede-3d7d-4623-9222-c17b62ffa263/sections/index"
                size={400}
              />
            </div>
          </Modal>
        </div>
      </section>
    );
  }
}

export default QrCode;

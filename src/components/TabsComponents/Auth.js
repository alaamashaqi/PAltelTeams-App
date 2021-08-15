import axios from 'axios';

import { Configuration, PublicClientApplication } from '@azure/msal-browser';

class Auth {
  Token = '';
  constructor() {
    this.GetAcccessToken();
  }
  GetAcccessToken = () => {
    const msalConfig = {
      auth: {
        clientId: '7f39add5-4ca4-406c-bbbe-54678a80078a',
        redirectUri: 'https://cfb8a5fc50f7.ngrok.io/popping/gettoken',
        authority:
          'https://login.microsoftonline.com/73130763-7ae7-4405-954e-1c5a8d0aa6be',
      },
    };

    const msalApplication = new PublicClientApplication(msalConfig);

    const accessTokenRequest = {
      scopes: ['User.Read', 'User.Read.All'],
    };

    msalApplication
      .acquireTokenPopup(accessTokenRequest)
      .then(async function (accessTokenResponse) {
        // console.log('TTTTTTTTTTTT========>' + accessTokenResponse.accessToken);
        return accessTokenResponse.accessToken;
      })
      .catch((err) => alert(err));
  };
}

module.exports = Auth;

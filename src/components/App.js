// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import './App.scss';
import * as microsoftTeams from '@microsoft/teams-js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Privacy from './Privacy';
import TermsOfUse from './TermsOfUse';
import Tab from './Tab';
import Productivity from './Productivity';

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
function App() {
  // Initialize the Microsoft Teams SDK
  microsoftTeams.initialize();

  // Display the app home page hosted in Teams
  return (
    <Router>
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/termsofuse" component={TermsOfUse} />
      <Route exact path="/tab" component={Tab} />
      <Route exact path="/tab2" component={Productivity} />
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import AppContainer from 'containers/AppContainer';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={AppContainer}/>
      </Switch>
    );
  }
}

export default Routes;

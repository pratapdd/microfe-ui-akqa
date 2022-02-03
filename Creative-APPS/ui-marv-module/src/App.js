import { Route, Router, Switch } from 'react-router-dom';

import Marv from './components/Marv';
import React from 'react';

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Marv} />
        </Switch>
      </Router>
    </div>
  );
};

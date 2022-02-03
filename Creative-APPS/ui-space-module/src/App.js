import { Route, Router, Switch } from 'react-router-dom';

import Space from './components/Space';
import React from 'react';

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Space} />
        </Switch>
      </Router>
    </div>
  );
};

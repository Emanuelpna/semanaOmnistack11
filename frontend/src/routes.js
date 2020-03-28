import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Profile from './pages/Profile';
import Register from './pages/Register';
import NewIncident from './pages/NewIncident';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </Router>
  );
};

export default Routes;
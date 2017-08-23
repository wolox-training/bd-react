import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HOME, LOGIN } from '../constants/routes';

import './styles.css';
import Dashboard from './screens/dashboard';
import Login from './screens/login';

const App = () =>
  <div className="App">
    <Switch>
      <Route path={HOME} component={Dashboard} />
      <Route path={LOGIN} component={Login} />
    </Switch>
  </div>;

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import './styles.css';

const Dashboard = () =>
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>;

export default Dashboard;

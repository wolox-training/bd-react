import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import Detail from './screens/Detail';

import './styles.css';

const Dashboard = () =>
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/books/:id" component={Detail} />
    </Switch>
  </div>;

export default Dashboard;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HOME, BOOK } from '../../../constants/routes';

import Navbar from './components/Navbar';
import Home from './screens/Home';
import Detail from './screens/Detail';

import './styles.css';

const Dashboard = () =>
  <div>
    <Navbar />
    <Switch>
      <Route exact path={HOME} component={Home} />
      <Route path={`${BOOK}/:id`} component={Detail} />
    </Switch>
  </div>;

export default Dashboard;

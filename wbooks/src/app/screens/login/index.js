import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HOME } from '../../../constants/routes';

import LoginButton from './components/LoginButton';
import imgBooks from './assets/img-books.png';
import wbookLogo from './assets/wbooks_logo.svg';

import './styles.css';

const Login = () =>
  <div className="login">
    <Switch>
      <Route exact path={HOME} />
    </Switch>
    <div className="login-header">
      <img src={imgBooks} alt="imgBooks" />
      <img src={wbookLogo} alt="wbookLogo" />
    </div>
    <LoginButton />
  </div>;

export default Login;

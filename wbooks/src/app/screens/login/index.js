import React from 'react';

import LoginButton from './components/LoginButton';
import imgBooks from './assets/img-books.png';
import wbookLogo from './assets/wbooks_logo.svg';

import './styles.css';

const Login = () =>
  <div className="login">
    <div className="login-header">
      <img src={imgBooks} alt="imgBooks" />
      <img src={wbookLogo} alt="wbookLogo" />
    </div>
    <LoginButton />
  </div>;

export default Login;

import React from 'react';

import LoginForm from './components/LoginForm';
import imgBooks from './assets/img-books.png';
import wbookLogo from './assets/wbooks_logo.svg';

import './styles.css';

const Login = () =>
  <div className="login">
    <div className="login-header">
      <img src={imgBooks} alt="imgBooks" />
      <img src={wbookLogo} alt="wbookLogo" />
    </div>
    <LoginForm />
  </div>;

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';

import { HOME } from '../../../../../constants/routes';

import './styles.css';

const LoginButton = () =>
  <div className="login-button">
    <Link to={HOME}>
      <button>INGRESAR CON GOOGLE</button>
    </Link>
  </div>;

export default LoginButton;

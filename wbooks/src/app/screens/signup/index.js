import React from 'react';
import { Link } from 'react-router-dom';

import { LOGIN } from '../../../constants/routes';

import SignUpForm from './components/SignUpForm';
import imgBooks from './assets/img-books.png';
import wbookLogo from './assets/wbooks_logo.svg';

import './styles.css';

const SignUp = () =>
  <div className="signup">
    <div className="signup-header">
      <img src={imgBooks} alt="imgBooks" />
      <img src={wbookLogo} alt="wbookLogo" />
    </div>
    <SignUpForm />
    <Link to={LOGIN}>
      <div className="nav-back">
        <span>&lt; Volver</span>
      </div>
    </Link>
  </div>;

export default SignUp;

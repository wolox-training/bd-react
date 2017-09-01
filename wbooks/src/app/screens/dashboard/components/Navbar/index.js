import React from 'react';
import { Link } from 'react-router-dom';

import { HOME, LOGIN } from '../../../../../constants/routes'

import logoSvg from './assets/wbooks_logo.svg';
import userPicturePng from './assets/user_picture.png';
import notificationSvg from './assets/notifications.svg';
import addBookSvg from './assets/add_book.svg';
import './styles.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to={HOME}>
          <img src={logoSvg} alt="logo" />
        </Link>
      </div>
      <div className="navbar-buttons">
        <img src={notificationSvg} alt="notificationSvg" />
        <img src={addBookSvg} alt="addBookSvg" />
        <img src={userPicturePng} alt="userPicturePng" />
      </div>
    </div>
  );
};

export default Navbar;

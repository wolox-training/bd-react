import React from 'react';
import { Link } from 'react-router-dom';

import { HOME, LOGIN } from '../../../../../constants/routes'

import iconPng from './assets/icon.png';
import userPicturePng from './assets/user_picture.png';
import notificationSvg from './assets/notifications.svg';
import addBookSvg from './assets/add_book.svg';
import './styles.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={HOME}>
        <div className="navbar-logo">
          <img src={iconPng} alt="iconPng" />
          <img src="#" alt="logo" />
        </div>
      </Link>
      <div className="navbar-buttons">
        <img src={notificationSvg} alt="notificationSvg" />
        <img src={addBookSvg} alt="addBookSvg" />
        <img src={userPicturePng} alt="userPicturePng" />
      </div>
    </div>
  );
};

export default Navbar;

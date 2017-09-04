import React from 'react';
import { Link } from 'react-router-dom';

import { HOME, LOGIN } from '../../../../../constants/routes';
import userActions from '../../../../../redux/userAction/actions';

import logoSvg from './assets/wbooks_logo.svg';
import userPicturePng from './assets/user_picture.png';
import notificationSvg from './assets/notifications.svg';
import addBookSvg from './assets/add_book.svg';
import './styles.css';

class Navbar extends React.Component {
  state = {
    profileDropdown: false
  };

  handleClick = () => {
    this.setState({ profileDropdown: !this.state.profileDropdown });
  };

  closeSession = () => {
    this.props.dispatch(userActions.logoutUser());
  };

  render() {
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
          <div className="dropdown-profile">
            <button className="dropdown-button" onClick={this.handleClick}>
              <img src={userPicturePng} alt="userPicturePng" />
            </button>
            {this.state.profileDropdown
              ? <div className={'dropdown-profile-content'}>
                  <a href="">Perfil</a>
                  <Link to={LOGIN} onClick={this.closeSession}>
                    <p>Cerrar Sesión</p>
                  </Link>
                </div>
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

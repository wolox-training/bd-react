import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { SIGNUP } from '../../../../../constants/routes';
import userActions from '../../../../../redux/userAction/actions';

import './styles.css';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(userActions.loginUser(this.state.email, this.state.password));
  };

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            value={this.state.value}
            onChange={this.handleEmailChange}
            placeholder="Correo electronico..."
            required
          />
          <input
            type="password"
            value={this.state.value}
            onChange={this.handlePasswordChange}
            placeholder="Contraseña"
            required
          />
          <button type="submit">Iniciar Sesion</button>
          <Link to={SIGNUP}>
            <div className="nav-signup">
              <span>Registrarse</span>
            </div>
          </Link>
        </form>
      </div>
    );
  }
}

export default connect()(LoginForm);

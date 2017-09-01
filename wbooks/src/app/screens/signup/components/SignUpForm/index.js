import React from 'react';
import { connect } from 'react-redux';

import userActions from '../../../../../redux/userAction/actions';

import './styles.css';

class SignUpForm extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleConfirmPasswordChange = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  handleFirstNameChange = event => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameChange = event => {
    this.setState({ lastName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      const body = {
        user: {
          email: this.state.email,
          password: this.state.password,
          confirm_password: this.state.confirmPassword,
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          locale: 'en'
        }
      };

      this.props.dispatch(userActions.signupUser(body));
    }
  };

  render() {
    return (
      <div className="singup-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            value={this.state.value}
            onChange={this.handleEmailChange}
            placeholder="Correo electronico"
            required
          />
          <input
            type="password"
            value={this.state.value}
            onChange={this.handlePasswordChange}
            placeholder="Contraseña"
            required
          />
          <input
            type="password"
            value={this.state.value}
            onChange={this.handleConfirmPasswordChange}
            placeholder="Confirmar contraseña"
            required
          />
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleFirstNameChange}
            placeholder="Nombre"
            required
          />
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleLastNameChange}
            placeholder="Apellido"
            required
          />
          <button type="submit">Registrar</button>
        </form>
      </div>
    );
  }
}

export default connect()(SignUpForm);

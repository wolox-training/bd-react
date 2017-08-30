import UserService from '../../app/services/UserService';
import history from '../../history';

export const actionNames = {
  LOGIN_USER: '@@USER/LOGIN_USER'
};

const actionCreators = {
  loginUser(user, password) {
    return async dispatch => {
      // TODO: Loading if necessary
      dispatch({ type: actionNames.LOGIN_USER });
      const response = await UserService.loginUser(user, password);
      if (response.ok) {
        sessionStorage.setItem('token', response.data.access_token);
        history.push('/home');
      } else {
        // eslint-disable-next-line no-alert
        alert(response.problem);
      }
    };
  }
};

export default actionCreators;

import UserService from '../../app/services/UserService';
import history from '../../history';

export const actionNames = {
  LOGIN_USER: '@@USER/LOGIN_USER',
  GET_CURRENT_USER_SUCCESSFUL: '@@USER/GET_CURRENT_USER_SUCCESSFUL',
  SIGNUP_USER: '@@USER/SIGNUP_USER'
};

const actionCreators = {
  loginUser(user, password) {
    return async dispatch => {
      // TODO: Loading if necessary
      dispatch({ type: actionNames.LOGIN_USER });
      const response = await UserService.loginUser(user, password);
      if (response.ok) {
        sessionStorage.setItem('token', response.data.access_token);
        UserService.setToken(response.data.access_token);
        dispatch(actionCreators.getCurrentUser());
        history.push('/home');
      } else {
        // eslint-disable-next-line no-alert
        alert(response.problem);
      }
    };
  },
  signupUser(body) {
    return async dispatch => {
      dispatch({ type: actionNames.SIGNUP_USER });
      const response = await UserService.signupUser(body);
      if (response.ok) {
        history.push('/');
      } else {
        // eslint-disable-next-line no-alert
        alert(response.problem);
      }
    };
  },
  logoutUser() {
    localStorage.removeItem('token');
  },
  getCurrentUser() {
    return async dispatch => {
      const response = await UserService.getCurrentUser();
      if (response.ok) {
        dispatch({ type: actionNames.GET_CURRENT_USER_SUCCESSFUL, payload: { currentUser: response.data } });
      }
    };
  }
};

export default actionCreators;

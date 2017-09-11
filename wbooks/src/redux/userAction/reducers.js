import { actionNames } from './actions';

const initialState = {
  currentUser: null
};

const userAction = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.GET_CURRENT_USER_SUCCESSFUL:
      return {
        ...state,
        currentUser: action.payload.currentUser
      };
    default:
      return state;
  }
};

export default userAction;

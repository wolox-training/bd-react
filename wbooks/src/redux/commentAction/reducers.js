import { actionNames } from './actions';

const initialState = {
  commentList: []
};

const commentAction = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.GET_COMMENTS_SUCCESFULL:
      return {
        ...state,
        commentList: action.payload.comments
      };
    case actionNames.GET_COMMENTS_FAILURE:
      return {
        state
      };
    default:
      return state;
  }
};

export default commentAction;

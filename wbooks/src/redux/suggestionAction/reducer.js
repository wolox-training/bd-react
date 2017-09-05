import { actionNames } from './actions';

const initialState = {
  suggestionList: []
};

const suggestionAction = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.GET_SUGGESTION_SUCCESFULL:
      return {
        ...state,
        suggestionList: action.payload.suggestions.slice(0, 4)
      };
    case actionNames.GET_SUGGESTION_FAILURE:
      return {
        state
      };
    default:
      return state;
  }
};

export default suggestionAction;

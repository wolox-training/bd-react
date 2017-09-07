import SuggestionService from '../../app/services/SuggestionService';

export const actionNames = {
  GET_SUGGESTION_LIST: '@@/SUGGESTION/GET_SUGGESTION_LIST',
  GET_SUGGESTION_SUCCESFUL: '@@/SUGGESTION/GET_SUGGESTION_SUCCESFUL',
  GET_SUGGESTION_FAILURE: '@@/SUGGESTION/GET_SUGGESTION_FAILURE'
};

const actionCreators = {
  getSuggestionList() {
    return async (dispatch, getState) => {
      const currentBookId = getState().book.bookDetail.id;
      const response = await SuggestionService.getSuggestionList(currentBookId);
      if (response.ok) {
        dispatch({ type: actionNames.GET_SUGGESTION_SUCCESFUL, payload: { suggestions: response.data } });
      } else {
        dispatch({ type: actionNames.GET_SUGGESTION_FAILURE });
        // eslint-disable-next-line no-alert
        alert(response.problem);
      }
    };
  }
};

export default actionCreators;

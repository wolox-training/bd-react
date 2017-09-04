import CommentService from '../../app/services/CommentService';

export const actionNames = {
  GET_COMMENTS: '@@COMMENT/GET_COMMENTS',
  GET_COMMENTS_SUCCESFULL: '@@COMMENT/GET_COMMENTS_SUCCESFULL',
  GET_COMMENTS_FAILURE: '@@COMMENT/GET_COMMENTS_FAILURE'
};

const actionCreators = {
  getComments(bookId) {
    return async dispatch => {
      dispatch({ type: actionNames.GET_COMMENTS });
      const response = await CommentService.getComments(bookId);
      if (response.ok) {
        dispatch({ type: actionNames.GET_COMMENTS_SUCCESFULL, payload: { comments: response.data } });
      } else {
        dispatch({ type: actionNames.GET_COMMENTS_FAILURE });
      }
    };
  }
};

export default actionCreators;

import CommentService from '../../app/services/CommentService';

export const actionNames = {
  GET_COMMENTS: '@@COMMENT/GET_COMMENTS',
  GET_COMMENTS_SUCCESFULL: '@@COMMENT/GET_COMMENTS_SUCCESFULL',
  GET_COMMENTS_FAILURE: '@@COMMENT/GET_COMMENTS_FAILURE',
  POST_COMMENT: '@@COMMENT/POST_COMMENT',
  POST_COMMENT_SUCCESFULL: '@COMMENT/POST_COMMENT_SUCCESFULL',
  POST_COMMENT_FAILURE: '@COMMENT/POST_COMMENT_FAILURE'
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
  },
  postComment(content) {
    return async (dispatch, getState) => {
      const currentUserId = getState().user.currentUser.id;
      const currentBookId = getState().book.bookDetail.id;
      dispatch({ type: actionNames.POST_COMMENT });
      const response = await CommentService.postComment(currentUserId, currentBookId, content);
      if (response.ok) {
        dispatch({ type: actionNames.POST_COMMENT_SUCCESFULL });
        dispatch(actionCreators.getComments(currentBookId));
      } else {
        dispatch({ type: actionNames.POST_COMMENT_FAILURE });
        // eslint-disable-next-line no-alert
        alert(response.problem);
      }
    };
  }
};

export default actionCreators;

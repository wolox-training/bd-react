import CommentService from '../../app/services/CommentService';

export const actionNames = {
  GET_COMMENTS: '@@COMMENT/GET_COMMENTS',
  GET_COMMENTS_SUCCESFUL: '@@COMMENT/GET_COMMENTS_SUCCESFULL',
  GET_COMMENTS_FAILURE: '@@COMMENT/GET_COMMENTS_FAILURE',
  POST_COMMENT: '@@COMMENT/POST_COMMENT',
  POST_COMMENT_FINISHED: '@COMMENT/POST_COMMENT_FINISHED'
};

const privateActionCreators = {
  getCommentsSuccesful(data) {
    return { type: actionNames.GET_COMMENTS_SUCCESFUL, payload: { comments: data } };
  },
  getCommentsFailure() {
    return { type: actionNames.GET_COMMENTS_FAILURE };
  },
  postCommentFinished() {
    return { type: actionNames.POST_COMMENT_FINISHED };
  }
};

const actionCreators = {
  getComments(bookId) {
    return async dispatch => {
      const response = await CommentService.getComments(bookId);
      if (response.ok) {
        dispatch(privateActionCreators.getCommentsSuccesful(response.data));
      } else {
        dispatch(actionCreators.getCommentsFailure());
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
        dispatch(privateActionCreators.postCommentFinished());
        dispatch(actionCreators.getComments(currentBookId));
      } else {
        dispatch(privateActionCreators.postCommentFinished());
        // TODO: Handle problems.
        // eslint-disable-next-line no-alert
        alert(response.problem);
      }
    };
  }
};

export default actionCreators;

import { actionNames } from './actions';

const initialState = {
  commentList: [],
  commentLoading: false
};

const commentCompare = (date1, date2) => {
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
};

const commentAction = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.GET_COMMENTS_SUCCESFUL:
      return {
        ...state,
        commentList: action.payload.comments.sort((comment, anotherComment) => commentCompare(comment.created_at, anotherComment.created_at)).slice(0, 4)
      };
    case actionNames.GET_COMMENTS_FAILURE:
      return state;
    case actionNames.POST_COMMENT:
      return {
        ...state,
        commentLoading: true
      };
    case actionNames.POST_COMMENT_FINISHED:
      return {
        ...state,
        commentLoading: false
      };
    default:
      return state;
  }
};

export default commentAction;

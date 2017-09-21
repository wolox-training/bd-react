import BookServices from '../../app/services/BookService';

export const actionNames = {
  GET_BOOK_DETAIL: '@@BOOK/GET_BOOK_DETAIL',
  GET_BOOKS: '@@BOOK/GET_BOOKS',
  GET_BOOKS_SUCCESFUL: '@@BOOK/GET_BOOKS_SUCCESFULL',
  GET_BOOKS_FAILURE: '@@BOOK/GET_BOOKS_FAILURE',
  BOOK_FILTER: '@@BOOK/BOOK_FILTER',
  GET_RENT_STATUS: '@@BOOK/GET_RENT_STATUS',
  GET_RENT_STATUS_SUCCESFUL: '@@BOOK/GET_RENT_STATUS_SUCCESFULL',
  GET_RENT_STATUS_FAILURE: '@@BOOK/GET_RENT_STATUS_FAILURE',
  POST_WISHLIST: '@@BOOK/POST_WISHLIST',
  POST_WISHLIST_FINISHED: '@@BOOK/POST_WISHLIST_FINISHED'
};

const privateActionCreators = {
  postWishlistFinished() {
    return { type: actionNames.POST_WISHLIST_FINISHED };
  }
};

const actionCreators = {
  getBookDetail(bookId) {
    return { type: actionNames.GET_BOOK_DETAIL, payload: { bookId } };
  },
  getBooks() {
    return async dispatch => {
      dispatch({ type: actionNames.GET_BOOKS });
      const response = await BookServices.getBooks();
      if (response.ok) {
        dispatch({ type: actionNames.GET_BOOKS_SUCCESFUL, payload: { books: response.data } });
      } else {
        dispatch({ type: actionNames.GET_BOOKS_FAILURE });
        // eslint-disable-next-line no-alert
        alert(response.problem);
      }
    };
  },
  bookFilter(value) {
    return { type: actionNames.BOOK_FILTER, payload: { value } };
  },
  getRentStatus() {
    return async (dispatch, getState) => {
      const currentBookId = getState().book.bookDetail.id;
      const currentUserId = getState().user.currentUser.id;
      const response = await BookServices.getRentStatus(currentBookId);
      if (response.ok) {
        dispatch({ type: actionNames.GET_RENT_STATUS_SUCCESFUL, payload: { status: response.data, currentUserId } });
      } else {
        dispatch({ type: actionNames.GET_RENT_STATUS_FAILURE });
      }
    };
  },
  postWishlist() {
    return async (dispatch, getState) => {
      const currentUserId = getState().user.currentUser.id;
      const currentBookId = getState().book.bookDetail.id;
      const response = await BookServices.postWishlist(currentUserId, currentBookId);
      dispatch({ type: actionNames.POST_WISHLIST });
      if (response.ok) {
        dispatch(privateActionCreators.postWishlistFinished());
      } else {
        dispatch(privateActionCreators.postWishlistFinished());
      }
    }
  }
};

export default actionCreators;

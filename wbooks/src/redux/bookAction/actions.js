import BookServices from '../../app/services/BookServices';

export const actionNames = {
  GET_BOOK_DETAIL: '@@BOOK/GET_BOOK_DETAIL',
  GET_BOOKS: '@@BOOK/GET_BOOKS',
  GET_BOOKS_SUCCESFULL: '@@BOOK/GET_BOOKS_SUCCESFULL',
  GET_BOOKS_FAILURE: '@@BOOK/GET_BOOKS_FAILURE',
  BOOK_FILTER: '@@BOOK/BOOK_FILTER'
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
        dispatch({ type: actionNames.GET_BOOKS_SUCCESFULL, payload: { books: response.data } });
      } else {
        dispatch({ type: actionNames.GET_BOOKS_FAILURE });
        // eslint-disable-next-line no-alert
        alert(response.problem);
      }
    };
  },
  bookFilter(value) {
    return { type: actionNames.BOOK_FILTER, payload: { value } };
  }
};

export default actionCreators;

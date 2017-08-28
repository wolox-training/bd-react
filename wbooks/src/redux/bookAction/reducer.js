import BookServices from '../../app/services/BookServices';

import { actionNames } from './actions';

const initialState = {
  bookList: BookServices.books,
  bookDetail: null
};

const bookAction = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.GET_BOOK_DETAIL:
      return {
        ...state,
        bookDetail: state.bookList.filter(book => `${book.id}` === action.payload.bookId)[0]
      };
    default:
      return state;
  }
};

export default bookAction;

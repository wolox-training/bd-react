import { shouldIncludeBook } from '../utils';

import { actionNames } from './actions';

const initialState = {
  bookList: [],
  bookDetail: null,
  filteredList: []
};

const bookAction = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.GET_BOOKS_SUCCESFULL:
      return {
        ...state,
        bookList: action.payload.books,
        filteredList: action.payload.books
      };
    case actionNames.GET_BOOKS_FAILURE:
      return state;
    case actionNames.BOOK_FILTER:
      return {
        ...state,
        filteredList: state.bookList.filter(
          book =>
            shouldIncludeBook(book, 'title', action.payload.value) ||
            shouldIncludeBook(book, 'author', action.payload.value)
        )
      };
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

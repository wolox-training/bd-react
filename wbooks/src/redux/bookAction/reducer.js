import { shouldIncludeBook } from '../utils';

import { actionNames } from './actions';

const initialState = {
  bookList: [],
  bookDetail: null,
  filteredList: [],
  rentInfo: null,
  sameUser: null,
  wishLoading: false
};

const bookAction = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.GET_BOOKS_SUCCESFUL:
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
    case actionNames.GET_RENT_STATUS_SUCCESFUL:
      const rentItem = action.payload.status.filter(rent => rent.book.id === state.bookDetail.id)[0];
      return {
        ...state,
        rentInfo: rentItem,
        sameUser: action.payload.currentUserId === rentItem.user.id
      };
    case actionNames.POST_WISHLIST:
      return {
        ...state,
        wishLoading: true
      };
    case actionNames.POST_WISHLIST_SUCCESFUL:
      return {
        ...state,
        wishLoading: false
      };
    case actionNames.POST_WISHLIST_FAILURE:
      return {
        ...state,
        wishLoading: false
      };
    default:
      return state;
  }
};

export default bookAction;

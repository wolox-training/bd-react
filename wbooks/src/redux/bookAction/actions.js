export const actionNames = {
  BOOK_DETAIL: 'BOOK_DETAIL'
};

const actionCreators = {
  getBookDetail(bookId) {
    return { type: actionNames.BOOK_DETAIL, payload: { bookId } };
  }
};

export default actionCreators;

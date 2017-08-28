export const actionNames = {
  GET_BOOK_DETAIL: '@@BOOK/GET_BOOK_DETAIL'
};

const actionCreators = {
  getBookDetail(bookId) {
    return { type: actionNames.GET_BOOK_DETAIL, payload: { bookId } };
  }
};

export default actionCreators;

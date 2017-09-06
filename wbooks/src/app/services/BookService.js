import api from '../../config/api';

export default {
  getBooks: async () => api.get('/books'),
  getRentStatus: async bookId => api.get(`/books/${bookId}/rents`),
  postWishlist: async (userId, bookId) =>
    api.post(`/users/${userId}/wishes`, { user_id: userId, book_id: bookId })
};

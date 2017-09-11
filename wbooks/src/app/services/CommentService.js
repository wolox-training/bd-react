import api from '../../config/api';

export default {
  getComments: async bookId => api.get(`/books/${bookId}/comments`),
  postComment: async (userId, bookId, content) => api.post(`/books/${bookId}/comments`, { book_id: bookId, user_id: userId, content })
};

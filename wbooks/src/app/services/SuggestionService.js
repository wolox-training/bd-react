import api from '../../config/api';

export default {
  getSuggestionList: async bookId => api.get(`/books/${bookId}/suggestions`)
};

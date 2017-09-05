import api from '../../config/api';

export default {
  getBooks: async () => api.get('/books')
};

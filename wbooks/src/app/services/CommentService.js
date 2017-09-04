import api from '../../config/api';

export default {
  getComments: async bookId => api.get('/books/' + `${bookId}` + '/comments')
};

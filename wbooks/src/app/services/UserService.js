import api from '../../config/api';

export default {
  loginUser: async (email, password) => api.post('/users/sessions', { email, password }),
  signupUser: async body => api.post('/users', body),
  setToken: token => api.setHeader('Authorization', token),
  getCurrentUser: async () => api.get('/users/me'),
  getUserWishes: async userId => api.get(`/users/${userId}/wishes`),
  postUserWish: async (userId, bookId) =>
    api.post(`/users/${userId}/wishes`, { user_id: userId, book_id: bookId })
};

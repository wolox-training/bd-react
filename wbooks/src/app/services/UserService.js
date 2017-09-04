import api from '../../config/api';

export default {
  loginUser: async (email, password) => api.post('/users/sessions', { email, password }),
  signupUser: async body => api.post('/users', body),
  setToken: token => api.setHeader('Authorization', token),
  getCurrentUser: async () => api.get('/users/me')
};

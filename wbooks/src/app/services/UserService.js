import { create } from 'apisauce';

const api = create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1/'
});

export default {
  loginUser: async (email, password) => api.post('/users/sessions', { email, password })
};

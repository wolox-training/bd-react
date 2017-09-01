import { create } from 'apisauce';

const api = create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1/',
  headers: { 'Content-Type': 'application/json' }
});

export default api;

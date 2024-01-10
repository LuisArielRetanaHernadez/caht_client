import axios from './axios';

const login = async (credentials) => {
  return axios.post('/users/login', credentials)
  .then(res => res.data)
}

const register = (...data) => {
  return axios.post('/register', ...data)
}

export { login, register };
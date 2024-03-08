import axios from './axios';

const login = async (credentials) => {
  return axios.post('/users/login', credentials)
  .then(res => res.data)
}

const register = (...data) => {
  return axios.post('/users/register', ...data)
}

const logout = async () => {
  localStorage.removeItem('user');
  return axios.post('/logout')
}

export { login, register, logout };
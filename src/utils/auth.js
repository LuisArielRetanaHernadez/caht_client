import axios from './axios';

const login = async (credentials) => {
  return axios.post('/users/login', credentials)
  .then(res => res.data)
}

const register = async (...data) => {
  const user = await axios.post('/users/register', ...data)
    .then(res => res.data)
    .catch(err => err)
  return user
}

const logout = async () => {
  localStorage.removeItem('user');
  return axios.post('/logout')
}

export { login, register, logout };
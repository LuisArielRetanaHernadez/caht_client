import axios from './Axios';

const login = (credentials) => {
  return axios.post('/login', credentials)
  .then(res => localStorage.setItem('token', JSON.stringify(res.data.token)))
}

const register = (...data) => {
  return axios.post('/register', ...data)
}

export { login, register };
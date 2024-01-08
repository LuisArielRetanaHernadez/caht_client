import axios from './Axios';

const login = async (credentials) => {
  return axios.post('/login', credentials)
  .then(res => res.data)
  .catch(err => err)
}

const register = (...data) => {
  return axios.post('/register', ...data)
}

export { login, register };
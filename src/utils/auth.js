import axios from './Axios';

const login = (credentials) => {
  return axios.post('/users/login', credentials)
  .then(res => {
    localStorage.setItem('token', JSON.stringify(res.data.token))
    return res
  })
}

const register = (...data) => {
  return axios.post('/register', ...data)
}

export { login, register };
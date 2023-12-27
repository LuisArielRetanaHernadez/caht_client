import axios from './Axios';

const login = (credentials) => {
  return axios.post('/users/login', credentials)
  .then(res => {
    localStorage.setItem('token', JSON.stringify(res.data.data.token))
    return res.data
  }).catch(error => {
    throw error
  })
}

const register = (...data) => {
  return axios.post('/register', ...data)
}

export { login, register };
import axios from './axios';

const login = async (credentials) => {
  try {
    const response = await axios.post('/users/login', credentials)
    console.log(response)
    return response.data
  } catch (error) {
    return error
  }  
}

const register = async (...data) => {
  const user = await axios.post('/users/register', ...data)
    .then(res => res)
    .catch(err => err)
  return user
}

const logout = async () => {
  localStorage.removeItem('user');
  return axios.post('/logout')
}

export { login, register, logout };
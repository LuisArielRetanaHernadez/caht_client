/* eslint-disable no-useless-escape */
import axios from 'axios';	

const urlsExcludeAuth = [
  /^\/email\/verify\/[^\/]+\/?$/,
];

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 1500,
})

instance.interceptors.request.use(
  req => {
    const user = JSON.parse(localStorage.getItem('user')); 
    if (user) {
      req.headers.Authorization = `Bearer ${user.token}`
    }

    return req;
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  res => res,
  error => {
    if (error.response.status === 401) {
      const isMatch = urlsExcludeAuth.some(url => url.test(window.location.pathname))
      if (urlsExcludeAuth.includes(window.location.pathname) || isMatch) {
        return Promise.reject(error);
      } else {
        localStorage.removeItem('user');
        window.location.href = '/login';
      }

    }
    return Promise.reject(error);

  }
)

export default instance;
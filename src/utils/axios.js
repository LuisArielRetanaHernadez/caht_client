import axios from 'axios';	

const instance = axios.create({
  baseURL: 'http://localhost:300/api/v1',
  timeout: 1500,
})

instance.interceptors.request.use(
  req => {
    const token = localStorage.getItem('token');
    
    req.headers.Authorization = `Bearer ${token}`

    return req;
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  res => res,
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);

  }
)
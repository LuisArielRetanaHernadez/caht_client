import Axios from '../utils/axios'

export const getContacts = async () => {
  const response = await Axios.get('/contacts')
  if (response.status === 401) { 
    return response
  }
  return response
}
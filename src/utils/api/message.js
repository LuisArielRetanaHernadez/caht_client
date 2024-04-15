import Axios from '../../utils/axios'

export const getAllMessagesByChat = (id) => {
  try {
    const response = Axios.get(`/messages/${id}`)
    return response.data
  } catch (error) {
    return error
  }
}

export const saveMessage = (data) => {
  try {
    const response = Axios.post('/messages/save', data)
    return response.data
  } catch (error) {
    return error
  }
}
import Axios from '../../utils/axios'

export const getAllMessagesByChat = async (id) => {
  try {
    const response = await Axios.get(`/messages/${id}`)
    return response.data
  } catch (error) {
    return error
  }
}

export const saveMessage = async (data) => {
  try {
    const response = Axios.post('/messages/save', data)
    return response.data
  } catch (error) {
    return error
  }
}
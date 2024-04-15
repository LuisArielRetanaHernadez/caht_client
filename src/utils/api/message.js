import Axios from '../../utils/axios'

export const getAllMessagesByChat = (id) => {
  try {
    const response = Axios.get(`/messages/${id}`)
    return response.data
  } catch (error) {
    return error
  }
}
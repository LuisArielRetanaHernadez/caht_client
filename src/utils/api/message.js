import Axios from '../../utils/axios'

export const getAllMessagesByChat = (id) => {
  try {
    const response = Axios.get(`/messages/${id}`)
    return response
  } catch (error) {
    return error
  }
}
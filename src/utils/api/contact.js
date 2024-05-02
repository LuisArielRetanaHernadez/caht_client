import Axios from "../axios"
export const getContacts = async (userID) => {
  try {
    const response = await Axios.get(`/contacts/all/${userID}`)
    return response.data
  } catch (error) {
    return error
  }

}
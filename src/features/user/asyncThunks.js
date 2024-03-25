import Axios from "../../utils/axios"

export const getContacts = async () => {
  const response = await Axios.get("/contacts")
  if (response.status.toString().startsWith(4)
  || response.status.toString().startsWith(5)) {
    return { error: response.data }
  }

  return response.data

}
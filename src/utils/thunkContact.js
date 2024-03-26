import Axios from "../utils/axios"

export const isContact = async (id) => {
  const contact = await Axios.get("/isContact", {
    id
  })
  return contact
}

export const getContact = async (id) => {
  const contacts = await Axios.get("/contact", {
    id
  })
  return contacts
}
import Axios from '../axios'

export const registerUser = async (payload) => {
  try {
    const response = await Axios.post('/users/register', payload)
    return response.data
  } catch (error) {
    return error
  }
}

export const verifyEmail = async (token, code) => {
  try {
    const verify = await Axios.post(`/users/verify/email/${token}`, {
      code
    })
    return verify.data
  } catch (error) {
    return error
  }
}

export const resendCodeEmail = async (token) => {
  try {
    const resendCode = await Axios.get(`/users/resend/code/email/${token}`)
    return resendCode.data
  } catch (error) {
    return error
  }
}

export const uploadImageProfile = async (id, photo) => {
  try {
    const response = await Axios.post(`/users/upload/image/profile/${id}`, {photo})
    console.log('subir nueva foto ', response.data)
    return response.data
  } catch (error) {
    return error
  }
}

export const verifyUserByIdAndAuth = async (id) => {
  try {
    const verifyUser = await Axios.get(`/users/verify/user/${id}`)
    return verifyUser
  } catch (error) {
    return error
  }
}

export const verifyTokenEmail = async (token) => {
  try {
    const verifyToken = await Axios.get(`/users/verify/email/token/${token}`)
    return verifyToken.data
  } catch (error) {
    return error
  }
}

export const getUser = async (id) => {
  try {
    const response = await Axios.get(`/users/${id}`)
    return response.data
  } catch (error) {
    return error
  }
}

export const updateUser = async (data) => {
  try {
    const response = await Axios.put(`/users/`, { data })
    return response.data
  } catch (error) {
    return error
  }
}

export const searchUsers = async (payload) => {
  try {
    const response = await Axios.get(`/users/search?user=${payload}`)
    return response.data
  } catch (error) {
    return error
  }
}

export const getListChat = async () => {
  try {
    const response = await Axios.get('/users/chats/all')
    return response.data
  } catch (error) {
    return error
  }
}

export const addChatToListChat = async () => {
  try {
    const response = await Axios.get('/users/chats/add')
    return response.data
  } catch (error) {
    return error
  }
}

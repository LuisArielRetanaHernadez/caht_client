import Axios from '../axios'

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

export const uploadImageProfile = async (data) => {
  try {
    const uploadImage = await Axios.post('/users/upload/image/profile', data)
    return uploadImage.data
  } catch (error) {
    return error
  }
}

export const verifyUserByIdAndAuth = async (id) => {
  try {
    const verifyUser = await Axios.get(`/users/verify/user/${id}`)
    return verifyUser.data
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

import Axios from '../axios'

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

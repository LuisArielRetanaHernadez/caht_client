import Axios from '../axios'

export const resendCodeEmail = async (email, token) => {
  try {
    const resendCode = await Axios.get(`/resend/code/email/$${token}`, {
      email
    })
    return resendCode.data
  } catch (error) {
    throw new Error(error.message)
  }
}

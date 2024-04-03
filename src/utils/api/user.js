import Axios from '../axios'

export const resendCodeEmail = async (token) => {
  try {
    const resendCode = await Axios.get(`/resend/code/email/$${token}`)
    return resendCode.data
  } catch (error) {
    throw new Error(error.message)
  }
}

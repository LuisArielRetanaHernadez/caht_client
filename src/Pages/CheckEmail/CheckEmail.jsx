import { useEffect, useRef, useState } from 'react';
import './CheckEmail.css'
import { Navigate, useParams } from 'react-router-dom'

import Axios from '../../utils/axios'
import { resendCodeEmail } from '../../utils/api/user';
const CheckEmail = () => {
  const [code, setCode] = useState(null)
  const [isVerify, setIsVerify] = useState(false)
  const [error, setError] = useState(false)

  const btnResendCode = useRef(null)

  const { token } = useParams();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await Axios.post(`/users/verify/email/token/${token}`)
      } catch (error) {
        return error
      }
    }
    verifyToken()
  },[token])

  const verifyEmail = async () => {
    try {
      await Axios.post(`/users/verify/email/${token}`, {
        code
      })
      setIsVerify(true)
      setIsVerify(true)
    } catch (error) {
      setIsVerify(false)
      setError(true)
      return error
    }
  }

  const resendCode = async (e) => {
    e.preventDefault()
    const newCode = await resendCodeEmail(token)
    console.log(newCode)
    if (btnResendCode.current) {
      if  (newCode.response.status === 200) {
        // add class button-success
        btnResendCode.current.classList.add('button--success')
        setTimeout(() => {
          btnResendCode.current.classList.remove('button--success')
        }, 1500)
      } else {
        btnResendCode.current.classList.add('button--error')
        setTimeout(() => {
          btnResendCode.current.classList.remove('button--error')
        }, 1500)
      }
    }
  }

  useEffect(() => {
    if (isVerify) {

      return <Navigate to='/' />
    }
  },[isVerify])

  return (
    <section className='wrapped--menu container container--center'>
      <div className="card">
        <h2 className="card__title">Verificacion del Correo</h2>
        <p className="card__text">
          Introduce el codigo que te enviamos al correo con el que te registrates
        </p>
        <form className="card__form">
          <div className='wrapped--flex-col'>
            <input className="input input--card text-center" type="text"
              placeholder="XXXX"
              onChange={(e) => setCode(e.target.value)}
            />
            {error && <span className="card__error-text">Codigo incorrecto</span>}
          </div>
          <div className='flex gap-10'>
            <button className="button button--card"
            ref={btnResendCode}
            onClick={resendCode}
            ><span style={{position: 'relative'}}>Renviar Codigo</span></button>
            <button onClick={verifyEmail} className="button button--card">verificar</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CheckEmail

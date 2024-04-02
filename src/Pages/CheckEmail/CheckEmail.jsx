import { useEffect, useState } from 'react';
import './CheckEmail.css'
import { Navigate, useParams } from 'react-router-dom'

import Axios from '../../utils/axios'
const CheckEmail = () => {
  const [code, setCode] = useState(null)
  const [isVerify, setIsVerify] = useState(false)
  const [error, setError] = useState(false)

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
        <form className="card__form" onSubmit={verifyEmail}>
          <input className="input input--card" type="text"
            placeholder="XXXX"
            onChange={(e) => setCode(e.target.value)}
           />
           {error && <span className="card__error-text">Codigo incorrecto</span>}
           <button className="button button--card">Verificar</button>
        </form>
      </div>
    </section>
  )
}

export default CheckEmail

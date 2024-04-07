// hooks react
import { useEffect, useRef, useState } from 'react';

// router dom
import { Navigate, useParams, useNavigate } from 'react-router-dom'

// redux toolkit
import { useDispatch } from "react-redux"
import { setUser } from "../../features/user/userSlice"

// api --> user
import { resendCodeEmail, verifyTokenEmail } from '../../utils/api/user';

// style CheckEmail
import './CheckEmail.css'

const CheckEmail = () => {
  const [code, setCode] = useState(null)
  const [isVerify, setIsVerify] = useState(false)
  const [error, setError] = useState(false)

  const dispatch = useDispatch()

  const btnResendCode = useRef(null)

  const { token } = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await verifyTokenEmail(token)
        if (response.response.status === 200) {

          const id = response.response.data.user._id
          const tokenSeccion = response.response.data.token
          const user = response.response.data.user

          dispatch(setUser({
            isLogin: true,
            token: tokenSeccion,
            user
          }))

          navigate(`/profile/${id}/upload/img`)
        }
      } catch (error) {
        navigate('*')
        return error
      }
    }
    verifyToken()
  },[token])

  const verifyEmail = async () => {
    try {
      await verifyEmail()
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

    if (btnResendCode.current) {
      if  (newCode.response.status === 200) {
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

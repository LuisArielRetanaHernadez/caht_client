import { useEffect, useState } from "react"

// redux
import { useDispatch, useSelector } from "react-redux"
import { loginAsync } from "../../features/user/userSlice"

// styles
import "./Login.css"

// svg
import closedEye from "../../assets/svg/closedEye.svg"
import openEye from "../../assets/svg/openEye.svg"

// router-dom
import { Link, Navigate } from "react-router-dom"

// components
import Socials from "../../components/socials/Socials"

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(true)
  
  const dispatch = useDispatch()

  const { isLogin } = useSelector((state) => state.user)
  const { user } = useSelector((state) => state)
  
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginAsync(values))
    setValues({
      email: "",
      password: "",
    })
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {
    if (isLogin) {
      localStorage.setItem("user", JSON.stringify(user))
    }
  }, [isLogin, user])

  if (isLogin) {
    return <Navigate to="/" />
  }
  
  return (
    <>
      <section className="container container--center wrapped--menu">
        
        <form className="form form--block form--shadow rounded-10" onSubmit={handleSubmit}>
        <div className="text-center wrapped wrapped--space-flex wrapped--colum-flex position-relative">
          <h2 className="form__title">Login</h2>

          <div className="form__field
              form__field--medium
              m-auto
              mt-20 
            ">
            <label className="form__field-title position-relative">Correo</label>
            <input
              className="form__input form__input--color-blue"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div className="form__field 
            form__field--medium
            m-auto
            mt-20  
          ">
            <label className="form__field-title">Contraseña</label>
            <div className="form__field form__field--password">
              <span
              onClick={togglePassword} 
              className="icon"
              >
                {showPassword ? <img className="icon__img" src={openEye} alt="openEye" /> 
                : <img className="icon__img" src={closedEye} alt="claseEye" /> }
              </span>
              <input 
                className="form__input form__input--color-blue"
                name="password"
                type={showPassword ? "password" : "text"}
                value={values.password}
                onChange={handleChange}
              />

            </div>
          </div>

          <div className="form__buttons mt-20">
            <button type='submit' className="button button--hover-color-pear rounded-10p">
              Iniciar
            </button>
            <Link to="/register" className="button button--hover-color-pear rounded-10p">
              Registrarse
            </Link>
          </div>

          <div className="form__reset mt-20">
            <Link to="/forgot-password" className="form__link">
              Olvidaste tu contraseña?
            </Link>
          </div>

          <span>Or</span>

          <Socials />
        </div>
         
        </form>
        {/* {isLogin && <Navigate to="/" />} */}
      </section>
    </>
  )
}

export default Login

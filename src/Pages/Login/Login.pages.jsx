import { useState } from "react"

// redux
import { useDispatch } from "react-redux"
import { loginAsync } from "../../features/user/userSlice"

// styles
import "./Login.styles.css"

// svg
import closedEye from "../../assets/svg/closedEye.svg"
import openEye from "../../assets/svg/openEye.svg"

// router-dom
import { Link } from "react-router-dom"

// components
import Socials from "../../components/socials/Socials"

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  
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
  
  return (
    <>
      <section className="container container--center">
        <form className="form form--shadow rounded-10p" onSubmit={handleSubmit}>
        <div className="text-center" style={{position: "relative", width: "100%", height: "100%", backdropFilter: blur("10px")}}>
          <h2 className="form__title">Login</h2>

          <div className="form__field
              form__field--medium
              form__field-center-m
              form__field-mt-15p 
            ">
            <label className="form__field-title position-relative">Correo</label>
            <input
              className="form__input form__input--color-blue"
              name="email"
              type="email"
              onChange={handleChange}
            />
          </div>

          <div className="form__field 
            form__field--medium
            form__field-center-m
            form__field-mt-15p 
          ">

            <label className="form__field-title">Contraseña</label>
            
            <div className="field__password">
              <span
              onClick={togglePassword} 
              className="icon"
              >
                {showPassword ? <img className="icon__img" src={closedEye} alt="closedEye" /> 
                : <img className="icon__img" src={openEye} alt="openEye" /> }
              </span>
              <input 
                className="form__input form__input--color-blue"
                name="password"
                type="password"
                onChange={handleChange}
              />

            </div>
          </div>

          <div className="form__buttons m-10p">
            <button className="button button--hover-color-pear rounded-10p">
              Iniciar
            </button>
            <Link to="/register" className="button button--hover-color-pear rounded-10p">
              Registrarse
            </Link>
          </div>

          <div className="form__reset m-10p">
            <Link to="/forgot-password" className="form__link">
              Olvidaste tu contraseña?
            </Link>
          </div>
          <span>Or</span>
          <Socials />
        </div>
         
        </form>
      </section>
    </>
  )
}

export default Login

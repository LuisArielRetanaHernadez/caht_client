import { useState } from "react"

// redux
import { useDispatch } from "react-redux"
import { loginAsync } from "../../features/user/userSlice"

// styles
import "./Login.styles.css"
import { Link } from "react-router-dom"

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
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
  
  return (
    <>
      <section className="container container--center">
        <form className="form form--shadow rounded-10p" onSubmit={handleSubmit}>
          <h2 className="form__title">Login</h2>
          <div className="form__field form__field--medium position-relative">
            <label className="form__field-tile position-relative">Correo</label>
            <input
              className="form__input"
              name="email"
              type="email"
              onChange={handleChange}
            />
          </div>
          <div className="form__field form__field--medium position-relative">
            <label className="form__field-title">Contraseña</label>
            <input 
              className="form__input"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </div>
          <div className="form__buttons position-relative">
            <button className="button">
              Iniciar
            </button>
            <Link to="/register" className="form__link">
              Registrarse
            </Link>
          </div>
          <div className="form__reset position-relative">
            <Link to="/forgot-password" className="form__link">
              Olvidaste tu contraseña?
            </Link>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login

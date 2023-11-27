import { useState } from "react"

// redux
import { useDispatch } from "react-redux"
import { loginAsync } from "../../features/user/userSlice"

// styles
import "./Login.styles.css"

import "./Login."
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
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__field">
          <label className="form__title">Correo</label>
          <input
          className="form__input"
           name="email"
           type="email" />
           onChange={handleChange}
        </div>
        <div className="form__field">
          <label className="form__title">Contraseña</label>
          <input 
          className="form__input"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <button className="button">Iniciar</button>
      </form>
    </>
  )
}

export default Login

import { useState } from "react"

// redux
import { useDispatch } from "react-redux"
import { loginAsync } from "../../features/user/userSlice"

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
      <form onSubmit={handleSubmit}>
        <div>
          <label>Correo</label>
          <input
           name="email"
           type="email" />
           onChange={handleChange}
        </div>
        <div>
          <label>Contraseña</label>
          <input 
            name="password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <button>Iniciar</button>
      </form>
    </>
  )
}

export default Login

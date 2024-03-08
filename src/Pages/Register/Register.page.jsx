/* eslint-disable react/jsx-no-duplicate-props */
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"

const datasFields = [
  {
    input: {
      clasName: '',
      id: '',
      text: 'name',
      type: 'text',
      name: 'name'
    },
    label: {
      clasName: '',
      id: '',
      text: 'Name',
      for: '',
    }
  },
  {
    input: {
      clasName: '',
      id: '',
      text: 'Last Name',
      type: 'text',
      name: 'lastName'
    },
    label: {
      clasName: '',
      id: '',
      text: 'Last Name',
      for: '',
    }
  },
  {
    input: {
      clasName: '',
      id: '',
      text: 'Username',
      type: 'text',
      name: 'username'
    },
    label: {
      clasName: '',
      id: '',
      text: 'Username',
      for: '',
    }
  },
  {
    input: {
      clasName: '',
      id: '',
      text: 'Email',
      type: 'text',
      name: 'email'
    },
    label: {
      clasName: '',
      id: '',
      text: 'Email',
      for: '',
    }
  },
  {
    input: {
      clasName: '',
      id: '',
      text: 'Age',
      type: 'number',
      name: 'age'
    },
    label: {
      clasName: '',
      id: '',
      text: 'Age',
      for: '',
    }
  },
  {
    input: {
      clasName: 'form__field--password',
      id: '',
      text: 'Password',
      type: 'password',
      name: 'password'
    },
    label: {
      clasName: '',
      id: '',
      text: 'Password',
      for: '',
    }
  },
  {
    input: {
      clasName: 'form__field--password',
      id: '',
      text: 'Confirm Password',
      type: 'password',
      name: 'confirmPassword'
    },
    label: {
      clasName: '',
      id: '',
      text: 'Confirm Password',
      for: '',
    }
  },
]

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    username: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    setValues({
      name: '',
      lastName: '',
      username: '',
      age: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  const fields = datasFields.map((field, index) => (
    <>
      <div key={index} className="form__field form__field--medium m-auto m-10p">
        <label className="form__field-title">{field.label.text}</label>
          { field.input.type === 'password' ?
              <div className="form__field form__field--password">
                <span
                onClick={() => setShowPassword(!showPassword)} 
                className="icon"
                >
                  {showPassword ? <FontAwesomeIcon icon={faEye}  /> 
                  : <FontAwesomeIcon icon={faEyeSlash} /> }
                </span>
                <input 
                  className="form__input form__input--color-blue"
                  name="password"
                  type={showPassword ? "password" : "text"}
                  placeholder={field.input.text}
                  name={field.input.name}
                  onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                />

              </div> :
              <input type={field.input.type}
                placeholder={field.input.text}
                className={field.input.clasName + 
                ` form__input form__field-medim`}
                name={field.input.name}
                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                />
          }
      </div>
    </>
  ))

  return (
    <>
      <section className="w-full container container--center wrapped--menu-min-h ">
        <form onSubmit={handleSubmit} className="form form--shadow form--block positon-relative rounded-10">
          <div className="wrapped text-center position-relative">
            <h2 className="form__title">Register</h2>
            {fields}
            <div className="w-50 m-auto m-10p">
              <button className="w-full button">Enviar</button>
              <Link to='/login'>Tienes una cuenta ya?</Link>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
/* eslint-disable react/jsx-no-duplicate-props */
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useSelector } from 'react-redux'

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
      name: 'passwordConfirm'
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
  const [typePassword, setTypePassword] = useState('password')
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    username: '',
    age: 0,
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const { isLogin } = useSelector(state => state.user)

  const handleSubmit = (e) => {
    e.preventDefault()
    setValues({
      name: '',
      lastName: '',
      username: '',
      age: '',
      email: '',
      password: '',
      passwordConfirm: '',
    })
  }

  useEffect(() => {
    if (showPassword) setTypePassword('text')
    else setTypePassword('password')
  }, [showPassword])

  if (isLogin) {
    return <Navigate to="/" />
  }

  const fields = datasFields.map((field, index) => (
    <div key={index} className="form__field form__field--medium m-auto mt-20">
      <label className="form__field-title">{field.label.text}</label>
        <div className="form__field form__field--password">
        {
          field.input.type === 'password' ? 
            <span
              onClick={() => setShowPassword(!showPassword)} 
              className="icon"
              >
              {showPassword ? <FontAwesomeIcon icon={faEye}  /> 
              : <FontAwesomeIcon icon={faEyeSlash} /> }
            </span>
          : ''
        }

          <input
            placeholder={field.input.text}
            className={field.input.clasName + ` form__input form__field-medim`}
            type={field.input.type === 'password' ? typePassword : field.input.type}
            name={field.input.name}
            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} 
          />
        </div> 
    </div>
  ))

  return (
    <>
      <section className="w-full h-auto p-1rem container container--center wrapped--menu-min-h  ">
        <form onSubmit={handleSubmit} className="form form--shadow form--block positon-relative rounded-10">
          <div className="wrapped text-center position-relative">
            <h2 className="form__title">Register</h2>
            {fields}
            <div className="w-50 m-auto mt-20">
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
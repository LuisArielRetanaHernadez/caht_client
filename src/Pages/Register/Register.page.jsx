
const Register = () => {

  const datasFields = [
    {
      input: {
        clasName: '',
        id: '',
        text: 'name',
        type: 'text'
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
        type: 'text'
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
        text: 'Age',
        type: 'number'
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
        clasName: '',
        id: '',
        text: 'Password',
        type: 'password'
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
        clasName: '',
        id: '',
        text: 'Confirm Password',
        type: 'password'
      },
      label: {
        clasName: '',
        id: '',
        text: 'Confirm Password',
        for: '',
      }
    },
  ]

  const fields = datasFields.map((field, index) => (
    <>
      <div key={index} className="form__field">
        <label>{field.label.text}</label>
        <input type={field.input.type}
          placeholder={field.input.text}
          className={field.input.clasName}
          />
      </div>
    </>
  ))

  return (
    <>
      <section className="container container--center">
        <form className="form form--shadow rounded-10p">
          <div>
            <h2>Register</h2>
            {fields}
            <div>
              <button>Enviar</button>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
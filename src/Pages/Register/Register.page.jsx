
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
      <div key={index} className="form__field m-auto m-10p">
        <label className="form__field-title">{field.label.text}</label>
        <input type={field.input.type}
          placeholder={field.input.text}
          className={field.input.clasName + 
          ` form__input form__field-medim`}
          />
      </div>
    </>
  ))

  return (
    <>
      <section className="container container--center wrapped--menu ">
        <form className="form form--shadow rounded-10">
          <div className="wrapped text-center">
            <h2 className="form__title">Register</h2>
            {fields}
            <div className="m-10p">
              <button>Enviar</button>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
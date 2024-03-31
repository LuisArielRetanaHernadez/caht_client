import './CheckEmail.css'
const CheckEmail = () => {
  return (
    <section className='wrapped--menu container container--center'>
      <div className="card">
        <h2 className="card__title">Verificacion del Correo</h2>
        <p className="card__text">
          Introduce el codigo que te enviamos al correo con el que te registrates
        </p>
        <form className="card__form">
          <input className="input input--card" type="text" />
        </form>
      </div>
    </section>
  )
}

export default CheckEmail

import './CheckEmail.css'
const CheckEmail = () => {
  return (
    <div className="card">
      <h2 className="card__title">Verificacion del menu</h2>
      <p className="card__text">
        Introduce el codigo que te enviamos al correo con el que te registrates
      </p>
      <form className="card__form">
        <input className="card__input" type="text" />
      </form>
    </div>
  )
}

export default CheckEmail

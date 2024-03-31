import './CheckEmail.css'
import { useParams } from 'react-router-dom'
const CheckEmail = () => {
  const { toke } = useParams();
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

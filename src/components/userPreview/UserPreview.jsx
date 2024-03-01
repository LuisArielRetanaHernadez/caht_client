import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import './UserPreview.css'
const UserPreview = () => {
  return (
    <div className="user-preview user-preview--center-content
     user-preview--gap-20 user-preview--top-65 p-1rem rounded-10">
      <div className="avatar avatar--preview">
        <img
        className="avatar__img"
         src="" alt="" />
      </div>
      <div className="user-preview__information">
        <p className="user-preview__username">Name</p>
        <p className="user-preview__frende">Amigo</p>
      </div>
      <div>
      <span className="icon pointer">
      <FontAwesomeIcon icon={faArrowDown} />
      </span>
        <ul className='list list--sub'>
          <li className='list__item'>Bloquear</li>
          <li className='list__item'>Agregar</li>
          <li className='list__item'>Editar</li>
        </ul>
      </div>
    </div>
  )
}

export default UserPreview
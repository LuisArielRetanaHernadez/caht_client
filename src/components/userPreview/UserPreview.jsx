// react hooks
import { useEffect, useRef, useState } from 'react'

// redux tookit
import { useSelector } from 'react-redux'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

// style UserPreview
import './UserPreview.css'

const UserPreview = () => {

  const [showMenu, setShowMenu] = useState(false)

  const menuSub = useRef(null)

  useEffect(() => {
    if (showMenu) {
      menuSub.current.style.display = 'flex'
    } else {
      menuSub.current.style.display = 'none'
    }
  }, [showMenu])

  const {
    contact,
    name
  } = useSelector(state => state.contact)

  return (
    <div className="user-preview user-preview--center-content
     user-preview--gap-20 user-preview--top-4 user-preview--center-x p-1rem rounded-10 z-index">
      
      <div className="avatar avatar--preview">
        <img
        className="avatar__img"
         src="https://images.pexels.com/photos/15005609/pexels-photo-15005609/free-photo-of-puesta-de-sol-hombre-silueta-tarde.jpeg" alt="" />
      </div>

      <div className="user-preview__information">
        <p className="user-preview__username">{name}</p>
        <p className="user-preview__frende">{contact ? 'Contacto' : 'Agregar'}</p>
      </div>

      <div>
      <span
       className="user-preview__blue icon icon--hover-white icon--sub-menu pointer"
        onClick={() => setShowMenu(!showMenu)}
       >
        <FontAwesomeIcon icon={faArrowDown} />
      </span>

        <ul
        ref={menuSub}
         className='list'>
          <li className='list__item pointer rounded-10'>Bloquear</li>
          <li className='list__item pointer rounded-10'>Agregar</li>
          {
            contact && <li className='list__item pointer rounded-10'>Editar</li>
          }
        </ul>

      </div>
    </div>
  )
}

export default UserPreview
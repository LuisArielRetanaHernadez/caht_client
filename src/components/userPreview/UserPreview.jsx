import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import './UserPreview.css'
import { useEffect, useRef, useState } from 'react'
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

  return (
    <div className="user-preview user-preview--center-content
     user-preview--gap-20 user-preview--top-65 p-1rem rounded-10">
      <div className="avatar avatar--preview">
        <img
        className="avatar__img"
         src="https://images.pexels.com/photos/15005609/pexels-photo-15005609/free-photo-of-puesta-de-sol-hombre-silueta-tarde.jpeg" alt="" />
      </div>
      <div className="user-preview__information">
        <p className="user-preview__username">Name</p>
        <p className="user-preview__frende">Amigo</p>
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
         className='list list--sub'>
          <li className='list__item'>Bloquear</li>
          <li className='list__item'>Agregar</li>
          <li className='list__item'>Editar</li>
        </ul>
      </div>
    </div>
  )
}

export default UserPreview
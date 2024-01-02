import { Link } from "react-router-dom";

import '../ListChat/ListChat.css'

/* eslint-disable react/prop-types */
const ItemChat = ({name, messageLast, photo}) => {

  return (
    <>
      <li className="list-chat__item">
        <Link className="list-chat__link">
          <div className="list-chat__content">
            <figure className="list-chat__image">
              <img className="list-chat__img" src={photo} alt="photo user" />
            </figure>
            <div className="list-chat__information">
              <span className="list-chat__name">{name}</span>
              <p className="list-chat__message">{messageLast}</p>
            </div>
          </div>
        </Link>

        <span className="circle circle--green circle--small circle--0-tr">
        </span>
      </li>
    </>
  )
}

export default ItemChat;

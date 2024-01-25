import { Link } from "react-router-dom";

import '../ListChat/ListChat.css'
import manager from "../../utils/websocket";
import { useEffect, useState } from 'react';

/* eslint-disable react/prop-types */
const ItemChat = ({id, name, messageLast, photo}) => {
  const [userOnline, setUserOnline] = useState(false)
  const socket = manager.socket('/users')

  useEffect(() => {
    socket.emit('users online')
    socket.on('users online', (data) => {
      const isOnline = data.some(user => {
        return id === user.userId;  // id === user.userId ? true : false;  // id === user.userId ? true : false;  // id === user.userId ? true : false;  // id === user.userId ? true : false;  // id === user.userId ?
      })
      setUserOnline(isOnline)
    })

    return () => {
      setUserOnline(false)
    }
  },[id])


  return (
    <>
      <li className="list-chat__item">
        <Link className="list-chat__link">
          <div className="list-chat__content">
            <figure className={`${photo ? '' : 'bg-gradient '}list-chat__image`}>
              {photo ? <img className="list-chat__img" src={photo} alt="photo user" /> : ''}
            </figure>
            <div className="list-chat__information">
              <span className="list-chat__name">{name}</span>
              <span className="list-chat__status">{userOnline ? 'online' : 'off'}</span>
              <p className="list-chat__message">{messageLast}</p>
            </div>
          </div>
        </Link>

        <span className="circle circle--low-blue circle--small circle--0-tr">
        </span>
      </li>
    </>
  )
}

export default ItemChat;

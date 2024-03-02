import { Link } from "react-router-dom";

import '../ListChat/ListChat.css'
import manager from "../../utils/websocket";
import { useEffect, useState } from 'react';

/* eslint-disable react/prop-types */
const ItemChat = ({ id, name, messageLast, photo}) => {
  const [userOnline, setUserOnline] = useState(false)
  const socket = manager.socket('/users')

  useEffect(() => {
    socket.emit('users online')
    socket.on('users online', (data) => {
      const isOnline = data.some(user => {
        return id === user._id;  // id === user.userId ? true : false;  // id === user.userId ? true : false;  // id === user.userId ? true : false;  // id === user.userId ? true : false;  // id === user.userId ?
      })
      setUserOnline(isOnline)
    })

    return () => {
      setUserOnline(false)
    }
  },[id])

  useEffect(() => {
    console.log('userOnline ', userOnline)
  }, [userOnline])


  return (
    <>
      <li className="list-chat__item">
        <Link 
        to={`/chat/${id}`}
        className="list-chat__link">
          <figure className={`${photo ? '' : 'bg-gradient'} list-chat__image`}>
            {photo ? <img className="list-chat__img" src={photo} alt="photo user" /> : ''}
          </figure>
          <div className="list-chat__information">
            <span className="list-chat__name">{name}</span>
            <p className="list-chat__message">{messageLast}</p>
          </div>
        </Link>

        <span className={`circle circle--small circle--0-tr ${userOnline ? 'circle--online' : 'circle--offline'}`}>
        </span>
      </li>
    </>
  )
}

export default ItemChat;

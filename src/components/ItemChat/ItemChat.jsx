/* eslint-disable react/prop-types */

// react hooks
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux'
import { selectContact } from "../../features/contact/contactSlice"

// router-dom
import { Link } from "react-router-dom";

// manager socket
import manager from "../../utils/websocket";

// style ListChat.css
import '../ListChat/ListChat.css'

const ItemChat = ({ id, name, messageLast, photo}) => {
  const [userOnline, setUserOnline] = useState(false)
  const socket = manager.socket('/users')

  const dispatch = useDispatch()


  useEffect(() => {
    socket.on('users online', (data) => {

      const isOnline = data.some(user => {
        return id === user._id;
      })

      setUserOnline(isOnline)
    })

    return () => {
      setUserOnline(false)
    }
  },[id])

  const onContact = () => {
    dispatch(selectContact({id, contact: false, }))
  }


  return (
    <>
      <li className="list-chat__item">
        <Link 
        to={`/chat/${id}`}
        onClick={onContact}
        className="list-chat__link"
        >

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

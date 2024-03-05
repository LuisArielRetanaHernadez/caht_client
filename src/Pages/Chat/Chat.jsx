// react hooks
import { useEffect, useState } from "react"

// router-dom
import { Navigate, useParams } from "react-router-dom"

// redux toolkit
import { useSelector } from "react-redux"

// components
import Message from "../../components/Message/Message"
import UserPreview from "../../components/userPreview/UserPreview"

// style chat
import "./Chat.style.css"

import manager from "../../utils/websocket"
const Chat = () => {
  const socket = manager.socket('/users')

  const { id } = useParams()

  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')


  useEffect(() => {
    socket.on('message', (data) => {
      setMessages(prev => [...prev, { message: data.message, author: data.to, isAuthor: false}])
    })

    return () => {
      socket.off('message')
    }
  }, [])

  const sendMessage = (e) => {
    e.preventDefault();

    setMessages(prev => [...prev, {message, author: 'tu', isAuthor: true}])

    setMessage('')
    socket.emit('send message', {message, to: id})
  }

  const { isLogin } = useSelector((state) => state.user);

  if (!isLogin) {
    return <Navigate to="/login" />
  }

  return (
    <div className="chat">
      <div className="chat__messages position-relative">

      <UserPreview />

        {messages.map((m, i) => (    
          <Message key={i} message={m.message} author={m.author} isAuthor={m.isAuthor} />
        )) ?? "No hay mensajes"}
        
      </div>
      <div className="chat__box-send-message">
        <form onSubmit={sendMessage} className="chat__form rounded-10px" action="">
          <textarea
            rows={1}
            wrap="hard"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
           className="input input--send-message rounded-10" type="text" />
          <button type="submit" className="button button--send-message rounded-10">Enviar</button>
        </form> 
      </div>
    </div>
  )
}

export default Chat
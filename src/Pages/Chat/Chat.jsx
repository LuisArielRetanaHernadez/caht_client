import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import Message from "../../components/Message/Message"
// style chat
import "./Chat.style.css"
import { useSelector } from "react-redux"
import UserPreview from "../../components/userPreview/UserPreview"
// import axios from "axios"
// import instanceAxios from "../../utils/axios"
import manager from "../../utils/websocket"
const Chat = () => {
  const socket = manager.socket('/users')
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  const { id } = useParams()

  useEffect(() => {
    socket.on('message', (data) => {
      console.log('message resivido useEffect')
      setMessages(prev => [...prev, data])
    })

    return () => {
      socket.off('message')
    }
  }, [])

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages(prev => [...prev, {message, author: 'user'}])
    setMessage('')
    socket.emit('send message', {message, to: id})
  }

  const { isLogin } = useSelector((state) => state.user);

  if (!isLogin) {
    return <Navigate to="/login" />
  }

  return (
    <div className="chat">
      <div className="chat__messages">
      <UserPreview />
        {messages.map((m, i) => (    
          <Message key={i} message={m.message} author={m.author} />
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
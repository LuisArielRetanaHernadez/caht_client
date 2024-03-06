// react hooks
import { useEffect, useState } from "react"

// router-dom
import { Navigate, useParams } from "react-router-dom"

// redux toolkit
import { useDispatch, useSelector } from "react-redux"

// components
import Message from "../../components/Message/Message"
import UserPreview from "../../components/userPreview/UserPreview"

// axios instacia
import Axios from "../../utils/axios"

// style chat
import "./Chat.style.css"

import manager from "../../utils/websocket"
import { setError } from "../../features/error/errorSlice"
const Chat = () => {
  const socket = manager.socket('/users')

  const { id } = useParams()

  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    const getMessages = async () => {
      try {
        const messagesDB = await Axios.get(`/messages/${id}`)
        console.log(messagesDB)
        if (messagesDB.status === 200) {
          console.log(messagesDB.data.messages)
          setMessages(messagesDB.data.data.messages)
        }
      } catch (error) {
        dispatch(setError({
          message: error.response.data.message,
          statusCode: error.response.status,
          isError: true
        }))
      }

    }

    getMessages()
  }, [id])

  useEffect(() => {
    socket.on('message', (data) => {
      
      setMessages(prev => [...prev, { message: data.message, author: data.username, isAuthor: false}])
    })

    return () => {
      socket.off('message')
    }
  }, [])

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return

    const sendNewMessage = async () => {
      try {
        const newMessage = await Axios.post('/messages/save', {
          message,
          id
        })

        if (newMessage.response.status === 204) {
          setMessages(prev => [...prev, {message, author: 'tu', isAuthor: true}])
        }
      } catch (error) {
        dispatch(setError({
          message: error.response.data.message,
          statusCode: error.response.status,
          isError: true
        }))
      }
    }

    sendNewMessage()

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
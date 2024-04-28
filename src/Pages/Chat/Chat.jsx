// react hooks
import { useEffect, useRef, useState } from "react"

// router-dom
import { Navigate, useParams } from "react-router-dom"

// redux toolkit
import { useDispatch, useSelector } from "react-redux"

// reducer setError -> errorSlice
import { setError } from "../../features/error/errorSlice"

// manager socket
import manager from "../../utils/websocket"

// components
import Message from "../../components/Message/Message"
import UserPreview from "../../components/userPreview/UserPreview"

// style chat
import "./Chat.style.css"
import { getAllMessagesByChat, saveMessage } from "../../utils/api/message"

const Chat = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  const socket = manager.socket('/users')
  
  const { id } = useParams()

  const { user } = useSelector((state) => state.user);

  const boxMessages = useRef(null)

  const dispatch = useDispatch()

  socket.on('connect_error', err => {
    dispatch(setError({
      message: err.message,
      statusCode: err.code,
      setError: true
    }))
  })

  useEffect(() => {
    const getMessages = async () => {
      const response = await getAllMessagesByChat(id)
      console.log(response);
      if (response.status === 'succes') {

        setMessages(response.data.messages)
      } else {

        dispatch(setError({
          message: response.message,
          statusCode: response.status,
          isError: true
        }))

      }
      
    }

    getMessages()

    return () => {
      setMessages([])
    }
  }, [id])

  useEffect(() => {
    socket.on('message', (data) => {
      setMessages(prev => [...prev, { 

        content: data.message,
          author: {
            username: data.username,
          }
      }])
    })

    return () => {
      socket.off('message')
    }
  }, [])

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message);
    if (!message) return

    const sendNewMessage = async () => {
      const response = await saveMessage({message, id})

      if (response.status === 'success') {
        setMessages(prev => [...prev, {
          content: message,
          author: { username: user.username }
        }])

      } else {
        dispatch(setError({
          message: response.message,
          statusCode: response.status,
          isError: true
        }))

      }

    }

    sendNewMessage()

    setMessage('')
    socket.emit('send message', {message, to: id})
  }

  useEffect(() => {
    if (boxMessages.current) {
      boxMessages.current.scrollTop = boxMessages.current.scrollHeight;
    }
  }, [boxMessages?.current?.scrollHeight, messages])

  const { isLogin } = useSelector((state) => state.user);

  if (!isLogin) {
    return <Navigate to="/login" />
  }

  return (
    <div className="chat">
      <div ref={boxMessages} className="chat__messages position-relative">

      <UserPreview />

        {messages.map((m, i) => (    
          <Message key={i} id={m._id} content={m.content} author={m.author} />
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
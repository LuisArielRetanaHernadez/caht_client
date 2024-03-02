import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import Message from "../../components/Message/Message"
// style chat
import "./Chat.style.css"
import { useSelector } from "react-redux"
import UserPreview from "../../components/userPreview/UserPreview"
// import axios from "axios"
import instanceAxios from "../../utils/axios"
import manager from "../../utils/websocket"
const Chat = () => {
  const socket = manager.socket('/users')
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  const { id } = useParams()

  useEffect(() => {

    const getMessage = async () => {
      instanceAxios.get(`/messages/${id}`)
        .then((res) => {
          console.log(res.data)
          setMessages(res.data)
        })
    }
    getMessage()
  },[])

  useEffect(() => {
    socket.on('message', (data) => {
      console.log(data)
      setMessages(prev => [...prev, data])
    })
  }, [socket])

  const sendMessage = (e) => {
    e.preventDefault()
    // socket.emit('message', message)
    // console.log(message)
    // setMessage(prev => [...prev, message])
    // console.log(message)
    // axios.post('/messages', message)
    //   .then((res) => {
    //     console.log(res.data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    socket.emit('send message', messages)
  }

  const { isLogin } = useSelector((state) => state.user);

  if (!isLogin) {
    return <Navigate to="/login" />
  }

  return (
    <div className="chat">
      <div className="chat__messages">
      <UserPreview />
        {messages.map((m) => (    
          <Message key={m.id} message={m.message} author={m.author} />
        )) ?? "No hay mensajes"}
      </div>
      <div className="chat__box-send-message">
        <form onSubmit={sendMessage} className="chat__form rounded-10px" action="">
          <textarea
            rows={2}
            wrap="hard"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
           className="input input--send-message rounded-10" type="text" />
          <buttonm className="button button--send-message rounded-10">Enviar</buttonm>
        </form> 
      </div>
    </div>
  )
}

export default Chat
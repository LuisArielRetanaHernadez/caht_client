import InputMessage from "../../components/InputMessage/InputMessage"
import ListChat from "../../components/ListChat/ListChat"

// redux
import { useSelector } from "react-redux"

// router-dom
import { Navigate } from "react-router-dom"

// utils
import manager from "../../utils/websocket"

// styles
import './Chat.css'

// componets
import Message from "../../components/Message/Message"


const socket = manager.socket('/users')

socket.on('connect', () => { 
  console.log('connected')
  socket.emit('message', 'hello')
})

const Chat = () => {

  const { isLogin } = useSelector((state) => state.user)

  if (!isLogin) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <section className="flex">
        <div className="w-25">
          <ListChat />
        </div>
        <div className="chat flex-grow-1">
          <div className="chat__content">
            <Message />
          </div>
          <InputMessage />
        </div>
      </section>
    </>
  )

}

export default Chat

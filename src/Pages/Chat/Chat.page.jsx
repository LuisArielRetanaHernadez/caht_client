import InputMessage from "../../components/InputMessage/InputMessage"
import ListChat from "../../components/ListChat/ListChat"

// redux
import { useSelector } from "react-redux"

// router-dom
import { Navigate } from "react-router-dom"

// utils
import manager from "../../utils/websocket"


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
        <div>
          <InputMessage />
        </div>
      </section>
    </>
  )

}

export default Chat

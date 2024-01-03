
import { useSelector } from "react-redux"
import manager from "../../utils/websocket"
import { Navigate } from "react-router-dom"
import ListChat from "../../components/ListChat/ListChat"
import InputMessage from "../../components/InputMessage/InputMessage"

const socket = manager.socket('/users')

socket.on('connect', () => {
  console.log('connected')
  socket.emit('message', 'hello')
})

const Home = () => {

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

export default Home
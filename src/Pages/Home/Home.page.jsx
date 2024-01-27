
import { useSelector } from "react-redux"
import manager from "../../utils/websocket"
import { Navigate } from "react-router-dom"

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
      </section>
    </>
  )
}

export default Home
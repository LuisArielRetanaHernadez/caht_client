import manager from "../../utils/websocket"

const socket = manager.socket('/users')

socket.on('connect', () => {
  console.log('connected')
  socket.emit('message', 'hello')
})

const Home = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  )
}

export default Home
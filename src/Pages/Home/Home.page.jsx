import { io } from "socket.io-client"
const Home = () => {
  const socket = io("http://localhost:3000/chat")
  socket.on("connect", () => {
    console.log("connected")
    socket.emit("message", 'hola')
  })
  socket.on("ping", () => {
    console.log("pong")
  })
  console.log(socket)
  return (
    <>
      <h1>Home</h1>
    </>
  )
}

export default Home
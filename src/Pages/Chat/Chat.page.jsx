// components
import InputMessage from "../../components/InputMessage/InputMessage"
import ListChat from "../../components/ListChat/ListChat"

// redux
import { useSelector } from "react-redux"

// router-dom
import { Navigate } from "react-router-dom"

// styles
import './Chat.css'

// componets
import Message from "../../components/Message/Message"

import { useEffect } from "react"

import manager from "../../utils/websocket"

const Chat = () => {
  const { isLogin } = useSelector((state) => state.user)

  const socket = manager.socket('/users')

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected')
    })
    socket.on('disconnect', () => {
      console.log('disconnected')
    })
    return () => {
      socket.off('connect')
      socket.off('disconnect')
    }
  },[])

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
          <div className="chat__content chat__content--p-1rm">
            <Message
            message={'Hola, que haces? vamos a salir?wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'}
            author={'John Doe'}
             />
          </div>
          <InputMessage />
        </div>
      </section>
    </>
  )

}

export default Chat

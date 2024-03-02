import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import Message from "../../components/Message/Message"
// style chat
import "./Chat.style.css"
import { useSelector } from "react-redux"
import UserPreview from "../../components/userPreview/UserPreview"
const Chat = () => {
  const [message, setMessage] = useState([{
    id: 1,
    message: 'Hola como estas',
    author: 'luis'
  }])
  const params = useParams()
  const { id } = params


  useEffect(() => {

    const getMessage = async () => {
      const response = await fetch(`XXXXXXXXXXXXXXXXXXXXXXXXXXX${id}`)
      const data = await response.json()
      setMessage(data)
    }
    getMessage()
  },[])

  const { isLogin } = useSelector((state) => state.user);

  if (!isLogin) {
    return <Navigate to="/login" />
  }

  return (
    <div className="chat">
      <div className="chat__messages">
      <UserPreview />
        {message.map((m) => (    
          <Message key={m.id} message={m.message} author={m.author} />
        )) ?? "No hay mensajes"}
      </div>
      <div className="chat__box-send-message">
        <form className="chat__form rounded-10px" action="">
          <textarea
            rows={2}
            wrap="hard"
           className="input input--send-message rounded-10" type="text" />
          <button className="button button--send-message rounded-10">Enviar</button>
        </form> 
      </div>
    </div>
  )
}

export default Chat
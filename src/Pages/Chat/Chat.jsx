import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const Chat = () => {
  const [message, setMessage] = useState([])
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

  return (
    <div className="chat">
      <div className="chat__messages">
        {message.map((m) => (
          <div key={m.id}>{m.message}</div>
        )) ?? "No hay mensajes"}
      </div>
      <div className="chat__box-message">
        <form className="chat__form" action="">
          <input className="chat__message" type="text" />
          <button className="button">Enviar</button>
        </form> 
      </div>
    </div>
  )
}

export default Chat
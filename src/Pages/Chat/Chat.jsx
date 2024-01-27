import { useEffect, useState } from "react"
import { useFetcher, useParams } from "react-router-dom"
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
    <div>
      <div>
        {message.map((m) => (
          <div key={m.id}>{m.message}</div>
        )) ?? "No hay mensajes"}
      </div>
      <div>
        <form action="">
          <input type="text" />
          <button>Enviar</button>
        </form> 
      </div>
    </div>
  )
}

export default Chat
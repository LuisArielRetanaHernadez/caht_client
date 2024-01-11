import ItemChat from "../ItemChat/ItemChat"

// style ListChat
import './ListChat.css'

// manager insta
import manager from "../../utils/websocket"
import { useEffect, useState } from 'react'
import Search from "../Search/Search"

// axios
import axios from "../../utils/axios"

const ListChat = () => {
  const [users, setUsers] = useState([])
  const [isConnected, setIsConncted] = useState(false)



  const searchUsers = async (value) => {
    const usersFinds = await axios.get(`/users/search?user=${value}`, { value })
    if (usersFinds) {
      setUsers(usersFinds.data.data.usersFind)
    }
  }

  const socket = manager.socket('/users')

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected')
    })
    socket.on('connect_error', error => {
      console.log(error)
    
    })
    return () => {
      socket.off('connect')
      socket.on('disconnect')
    }
  },[])

  const items = users.map((contact, index) => (
    <ItemChat 
      key={index}
      name={contact.Name}
      messageLast={contact.message}
      photo={contact.photo}
    />
  ))

  return (
    <>
      <div className="list-chat">
        <Search onSubmit={searchUsers}/>
        <ul className="list-chat__list">
          {items ?? <span className="legend">Start adding your contacts</span>}
        </ul>
      </div>
    </>
  )

}

export default ListChat

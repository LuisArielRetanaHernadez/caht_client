import ItemChat from "../ItemChat/ItemChat"

// style ListChat
import './ListChat.css'

// manager insta
import manager from "../../utils/websocket"
import { useState } from 'react'
import Search from "../Search/Search"

// axios
import axios from "../../utils/axios"

const socket = manager.socket("/users")

const ListChat = () => {
  const [users, setUsers] = useState([])

  socket.emit("list users", () => {
    socket.on("list users", (data) => {
      setUsers(data)
    })
  })


  const searchUsers = async (value) => {
    const usersFinds = await axios.get(`/users/search
    ?user=${value}`, { value })
    if (usersFinds) {
      console.log('usuario encontrados ', usersFinds.data.data.usersFind)
      setUsers(usersFinds.data.data.usersFind)
    }
  }

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

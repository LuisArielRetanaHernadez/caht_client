// hooks react
import { useEffect, useState } from 'react'

// components -> ItemChat
import ItemChat from "../ItemChat/ItemChat"

// components -> Search
import Search from "../Search/Search"

// insta axios
import { searchUsers } from "../../utils/api/user"

// manager socket
import manager from "../../utils/websocket"

// style ListChat
import './LIstChat.css'


const socket = manager.socket('/users')

const ListChat = () => {

  const [users, setUsers] = useState([])

  const searchUser = async (value) => {
    const usersFinds =  await searchUsers(value)

    if (usersFinds.status === 'success') {
      setUsers(usersFinds.data.usersFind)
    }

  }

  useEffect(() => {
    socket.emit('list chat')

    socket.on('list chat', (data) => {
      const chatsFormated = data.map(chat => {
        return {
          _id: chat.users[0]._id,
          name: chat.users[0].username,
          message: chat.messages[chat.messages.length - 1].content,
          photo: chat.users[0].photo
        }
      })

      setUsers(chatsFormated)
      
    })
  
    return () => {
      socket.off('list chat')
    }
  }, [])

  const items = users.map((contact, index) => (
    <ItemChat 
      key={index}
      id={contact._id}
      name={contact.name}
      messageLast={contact.message}
      photo={contact.photo}
    />
  ))

  return (
    <>
      <div className="list-chat">
        <Search onSubmit={searchUser}/>
        <ul className="list-chat__list grid">
          {items ?? <span className="legend">Start adding your contacts</span>}
        </ul>
      </div>
    </>
  )

}

export default ListChat

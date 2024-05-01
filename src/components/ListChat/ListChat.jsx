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


const ListChat = () => {
  const [listChat, setListChat] = useState([])

  const socket = manager.socket('/users')

  useEffect(() => {
    socket.emit('listchat')
  }, [])

  useEffect(() => {
    socket.on('list chat', list => {
      setListChat(list.chats)
    })

    return () => {
      socket.off('listchat')
    }
  }, [])

  const searchUser = async (value) => {
    const usersFinds =  await searchUsers(value)

    if (usersFinds.status === 'success') {
      setListChat(usersFinds.data.usersFind)
    }

  }


  const items = listChat.map((contact, index) => (
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

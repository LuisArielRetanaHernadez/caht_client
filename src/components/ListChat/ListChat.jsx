// hooks react
import { useEffect, useState } from 'react'

// components -> ItemChat
import ItemChat from "../ItemChat/ItemChat"

// components -> Search
import Search from "../Search/Search"

// insta axios
import { getListChat, searchUsers } from "../../utils/api/user"

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

  useEffect(() => {
    const getChats = async () => {
      const response = await getListChat()
      setListChat(response.data.listChat.chats)
      console.log('chasss -> ', response.data.listChat.chats)
    }
    getChats()
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
      id={contact.users[0]._id}
      name={contact.users[0].name}
      messageLast={contact.messages[0].content}
      photo={contact.users[0].photo}
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

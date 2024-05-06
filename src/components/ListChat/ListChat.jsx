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
      console.log('chasss -> ', response.data.listChat)
      if (response.status === 'success' && response.data.listChat.length > 0) {

        setListChat(response.data.listChat)
      }

    }
    getChats()
  }, []) 

  const searchUser = async (value) => {
    const usersFinds =  await searchUsers(value)
    console.log('usersFinds -> ', usersFinds)
    if (usersFinds.status === 'success') {
      setListChat(usersFinds.data.usersFind)
    }

  }


  const items = listChat.map((contact, index) => (
    <ItemChat 
      key={index}
      id={contact.user._id}
      name={contact.user.name}
      messageLast={contact?.messages?.content}
      photo={contact.user.photo}
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

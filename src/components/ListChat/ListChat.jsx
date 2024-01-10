import ItemChat from "../ItemChat/ItemChat"

// style ListChat
import './ListChat.css'

// manager insta
import { useState } from 'react'
import Search from "../Search/Search"

// axios
import axios from "../../utils/axios"

const ListChat = () => {
  const [users, setUsers] = useState([])

  const searchUsers = async (value) => {
    const usersFinds = await axios.get(`/users/search?user=${value}`, { value })
    if (usersFinds) {
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

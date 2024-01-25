// components
import ItemChat from "../ItemChat/ItemChat"
import Search from "../Search/Search"

// style ListChat
import './ListChat.css'

// hooks react
import { useEffect, useState } from 'react'

// insta axios
import axios from "../../utils/axios"

const ListChat = () => {
  const [users, setUsers] = useState([])

  const searchUsers = async (value) => {
    const usersFinds = await axios.get(`/users/search?user=${value}`, { value })
    if (usersFinds) {
      setUsers(usersFinds.data.data.usersFind)
    }
  }

  useEffect(() => {
    return () => setUsers([])
  },[])

  const items = users.map((contact, index) => (
      <ItemChat 
        key={index}
        id={contact._id}
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

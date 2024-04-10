// components
import ItemChat from "../ItemChat/ItemChat"
import Search from "../Search/Search"

// style ListChat
import './ListChat.css'

// hooks react
import { useState } from 'react'

// insta axios
import { searchUsers } from "../../utils/api/user"

const ListChat = () => {
  const [users, setUsers] = useState([])

  const searchUser = async (value) => {
    const usersFinds =  await searchUsers(value)
    if (usersFinds) {
      setUsers(usersFinds.data.data.usersFind)
    }
  }

  const items = users.map((contact, index) => (
      <ItemChat 
        key={index}
        id={contact._id}
        name={contact.name}
        messageLast={contact.message}
        photo={contact.photo}
      />
    ))

  console.log(users)

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

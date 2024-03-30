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
    const getContacts = async () => {
      const contacts = await axios.get('/contacts')
      console.log(contacts)
      if (contacts) {
        console.log(contacts.data.data.contacts.contacts)
        setUsers(contacts.data.data.contacts.contacts)
      }
    }
    getContacts()
  },[])

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
        <Search onSubmit={searchUsers}/>
        <ul className="list-chat__list grid">
          {items ?? <span className="legend">Start adding your contacts</span>}
        </ul>
      </div>
    </>
  )

}

export default ListChat

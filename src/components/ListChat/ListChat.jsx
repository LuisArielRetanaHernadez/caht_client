// components
import ItemChat from "../ItemChat/ItemChat"
import Search from "../Search/Search"

// style ListChat
import './ListChat.css'

// hooks react
import { useEffect, useState } from 'react'

// insta axios
import { searchUsers } from "../../utils/api/user"

const ListChat = () => {
  const [users, setUsers] = useState([])

  const searchUser = async (value) => {
    const usersFinds =  await searchUsers(value)
    if (usersFinds.message === 'search users') {
      setUsers(usersFinds.data.usersFind)
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
        <Search onSubmit={searchUser}/>
        <ul className="list-chat__list grid">
          {items ?? <span className="legend">Start adding your contacts</span>}
        </ul>
      </div>
    </>
  )

}

export default ListChat

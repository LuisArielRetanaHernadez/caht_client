import ItemChat from "../ItemChat/ItemChat"

// style ListChat
import './ListChat.css'

const listContacts = [
  {
    name: 'John Doe',
    message: 'Hello, how are you?',
    photo: 'https://res.cloudinary.com/dqmkovsdy/image/upload/v1702954354/cards_slider/fyaowaxwsulbd714yysi.jpg'
  },
  {
    name: 'Jose Fer',
    message: 'Hello...',
    photo: 'XXXXXXXXXXXXXXXXXXXXXXXXX'
  }
]

const ListChat = () => {

  const items = listContacts.map((contact, index) => (
    <ItemChat 
      key={index}
      name={contact.name}
      messageLast={contact.message}
      photo={contact.photo}
    />
  ))

  return (
    <>
      <div className="list-chat">
        <ul className="list-chat__list">
          {items ?? <span className="legend">Start adding your contacts</span>}
        </ul>
      </div>
    </>
  )

}

export default ListChat

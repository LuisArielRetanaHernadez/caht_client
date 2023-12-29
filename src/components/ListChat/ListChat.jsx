import ItemChat from "../ItemChat/ItemChat"

const listContacts = [
  {
    name: 'John Doe',
    message: 'Hello, how are you?',
    photo: 'XXXXXXXXXXXXXXXXXXXXXXXXX'
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
      photo={contact.avatar}
    />
  ))

  return (
    <>
      <div>
        <ul>
          {items && <span>There are no contacts</span>}
        </ul>
      </div>
    </>
  )

}

export default ListChat

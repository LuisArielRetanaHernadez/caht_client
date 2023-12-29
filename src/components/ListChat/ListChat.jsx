import ItemChat from "../ItemChat/ItemChat"

const listContacts = [
  {
    name: 'John Doe',
    message: 'Hello, how are you?',
    avatar: 'XXXXXXXXXXXXXXXXXXXXXXXXX'
  },
  {
    name: 'Jose Fer',
    message: 'Hello...',
    avatar: 'XXXXXXXXXXXXXXXXXXXXXXXXX'
  }
]

const ListChat = () => {

  const items = listContacts.map((contact, index) => (
    <ItemChat 
      key={index}
      name={contact.name}
      message={contact.message}
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

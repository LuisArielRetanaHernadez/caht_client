/* eslint-disable react/prop-types */
const ItemChat = ({name, messageLast, photo}) => {

  return (
    <>
      <li>
        <div>
          <figure>
            <img src={photo} alt="photo user" />
          </figure>
          <div>
            <span>{name}</span>
            <p>{messageLast}</p>
          </div>
        </div>
      </li>

    </>
  )
}

export default ItemChat;

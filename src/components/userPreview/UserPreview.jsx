import './UserPreview.css'
const UserPreview = () => {
  return (
    <div className="user-preview user-preview--gap-8 p-1rem rounded-10">
      <div className="avatar">
        <img
        className="avatar__img"
         src="" alt="" />
      </div>
      <div className="user-preview__information">
        <p className="user-preview__username">Name</p>
        <p className="user-preview__frende">Amigo</p>
      </div>
      <div>
      <span className="button">
        mas
      </span>
        <ul>
          <li>Bloquear</li>
          <li>Agregar</li>
          <li>Editar</li>
        </ul>
      </div>
    </div>
  )
}

export default UserPreview
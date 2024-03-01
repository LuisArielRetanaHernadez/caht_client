const UserPreview = () => {
  return (
    <div className="user-preview">
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
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getUser, updateUser } from "../../utils/api/user"

/* eslint-disable no-unused-vars */
const User = (props) => {
  const [isAuthor, setIsAuthor] = useState(false)
  const [dataUser, setDataUser] = useState({
    id: '',
    username: '',
    name: '',
    lastName: ''
  })
  const user = useSelector(state => state.user)

  const { id } = useParams()

  const update = async (data) => {
    const response = await updateUser(data)
  }

  const getInformationUser = async () => {
    const response = await getUser(id)
    if  (response.status === 200) {
      setDataUser(response.data)
    }
  }

  useEffect(() => {
    getInformationUser()
    if (user.ID === id) {
      setIsAuthor(true)
    }
  }, [id])
	return (
		<div className="container">
			<header className="header">
        <div className="profile__image-header">
          <img></img>
        </div>
        <div className="profile__image-user">
          <img></img>
        </div>
      </header>

      <div className="profile_content">
        <form className="form">
          <div className="form__field">
            <label className="form__label">Username</label>
            {
              isAuthor ? 
              <input className="form__input" type="text" placeholder="Username" defaultValue={'Username'} /> 
              : <p className="text">Username</p>
            }
          </div>
          <div className="form__field">
            <label className="form__label">Name</label>
            {
              isAuthor ?
              <input className="form__input" type="text" placeholder="Name" defaultValue={'Name'} /> 
              : <p className="text">Name</p>
            }
          </div>
          <div className="form__field">
            <label className="form__label">Last Name</label>
            {
              isAuthor ? 
              <input className="form__input" type="text" placeholder="Last Name" defaultValue={'Last Name'} /> 
              : <p className="text">Last Name</p>
            }
          </div>
        </form>
      </div>

      <div className="profile_content">
        <h3 className="sub-title">Contacts</h3>
        <ul className="list">
          <li className="item">
            <Link className="user-content">
              <div className="user-content__box">
                <div className="user-content__avatar">
                  <img></img>
                </div>
              </div>
              <div className="user-content__box">
                <h3 className="text">Name</h3>
              </div>
            </Link>
          </li>
        </ul>
      </div>
		</div>
  )
}

export default User
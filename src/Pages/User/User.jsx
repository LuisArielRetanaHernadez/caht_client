/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getUser, updateUser } from "../../utils/api/user"

import './user.style.css'

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

  const handleSubmit = (e) => {
    e.preventDefault()
    update(dataUser)
  }

  useEffect(() => {
    getInformationUser()
    if (user.ID === id) {
      setIsAuthor(true)
    }
  }, [id])
	return (
		<div className="profile">
			<header className="header profile__content">
        <div className="profile__image-header">
          <img src="https://www.xtrafondos.com/wallpapers/fortnite-capitulo-2-4215.jpg"></img>
        </div>
        <div className="profile__image-user">
          <img src="https://www.xtrafondos.com/wallpapers/fortnite-plague-3769.jpg"></img>
        </div>

      </header>

      <div>
        <h2 className="title profile__name-user">Alison Mendez</h2>
        <p className="text profile__username">@alisonmendez</p>
      </div>

      <div className="profile__content">
        <form className="form profile__form" onSubmit={handleSubmit}>
          <div className="form__field form__field--profile">
            <label className="form__label form__label--profile">Username</label>
            {
              isAuthor ? 
              <input className="form__input form__input--profile" type="text" placeholder="Username" defaultValue={'Username'} /> 
              : <p className="text">Username</p>
            }
          </div>
          <div className="form__field form__field--profile">
            <label className="form__label--profile">Name</label>
            {
              isAuthor ?
              <input className="form__input form__input--profile" type="text" placeholder="Name" defaultValue={'Name'} /> 
              : <p className="text">Name</p>
            }
          </div>
          <div className="form__field form__field--profile">
            <label className="form__label form__label--profile">Last Name</label>
            {
              isAuthor ? 
              <input className="form__input form__input--profile" type="text" placeholder="Last Name" defaultValue={'Last Name'} /> 
              : <p className="text">Last Name</p>
            }
          </div>
          {
            isAuthor &&
            <div className="profile__content-button">
              <button className="button button__profile">Save</button>
            </div>
          }

        </form>
      </div>

      <div className="profile__content">
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
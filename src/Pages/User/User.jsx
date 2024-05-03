/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getUser, updateUser } from "../../utils/api/user"
import { getContacts } from "../../utils/api/contact"
import './user.style.css'
import CloudinaryWidget from "../../components/widgetCloudinary/CloudinaryWidget"


/* eslint-disable no-unused-vars */
const User = (props) => {
  const [isAuthor, setIsAuthor] = useState(false)
  const [dataUser, setDataUser] = useState({
    id: '',
    username: '',
    name: '',
    lastName: ''
  })
  const [contacts, setContacts] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const [imageAvatar, setImageAvatar] = useState("https://www.xtrafondos.com/wallpapers/naruto-uzumaki-mano-elevada-baryon-mode-8737.jpg")
  const [imageHeader, setImageHeader] = useState("https://www.xtrafondos.com/wallpapers/fortnite-x-todos-los-trajes-de-battle-pass-skins-season-10-3751.jpg")

  const user = useSelector(state => state.user)

  const { id } = useParams()

  const update = async (data) => {
    const response = await updateUser(data)
  }

  const getInformationUser = async () => {
    const response = await getUser(id)
    if  (response.status === 'success') {
      console.log(response.data.user)
      setDataUser({
        id,
        username: response.data.user.username,
        name: response.data.user.name,
        lastName: response.data.user.lastName
      })
      setImageAvatar(response.data.user.photo)
      setImageHeader(response.data.user.photo)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    update(dataUser)
  }

  const getAllContacts = async () => {
    const response = await getContacts(id)
    if (response.status === 'success') {
      setContacts(response.data.contacts)
    }
  }

  useEffect(() => {
    getInformationUser()
    if (user.ID === id) {
      setIsAuthor(true)
    }
    getAllContacts(id)
  }, [id])

  useEffect(() => {
    if (dataUser) {
      setIsUpdate(false)
    }
  }, [dataUser])
	return (
		<div className="profile">
			<header className="header profile__content">

        <div className="profile__image-header">
          <div className="widget__image-content rounded-0">
              <img src={imageHeader}></img>
              {
                isAuthor &&
                <CloudinaryWidget />
              }
          </div>
        </div>
        <div className="profile__image-user">
          <div className="widget__image-content">
            <img src={imageAvatar}></img>
            {
              isAuthor &&
              <CloudinaryWidget />
            }
            
          </div>
        </div>

      </header>

      <div>
        <h2 className="title profile__name-user">{dataUser.name} {dataUser.lastName}</h2>
        <p className="text profile__username">@{dataUser.username}</p>
      </div>

      <div className="profile__content">
        <form className="form profile__form" onSubmit={handleSubmit}>
          <div className="form__field form__field--profile">
            <label className="form__label form__label--profile">Username</label>
            {
              isAuthor ? 
              <input className="form__input form__input--profile" type="text" placeholder="Username" defaultValue={dataUser.username} /> 
              : <p className="profile__text">{dataUser.username}</p>
            }
          </div>
          <div className="form__field form__field--profile">
            <label className="form__label--profile">Name</label>
            {
              isAuthor ?
              <input className="form__input form__input--profile" type="text" placeholder="Name" defaultValue={dataUser.name} /> 
              : <p className="profile__text">{dataUser.name}</p>
            }
          </div>
          <div className="form__field form__field--profile">
            <label className="form__label form__label--profile">Last Name</label>
            {
              isAuthor ? 
              <input className="form__input form__input--profile" type="text" placeholder="Last Name" defaultValue={dataUser.lastName} /> 
              : <p className="profile__text">{dataUser.lastName}</p>
            }
          </div>
          {
            isAuthor && isUpdate &&
            <div className="profile__content-button">
              <button className="button button__profile">Save</button>
            </div>
          }

        </form>
      </div>

      <div className="profile__content">
        <h3 className="sub-title">Contacts</h3>
        <ul className="list list--profile m-auto">

          {contacts.length ? contacts.map((contact, index) => (
            <li className="item rounded-10" key={index}>
              <Link className="user-content">
                <div className="user-content__avatar">
                  <img src={contact.photo}></img>
                </div>
                <div className="text-center flex direction-column items-center justify-center flex-1">
                  <h3 className="user-content__name">{contact.name}</h3>
                </div>
              </Link>
            </li>
          ))
          : (<h2>Sin Contacts</h2>)}
        </ul>
      </div>
		</div>
  )
}

export default User
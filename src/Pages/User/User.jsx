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
		<div>
			<header>
        <div>
          <img></img>
        </div>
        <div>
          <img></img>
        </div>
      </header>

      <div>
        <div>
          <label>Username</label>
          {
            isAuthor ? 
            <input type="text" placeholder="Username" defaultValue={'Username'} /> 
            : <p>Username</p>
          }
        </div>
        <div>
          <label>Name</label>
          {
            isAuthor ?
            <input type="text" placeholder="Name" defaultValue={'Name'} /> 
            : <p>Name</p>
          }
        </div>
        <div>
          <label>Last Name</label>
          {
            isAuthor ? 
            <input type="text" placeholder="Last Name" defaultValue={'Last Name'} /> 
            : <p>Last Name</p>
          }
        </div>
      </div>

      <div>
      <h3>Contacts</h3>
        <ul>
          <li>
            <Link >
              <div>
                <div>
                  <img></img>
                </div>
              </div>
              <div>
                <h3>Name</h3>
              </div>
            </Link>
          </li>
        </ul>
      </div>
		</div>
  )
}

export default User
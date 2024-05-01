import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

/* eslint-disable no-unused-vars */
const User = (props) => {
  const [isAuthor, setIsAuthor] = useState(false)
  const user = useSelector(state => state.user)

  const { id } = useParams()

  useEffect(() => {
    if (user.id === id) {
      setIsAuthor(true)
    }
  })
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
            <input></input> 
            : <p></p>
          }
        </div>
        <div>
          <label>Name</label>
          {
            isAuthor ?
            <input></input> 
            : <p></p>
          }
        </div>
        <div>
          <label>Last Name</label>
          {
            isAuthor ? 
            <input></input> 
            : <p></p>
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
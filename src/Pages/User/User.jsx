import { Link, useParams } from "react-router-dom"

/* eslint-disable no-unused-vars */
const User = (props) => {
  const { id } = useParams()
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
          <input></input>
        </div>
        <div>
          <label>Name</label>
          <input></input>
        </div>
        <div>
          <label>Last Name</label>
          <input></input>
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
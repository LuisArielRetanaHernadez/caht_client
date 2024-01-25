// componentes
import Logo from "../../components/Logo/Logo"

// router-dom-v6
import { Outlet } from "react-router";

// style
import "./Menu.layout.css" 

// router-dom-v6
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/user/userSlice";

const Menu = () => {

  const { isLogin } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const logoutLocal = () => {
    localStorage.removeItem('user')
  }

  const onLogout = () => {
    logoutLocal()
    dispatch(logout)
  }

  return (
    <>
      <header className="menu menu--short">
        <div className="menu__wrappe menu__wrappe--height-full">
          <div className="menu__logo">
            <Logo />
          </div>
          <span className="menu__button">Pu</span>
          <nav className="menu__nav">
            <ul className="menu__list">
            {
              isLogin ? <li className="menu__item">
                <button className="menu__link" onClick={onLogout}>Logout</button>
              </li> :
              <li className="menu__item">
                <Link className="menu__link" to="/login">Login</Link>
              </li>
            }
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>

  )
}

export default Menu;
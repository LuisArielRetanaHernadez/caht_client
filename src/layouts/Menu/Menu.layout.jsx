// componentes
import Logo from "../../components/Logo/Logo"

// router-dom-v6
import { Outlet } from "react-router";

// style
import "./Menu.layout.css" 
import "../../index.css"

// router-dom-v6
import { Link, redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";
import manager from "../../utils/websocket";
import Mobal from "../../components/Mobal/Mobal";

const Menu = () => {

  const socket = manager.socket('/users')

  const dispatch = useDispatch()

  const logoutSeccion = () => {
    dispatch(logout())
    socket.disconnect()
    localStorage.removeItem('user')
    return redirect('/login')
  }

  return (
    <>
    <Mobal />
      <header className="menu">
        <Link to='/' className="ml-5rem">
          <Logo />
        </Link>
        <nav className="menu__navegation mr-5rem">
          <ul className="menu__list position-relative z-index-10">
            <li className="menu__item menu__item--p-0 menu__list-sub--show position-relative">
              <Link className="avatar">
                <img 
                className="avatar__img"
                src="https://images.pexels.com/photos/15005609/pexels-photo-15005609/free-photo-of-puesta-de-sol-hombre-silueta-tarde.jpeg"
                ></img>
              </Link>

              <ul className="menu__list menu__list-sub">
                <li 
                onClick={logoutSeccion}
                className="menu__item menu__item--bg-blue">
                  <span>Logout</span>
                </li>
              </ul>

            </li>

          </ul>
        </nav>
      </header>
      <Outlet />
    </>

  )
}

export default Menu;
// componentes
import Logo from "../../components/Logo/Logo"

// router-dom-v6
import { Outlet } from "react-router";

// style
import "./Menu.layout.css" 
import "../../index.css"

// router-dom-v6
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/user/userSlice";
import manager from "../../utils/websocket";
import Mobal from "../../components/Mobal/Mobal";

const Menu = () => {

  const socket = manager.socket('/users')

  const navigate = useNavigate()
  
  const { isLogin, user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const logoutSeccion = () => {
    dispatch(logout())
    socket.disconnect()
    localStorage.removeItem('user')
    return navigate('/login')
  }

  return (
    <>
    <Mobal />
      <header className="menu">
        <Link to='/' className="menu__logo ml-5rem">
          <Logo />
        </Link>
        <nav className="menu__navegation mr-5rem">
          <ul className="menu__list position-relative z-index-10">
          {
            isLogin ? <li className="menu__item menu__item--p-0 menu__list-sub--show position-relative">
                      <Link className="avatar">
                        <img 
                        className="avatar__img"
                        src={user.photo}
                        ></img>
                      </Link>

                      <ul className="menu__list menu__list-sub">
                        <li 
                        onClick={logoutSeccion}
                        className="menu__item menu__item--bg-blue">
                          <span>Logout</span>
                        </li>
                      </ul>

                    </li> : ''
          }


          </ul>
        </nav>
      </header>
      <Outlet />
    </>

  )
}

export default Menu;
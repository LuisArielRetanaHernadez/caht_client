// componentes
import Logo from "../../components/Logo/Logo"

// router-dom-v6
import { Outlet } from "react-router";

// style
import "./Menu.layout.css" 
import "../../index.css"

// router-dom-v6
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useRef } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../features/user/userSlice";

const Menu = () => {

  const subMenu = useRef(null)

  // const logoutLocal = () => {
  //   localStorage.removeItem('user')
  // }

  const toggleSubMenu = () => {
    if(subMenu.current.classList.contains('menu__list--show')){
      subMenu.current.classList.remove('menu__list--show')
      subMenu.current.classList.add('menu__list--hidden')
    } else {
      subMenu.current.classList.remove('menu__list--hidden')
      subMenu.current.classList.add('menu__list--show')
    }
  }


  return (
    <>
      <header className="menu">
        <div className="ml-5rem">
          <Logo />
        </div>
        <nav className="menu__navegation mr-5rem">
        <div className="avatar avatar--gradiant-orange">
        </div>
          <ul className="list list--submenu p-1rem ">
            <li className="mb-1rem">
              <Link className="link" to="/">Perfil</Link>
            </li>
            <li>
              <Link className="link" to="/about">Cerrar Seccion</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>

  )
}

export default Menu;
// componentes
import Logo from "../../components/Logo/Logo"

// router-dom-v6
import { Outlet } from "react-router";

// style
import "./Menu.layout.css" 
import "../../index.css"

// router-dom-v6
import { Link } from "react-router-dom";

const Menu = () => {

  return (
    <>
      <header className="menu">
        <div className="ml-5rem">
          <Logo />
        </div>
        <nav className="menu__navegation list--hover mr-5rem">
          <div className="avatar avatar--gradiant-orange list--hover pointer">
          </div>
          <ul className="list list--submenu list--submenu-hide-show list--min-width-100px p-1rem ">
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